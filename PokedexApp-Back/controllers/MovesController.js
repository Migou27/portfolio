import Move from '../models/MovesModel.js';
import MovesByPokemon from '../models/MovesByPokeModel.js';

export async function getAllMoves(req, res) {
  try {
    const moves = await Move.find();
    res.json(moves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getMovesByType(req, res) {
  const { type } = req.params;
  try {
    const moves = await Move.find({ type });
    res.json(moves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getMovesByClass(req, res) {
  const { damage_class } = req.params;
  try {
    const moves = await Move.find({ damage_class });
    res.json(moves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getMovesByPokemon(req, res) {
  const { pokemon } = req.params;
  try {
    const movesByPoke = await MovesByPokemon.findOne({ name: pokemon });
    if (!movesByPoke) {
      return res.status(404).json({ error: 'Pokemon not found' });
    }

    const moves = await Move.find({ name: { $in: movesByPoke.moves } });
    res.json(moves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}