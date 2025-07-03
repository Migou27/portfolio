import mongoose from 'mongoose';

const AbilitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  is_hidden: { type: Boolean, required: true },
}, { _id: false });

const StatSchema = new mongoose.Schema({
  name: { type: String, required: true },
  base_stat: { type: Number, required: true },
}, { _id: false });

const PokemonSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  base_experience: { type: Number, required: true },
  types: [{ type: String, required: true }],
  abilities: [AbilitySchema],
  stats: [StatSchema],
  sprite_front_default: { type: String, required: true },
}, { collection: 'Pokemons' });

export default mongoose.model('Pokemon', PokemonSchema);