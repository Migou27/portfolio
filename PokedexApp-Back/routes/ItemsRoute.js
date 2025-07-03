import express from 'express';
import { getAllItems, getOneItem } from '../controllers/ItemsController.js';

const router = express.Router();

router.get('/items', getAllItems);
router.get('/items/:name', getOneItem);

export default router;