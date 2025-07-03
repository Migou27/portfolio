import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  effect: { type: String, required: true },
  sprite_default: { type: String, required: true }
}, { collection: 'Items' });

export default mongoose.model('Item', ItemSchema);