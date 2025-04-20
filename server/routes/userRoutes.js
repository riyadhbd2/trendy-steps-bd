import express from 'express';
import { loginUser, logout, registerUser, userInfo  } from '../controllers/userController.js';
import authMiddleware from '../middlewares/auth.js';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout );
router.get('/user', authMiddleware, userInfo);

export default router;