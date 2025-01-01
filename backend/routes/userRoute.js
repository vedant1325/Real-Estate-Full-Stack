import express from 'express'
import { addSubscriber, getUserData, loginUser,register } from '../controllers/userController.js';

const router=express.Router();
router.post('/subscribe',addSubscriber);
router.post('/login',loginUser);
router.post('/register',register);
router.get('/get-data',getUserData);


export default router;