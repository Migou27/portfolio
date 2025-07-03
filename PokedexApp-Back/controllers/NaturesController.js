import Nature from '../models/NaturesModel.js';

export async function getAllNatures(req, res) {
  try {
    const natures = await Nature.find({}, { 
      name: 1, 
      plus: 1, 
      minus: 1, 
      modifiers: 1,
      _id: 0 
    }).sort({ name: 1 });
    
    res.json(natures);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getOneNature(req, res) {
  const { name } = req.params;
  
  try {
    const nature = await Nature.findOne({ name: new RegExp(name, 'i') });
    
    if (!nature) {
      return res.status(404).json({ error: 'Nature not found' });
    }
    
    res.json(nature);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}