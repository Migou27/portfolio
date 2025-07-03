import mongoose from 'mongoose';

const MoveSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  accuracy: { type: Number, required: true },
  pp: { type: Number, required: true },
  power: { type: Number, required: true },
  priority: { type: Number, required: true },
  type: { type: String, required: true },
  damage_class: { type: String, required: true },
  short_effect: { type: String, required: true}
}, { collection: 'Moves' });

export default mongoose.model('Move', MoveSchema);