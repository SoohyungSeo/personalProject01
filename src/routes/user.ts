import { Router } from 'express';
import UserController from '../controllers/user';

const router = Router();
const userController = new UserController();

router.post('/signup' , userController.signup);

export default router;