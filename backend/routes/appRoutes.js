import express from 'express';
import { handleTransform } from '../controllers/transform.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/transform', handleTransform);

export default router;