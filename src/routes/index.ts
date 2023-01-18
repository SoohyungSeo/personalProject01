import express, {Router} from 'express';
import userRouter from './user'

const router = Router();

router.use('/users', userRouter)
//router.use('/posts', require('./posts'))
//router.use('/posts', require('./comments'))

export default router;