// On page load, check if token exists and is valid
(async function() {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await fetch('http://localhost:3000/api/users/me', {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.ok) {
                window.location.href = 'dashboard.html';
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        } catch (err) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }
})();

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const pseudo = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = '';

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pseudo, password })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || data.error || 'Login failed');
        if (!data.token) throw new Error('No token received from server.');
        localStorage.setItem('token', data.token);
        if (data.user) {
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        window.location.href = 'dashboard.html';
    } catch (err) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        errorDiv.textContent = err.message;
    }
}); 