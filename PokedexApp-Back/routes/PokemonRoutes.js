import express from 'express';
import { getPokemons, getOnePokemon, getPokemonForms, getPokemonByMove } from '../controllers/PokemonsController.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.get('/pokemons', verifyToken, getPokemons);
router.get('/pokemons/:name', getOnePokemon);
router.get('/pokemons/:name/forms', getPokemonForms);
router.get('/pokemon/move/:move', getPokemonByMove)

export default router;