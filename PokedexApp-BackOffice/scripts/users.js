// Check authentication and admin role
(function() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!token || user.role !== 'admin') {
        window.location.href = 'index.html';
    }
})();

const token = localStorage.getItem('token');
const apiUrl = 'http://localhost:3000/api/users';

const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
const userFormModal = document.getElementById('userFormModal');
const userForm = document.getElementById('userForm');
const addUserBtn = document.getElementById('addUserBtn');
const cancelUserBtn = document.getElementById('cancelUserBtn');

function loadUsers(page = 1) {
    fetch(`${apiUrl}?page=${page}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.json())
        .then(data => {
            usersTable.innerHTML = '';
            data.users.forEach(user => {
                const row = usersTable.insertRow();
                row.innerHTML = `
                    <td>${user._id}</td>
                    <td>${user.pseudo}</td>
                    <td>${user.role}</td>
                    <td>
                        <button onclick="editUser('${user._id}')">Edit</button>
                        <button onclick="deleteUser('${user._id}')">Delete</button>
                    </td>
                `;
            });
            updatePagination(data.currentPage, data.totalPages);
        });
}

window.editUser = function(id) {
    fetch(`${apiUrl}/${encodeURIComponent(id)}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => res.json())
        .then(user => {
            document.getElementById('userId').value = user._id;
            document.getElementById('userUsername').value = user.pseudo;
            document.getElementById('userPassword').value = '';
            document.getElementById('userRole').value = user.role;
            userFormModal.classList.remove('hidden');
        });
};

window.deleteUser = function(id) {
    if (confirm('Delete this user?')) {
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        }).then(() => loadUsers());
    }
};

addUserBtn.addEventListener('click', () => {
    userForm.reset();
    document.getElementById('userId').value = '';
    userFormModal.classList.remove('hidden');
});

cancelUserBtn.addEventListener('click', () => {
    userFormModal.classList.add('hidden');
});

userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('userId').value;
    const pseudo = document.getElementById('userUsername').value;
    const password = document.getElementById('userPassword').value;
    const role = document.getElementById('userRole').value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}/${encodeURIComponent(id)}` : apiUrl;
    const body = { pseudo, role };
    if (password) body.password = password;
    fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }).then(() => {
        userFormModal.classList.add('hidden');
        loadUsers();
    });
});

function updatePagination(currentPage, totalPages) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    
    // First button
    const firstBtn = document.createElement('button');
    firstBtn.textContent = 'First';
    firstBtn.className = 'pagination-btn';
    firstBtn.disabled = currentPage === 1;
    firstBtn.onclick = () => loadUsers(1);
    paginationContainer.appendChild(firstBtn);
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.className = 'pagination-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => loadUsers(currentPage - 1);
    paginationContainer.appendChild(prevBtn);
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.onclick = () => loadUsers(i);
        paginationContainer.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.className = 'pagination-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => loadUsers(currentPage + 1);
    paginationContainer.appendChild(nextBtn);
    
    // Last button
    const lastBtn = document.createElement('button');
    lastBtn.textContent = 'Last';
    lastBtn.className = 'pagination-btn';
    lastBtn.disabled = currentPage === totalPages;
    lastBtn.onclick = () => loadUsers(totalPages);
    paginationContainer.appendChild(lastBtn);
}

// Initial load
loadUsers(); 