// Check authentication and admin role
(function() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!token || !user || !user.role) {
        window.location.href = 'index.html';
    }
    // Display user info on dashboard
    const userInfoDiv = document.getElementById('userInfo');
    if (userInfoDiv) {
        userInfoDiv.textContent = `Welcome, ${user.pseudo} (${user.role})`;
    }
})();

document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}); 