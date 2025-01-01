import express from 'express'
import { sendEmailToSubscribers } from '../controllers/sendEmailContoller.js';

const adminRouter=express.Router();

adminRouter.post('/send-email',sendEmailToSubscribers);

export default adminRouter;