import jwt from 'jsonwebtoken';

const SECRET = 'unJourJeSeraiLeMeilleurDresseurJeMeBattraiSansRepitJeFeraiToutPourEtreVainqueurEtGagnerLesDefisJeParcourraiLaTerreEntiereTextraquantAvecEspoirLesPokemonEtLeursMysteresLeSecretDeLeursPouvoirs';


export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer '))
    return res.status(403).json({ error: 'Token manquant ou malformé' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token invalide' });
  }
};