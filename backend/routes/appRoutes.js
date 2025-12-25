import express from 'express';
import { handleTransform } from '../controllers/transform.js';

const router = express.Router();

router.post('/transform', handleTransform);

export default router;