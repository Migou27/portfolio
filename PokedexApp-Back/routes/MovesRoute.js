import express from 'express';
import { getAllMoves, getMovesByType, getMovesByClass, getMovesByPokemon } from '../controllers/MovesController.js';

const router = express.Router();

router.get('/moves', getAllMoves);
router.get('/moves/types/:type', getMovesByType);
router.get('/moves/classes/:damage_class', getMovesByClass);
router.get('/moves/pokemon/:pokemon', getMovesByPokemon);

export default router;