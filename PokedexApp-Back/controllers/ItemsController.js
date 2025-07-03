import Item from '../models/ItemsModel.js';

// Get all items (only name and sprite)
export async function getAllItems(req, res) {
  try {
    const items = await Item.find(
      { sprite_default: { $ne: null } },
      { name: 1, effect: 1, sprite_default: 1, _id: 0 }
    ).sort({ name: 1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get one detailed item by name
export async function getOneItem(req, res) {
  const { name } = req.params;
  try {
    const item = await Item.findOne({ name });
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}