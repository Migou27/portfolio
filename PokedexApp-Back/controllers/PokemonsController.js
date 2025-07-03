import Pokemon from '../models/PokemonModel.js';
import MovesByPokemon from '../models/MovesByPokeModel.js';

export async function getPokemons(req, res) {
  try {
    const pokemons = await Pokemon.find({}, { name: 1, types: 1, sprite_front_default: 1, _id: 0 }).limit(1025);
    res.json(pokemons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getOnePokemon(req, res) {
  const { name } = req.params;
  try {
    const pokemon = await Pokemon.findOne({ name });
    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon not found' });
    }
    res.json(pokemon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getPokemonForms(req, res) {
  const { name } = req.params;
  try {
    const baseName = name.split('-')[0];
    
    const forms = await Pokemon.find(
      { 
        name: { $regex: `^${baseName}`, $options: 'i' }
      },
      { name: 1, sprite_front_default: 1, _id: 0 }
    );
    
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getPokemonByMove(req, res) {
  const { move } = req.params;
  try {
    // Cherche tous les Pokémon qui connaissent cette attaque
    const pokemonsWithMove = await MovesByPokemon.find(
      { moves: move },
      { name: 1, _id: 0 }
    );

    if (!pokemonsWithMove || pokemonsWithMove.length === 0) {
      return res.json([]);
    }

    // Récupère les sprites pour ces Pokémon
    const names = pokemonsWithMove.map(p => p.name);
    const pokemons = await Pokemon.find(
      { name: { $in: names } },
      { name: 1, sprite_front_default: 1, _id: 0 }
    );

    res.json(pokemons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}