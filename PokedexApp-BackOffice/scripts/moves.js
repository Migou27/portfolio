// Check authentication and admin role
(function() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!token || user.role !== 'admin') {
        window.location.href = 'index.html';
    }
})();

const token = localStorage.getItem('token');
const apiUrl = 'http://localhost:3000/api/moves';

const movesTable = document.getElementById('movesTable').getElementsByTagName('tbody')[0];
const moveFormModal = document.getElementById('moveFormModal');
const moveForm = document.getElementById('moveForm');
const addMoveBtn = document.getElementById('addMoveBtn');
const cancelMoveBtn = document.getElementById('cancelMoveBtn');

// Pagination variables
let currentPage = 1;
let totalPages = 1;
let totalItems = 0;
const itemsPerPage = 50;

function loadMoves(page = 1) {
    currentPage = page;
    fetch(`${apiUrl}?page=${page}&limit=${itemsPerPage}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log('Loaded moves:', data);
            const moves = data.moves;
            totalPages = data.pagination.totalPages;
            totalItems = data.pagination.totalItems;
            
            movesTable.innerHTML = '';
            moves.forEach(move => {
                console.log('Processing move:', move);
                const row = movesTable.insertRow();
                row.innerHTML = `
                    <td>${move._id || ''}</td>
                    <td>${move.name || ''}</td>
                    <td>${move.accuracy || ''}</td>
                    <td>${move.pp || ''}</td>
                    <td>${move.power || ''}</td>
                    <td>${move.priority || ''}</td>
                    <td>${move.type || ''}</td>
                    <td>${move.damage_class || ''}</td>
                    <td>${move.short_effect || ''}</td>
                    <td>
                        <button onclick="editMove('${move.name}')">Edit</button>
                        <button onclick="deleteMove('${move.name}')">Delete</button>
                    </td>
                `;
            });
            
            updatePagination();
        })
        .catch(error => {
            console.error('Error loading moves:', error);
            movesTable.innerHTML = '<tr><td colspan="10">Error loading moves</td></tr>';
        });
}

window.editMove = function(name) {
    fetch(`${apiUrl}/${encodeURIComponent(name)}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(move => {
            console.log('Editing move:', move);
            document.getElementById('moveId').value = move.name;
            document.getElementById('moveDbId').value = move._id || '';
            document.getElementById('moveName').value = move.name || '';
            document.getElementById('moveAccuracy').value = move.accuracy || '';
            document.getElementById('movePP').value = move.pp || '';
            document.getElementById('movePower').value = move.power || '';
            document.getElementById('movePriority').value = move.priority || '';
            document.getElementById('moveType').value = move.type || '';
            document.getElementById('moveDamageClass').value = move.damage_class || '';
            document.getElementById('moveShortEffect').value = move.short_effect || '';
            moveFormModal.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error editing move:', error);
            alert('Error loading move for editing');
        });
};

window.deleteMove = function(name) {
    if (confirm('Delete this move?')) {
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
            console.log('Move deleted successfully');
            loadMoves();
        })
        .catch(error => {
            console.error('Error deleting move:', error);
            alert('Error deleting move');
        });
    }
};

addMoveBtn.addEventListener('click', () => {
    moveForm.reset();
    document.getElementById('moveId').value = '';
    document.getElementById('moveDbId').value = '';
    moveFormModal.classList.remove('hidden');
});

cancelMoveBtn.addEventListener('click', () => {
    moveFormModal.classList.add('hidden');
});

moveForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('moveId').value;
    const _id = parseInt(document.getElementById('moveDbId').value) || null;
    const newName = document.getElementById('moveName').value;
    const accuracy = parseInt(document.getElementById('moveAccuracy').value) || 100;
    const pp = parseInt(document.getElementById('movePP').value) || 20;
    const power = parseInt(document.getElementById('movePower').value) || 0;
    const priority = parseInt(document.getElementById('movePriority').value) || 0;
    const type = document.getElementById('moveType').value;
    const damage_class = document.getElementById('moveDamageClass').value;
    const short_effect = document.getElementById('moveShortEffect').value;
    
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}/${encodeURIComponent(id)}` : apiUrl;
    
    // For create operations, use 'name', for update operations, use 'newName'
    const body = id ? 
        { _id, newName, accuracy, pp, power, priority, type, damage_class, short_effect } :
        { _id, name: newName, accuracy, pp, power, priority, type, damage_class, short_effect };
    
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
        console.log('Move saved successfully');
        moveFormModal.classList.add('hidden');
        loadMoves();
    })
    .catch(error => {
        console.error('Error saving move:', error);
        alert('Error saving move');
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
    firstBtn.onclick = () => loadMoves(1);
    paginationContainer.appendChild(firstBtn);
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.className = 'pagination-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => loadMoves(currentPage - 1);
    paginationContainer.appendChild(prevBtn);
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.onclick = () => loadMoves(i);
        paginationContainer.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.className = 'pagination-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => loadMoves(currentPage + 1);
    paginationContainer.appendChild(nextBtn);
    
    // Last button
    const lastBtn = document.createElement('button');
    lastBtn.textContent = 'Last';
    lastBtn.className = 'pagination-btn';
    lastBtn.disabled = currentPage === totalPages;
    lastBtn.onclick = () => loadMoves(totalPages);
    paginationContainer.appendChild(lastBtn);
}

// Initial load
loadMoves(); 