// Check authentication and admin role
(function() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!token || user.role !== 'admin') {
        window.location.href = 'index.html';
    }
})();

const token = localStorage.getItem('token');
const apiUrl = 'http://localhost:3000/api/pokemons';

const pokemonsTable = document.getElementById('pokemonsTable').getElementsByTagName('tbody')[0];
const pokemonFormModal = document.getElementById('pokemonFormModal');
const pokemonForm = document.getElementById('pokemonForm');
const addPokemonBtn = document.getElementById('addPokemonBtn');
const cancelPokemonBtn = document.getElementById('cancelPokemonBtn');

// Pagination variables
let currentPage = 1;
let totalPages = 1;
let totalItems = 0;
const itemsPerPage = 50;

function loadPokemons(page = 1) {
    currentPage = page;
    fetch(`${apiUrl}?page=${page}&limit=${itemsPerPage}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log('Loaded pokemons:', data);
            const pokemons = data.pokemons;
            totalPages = data.pagination.totalPages;
            totalItems = data.pagination.totalItems;
            
            pokemonsTable.innerHTML = '';
            pokemons.forEach(pokemon => {
                console.log('Processing pokemon:', pokemon);
                const row = pokemonsTable.insertRow();
                row.innerHTML = `
                    <td>${pokemon._id || ''}</td>
                    <td>${pokemon.name || ''}</td>
                    <td>${pokemon.height || ''}</td>
                    <td>${pokemon.weight || ''}</td>
                    <td>${pokemon.base_experience || ''}</td>
                    <td>${Array.isArray(pokemon.types) ? pokemon.types.join(', ') : (typeof pokemon.types === 'string' ? pokemon.types : '')}</td>
                    <td>${Array.isArray(pokemon.abilities) ? pokemon.abilities.map(a => a.name || a).join(', ') : ''}</td>
                    <td>${Array.isArray(pokemon.stats) ? pokemon.stats.map(s => `${s.name || s}: ${s.base_stat || s}`).join(', ') : ''}</td>
                    <td>${pokemon.sprite_front_default ? `<img src='${pokemon.sprite_front_default}' alt='${pokemon.name}' width='32'/>` : ''}</td>
                    <td>
                        <button onclick="editPokemon('${pokemon.name}')">Edit</button>
                        <button onclick="deletePokemon('${pokemon.name}')">Delete</button>
                    </td>
                `;
            });
            
            updatePagination();
        })
        .catch(error => {
            console.error('Error loading pokemons:', error);
            pokemonsTable.innerHTML = '<tr><td colspan="10">Error loading pokemons</td></tr>';
        });
}

window.editPokemon = function(name) {
    fetch(`${apiUrl}/${encodeURIComponent(name)}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(pokemon => {
            console.log('Editing pokemon:', pokemon);
            document.getElementById('pokemonId').value = pokemon.name;
            document.getElementById('pokemonDbId').value = pokemon._id || '';
            document.getElementById('pokemonName').value = pokemon.name || '';
            document.getElementById('pokemonHeight').value = pokemon.height || '';
            document.getElementById('pokemonWeight').value = pokemon.weight || '';
            document.getElementById('pokemonBaseExp').value = pokemon.base_experience || '';
            document.getElementById('pokemonTypes').value = Array.isArray(pokemon.types) ? pokemon.types.join(', ') : pokemon.types || '';
            document.getElementById('pokemonAbilities').value = JSON.stringify(pokemon.abilities || [], null, 2);
            document.getElementById('pokemonStats').value = JSON.stringify(pokemon.stats || [], null, 2);
            document.getElementById('pokemonSprite').value = pokemon.sprite_front_default || '';
            pokemonFormModal.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error editing pokemon:', error);
            alert('Error loading pokemon for editing');
        });
};

window.deletePokemon = function(name) {
    if (confirm('Delete this Pokémon?')) {
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
            console.log('Pokemon deleted successfully');
            loadPokemons();
        })
        .catch(error => {
            console.error('Error deleting pokemon:', error);
            alert('Error deleting pokemon');
        });
    }
};

addPokemonBtn.addEventListener('click', () => {
    pokemonForm.reset();
    document.getElementById('pokemonId').value = '';
    document.getElementById('pokemonDbId').value = '';
    pokemonFormModal.classList.remove('hidden');
});

cancelPokemonBtn.addEventListener('click', () => {
    pokemonFormModal.classList.add('hidden');
});

pokemonForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('pokemonId').value;
    const _id = parseInt(document.getElementById('pokemonDbId').value) || null;
    const newName = document.getElementById('pokemonName').value;
    const height = parseInt(document.getElementById('pokemonHeight').value) || 0;
    const weight = parseInt(document.getElementById('pokemonWeight').value) || 0;
    const base_experience = parseInt(document.getElementById('pokemonBaseExp').value) || 0;
    const types = document.getElementById('pokemonTypes').value.split(',').map(t => t.trim()).filter(t => t.length > 0);
    let abilities = [];
    let stats = [];
    try {
        abilities = JSON.parse(document.getElementById('pokemonAbilities').value || '[]');
    } catch (e) {
        console.error('Error parsing abilities JSON:', e);
        alert('Invalid abilities JSON format');
        return;
    }
    try {
        stats = JSON.parse(document.getElementById('pokemonStats').value || '[]');
    } catch (e) {
        console.error('Error parsing stats JSON:', e);
        alert('Invalid stats JSON format');
        return;
    }
    const sprite_front_default = document.getElementById('pokemonSprite').value;
    
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}/${encodeURIComponent(id)}` : apiUrl;
    
    // For create operations, use 'name', for update operations, use 'newName'
    const body = id ? 
        { _id, newName, height, weight, base_experience, types, abilities, stats, sprite_front_default } :
        { _id, name: newName, height, weight, base_experience, types, abilities, stats, sprite_front_default };
    
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
        console.log('Pokemon saved successfully');
        pokemonFormModal.classList.add('hidden');
        loadPokemons();
    })
    .catch(error => {
        console.error('Error saving pokemon:', error);
        alert('Error saving pokemon');
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
    firstBtn.onclick = () => loadPokemons(1);
    paginationContainer.appendChild(firstBtn);
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.className = 'pagination-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => loadPokemons(currentPage - 1);
    paginationContainer.appendChild(prevBtn);
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.onclick = () => loadPokemons(i);
        paginationContainer.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.className = 'pagination-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => loadPokemons(currentPage + 1);
    paginationContainer.appendChild(nextBtn);
    
    // Last button
    const lastBtn = document.createElement('button');
    lastBtn.textContent = 'Last';
    lastBtn.className = 'pagination-btn';
    lastBtn.disabled = currentPage === totalPages;
    lastBtn.onclick = () => loadPokemons(totalPages);
    paginationContainer.appendChild(lastBtn);
}

// Initial load
loadPokemons(); 