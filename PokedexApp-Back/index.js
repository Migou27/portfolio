import express from 'express';
import mongoose from 'mongoose';
import pokemonRoutes from './routes/PokemonRoutes.js';
import movesRoutes from './routes/MovesRoute.js';
import itemsRoutes from './routes/ItemsRoute.js';
import naturesRoutes from './routes/NaturesRoute.js';
import authRoutes from './routes/AuthRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', pokemonRoutes, movesRoutes, itemsRoutes, naturesRoutes);
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API Express !');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/PokemonDB');