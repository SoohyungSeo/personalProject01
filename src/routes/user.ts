import { Router } from 'express';
import User from '../controllers/user';

const router = Router();
router.post('/signup' , User.signup);


export default router;