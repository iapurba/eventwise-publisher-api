import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/register', authController.registerPublisher);
router.post('/login', authController.loginPublisher);

export default router;