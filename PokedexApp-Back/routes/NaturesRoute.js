import express from 'express';
import { getAllNatures, getOneNature } from '../controllers/NaturesController.js';

const router = express.Router();

router.get('/natures', getAllNatures);
router.get('/natures/:name', getOneNature);

export default router;