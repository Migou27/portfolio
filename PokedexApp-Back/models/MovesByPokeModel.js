import mongoose from 'mongoose';

const MovesByPokeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  moves: [{ type: String, required: true }]
}, { collection: 'MovesByPoke' });

export default mongoose.model('MovesByPokemon', MovesByPokeSchema);