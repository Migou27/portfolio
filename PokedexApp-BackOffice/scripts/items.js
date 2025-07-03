// Check authentication and admin role
(function() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!token || user.role !== 'admin') {
        window.location.href = 'index.html';
    }
})();

const token = localStorage.getItem('token');

const apiUrl = 'http://localhost:3000/api/items';

const itemsTable = document.getElementById('itemsTable').getElementsByTagName('tbody')[0];
const itemFormModal = document.getElementById('itemFormModal');
const itemForm = document.getElementById('itemForm');
const addItemBtn = document.getElementById('addItemBtn');
const cancelItemBtn = document.getElementById('cancelItemBtn');

// Pagination variables
let currentPage = 1;
let totalPages = 1;
let totalItems = 0;
const itemsPerPage = 50;

function loadItems(page = 1) {
    currentPage = page;
    fetch(`${apiUrl}?page=${page}&limit=${itemsPerPage}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log('Loaded items:', data);
            const items = data.items;
            totalPages = data.pagination.totalPages;
            totalItems = data.pagination.totalItems;
            
            itemsTable.innerHTML = '';
            items.forEach(item => {
                console.log('Processing item:', item);
                const row = itemsTable.insertRow();
                row.innerHTML = `
                    <td>${item._id || ''}</td>
                    <td>${item.name}</td>
                    <td>${item.effect || ''}</td>
                    <td>${item.sprite_default ? `<img src='${item.sprite_default}' alt='${item.name}' width='32'/>` : ''}</td>
                    <td>
                        <button onclick="editItem('${item.name}')">Edit</button>
                        <button onclick="deleteItem('${item.name}')">Delete</button>
                    </td>
                `;
            });
            
            updatePagination();
        })
        .catch(error => {
            console.error('Error loading items:', error);
            itemsTable.innerHTML = '<tr><td colspan="5">Error loading items</td></tr>';
        });
}

window.editItem = function(name) {
    fetch(`${apiUrl}/${encodeURIComponent(name)}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(item => {
            console.log('Editing item:', item);
            document.getElementById('itemId').value = item.name;
            document.getElementById('itemName').value = item.name;
            document.getElementById('itemType').value = item.effect || '';
            document.getElementById('itemSprite').value = item.sprite_default || '';
            itemFormModal.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error editing item:', error);
            alert('Error loading item for editing');
        });
};

window.deleteItem = function(name) {
    if (confirm('Delete this item?')) {
        fetch(`${apiUrl}/${encodeURIComponent(name)}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(() => {
            console.log('Item deleted successfully');
            loadItems();
        })
        .catch(error => {
            console.error('Error deleting item:', error);
            alert('Error deleting item');
        });
    }
};

addItemBtn.addEventListener('click', () => {
    itemForm.reset();
    document.getElementById('itemId').value = '';
    itemFormModal.classList.remove('hidden');
});

cancelItemBtn.addEventListener('click', () => {
    itemFormModal.classList.add('hidden');
});

itemForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('itemId').value;
    const newName = document.getElementById('itemName').value;
    const effect = document.getElementById('itemType').value;
    const sprite_default = document.getElementById('itemSprite').value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}/${encodeURIComponent(id)}` : apiUrl;
    
    // For create operations, use 'name', for update operations, use 'newName'
    const body = id ? 
        { newName, effect, sprite_default } :
        { name: newName, effect, sprite_default };
    fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(() => {
        console.log('Item saved successfully');
        itemFormModal.classList.add('hidden');
        loadItems();
    })
    .catch(error => {
        console.error('Error saving item:', error);
        alert('Error saving item');
    });
});

function updatePagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    
    // First button
    const firstBtn = document.createElement('button');
    firstBtn.textContent = 'First';
    firstBtn.className = 'pagination-btn';
    firstBtn.disabled = currentPage === 1;
    firstBtn.onclick = () => loadItems(1);
    paginationContainer.appendChild(firstBtn);
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.className = 'pagination-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => loadItems(currentPage - 1);
    paginationContainer.appendChild(prevBtn);
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.onclick = () => loadItems(i);
        paginationContainer.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.className = 'pagination-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => loadItems(currentPage + 1);
    paginationContainer.appendChild(nextBtn);
    
    // Last button
    const lastBtn = document.createElement('button');
    lastBtn.textContent = 'Last';
    lastBtn.className = 'pagination-btn';
    lastBtn.disabled = currentPage === totalPages;
    lastBtn.onclick = () => loadItems(totalPages);
    paginationContainer.appendChild(lastBtn);
}

// Initial load
loadItems(); 