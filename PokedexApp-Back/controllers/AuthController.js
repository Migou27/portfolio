import User from '../models/UsersModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET = 'unJourJeSeraiLeMeilleurDresseurJeMeBattraiSansRepitJeFeraiToutPourEtreVainqueurEtGagnerLesDefisJeParcourraiLaTerreEntiereTextraquantAvecEspoirLesPokemonEtLeursMysteresLeSecretDeLeursPouvoirs';

export const register = async (req, res) => {
  try {
    const { pseudo, password } = req.body;
    const user = new User({ pseudo, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { pseudo, password } = req.body;
    const user = await User.findOne({ pseudo });
    if (!user) return res.status(400).json({ error: 'Invalid Pseudo.' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ error: 'Invalid password.' });

    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};