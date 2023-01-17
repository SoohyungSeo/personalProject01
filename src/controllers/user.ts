import { Request, Response, NextFunction } from "express";
import userService from '../services/user';
import { User } from '../interface/user';

export default {
    signup: async(req: Request, res:Response, next: NextFunction) => {
        const {id, password, confirmPassword, nickname, email, phone }: User = req.body
        await userService.signup({id, password, confirmPassword, nickname, email, phone});
        res.status(201).json({message: '회원가입을 성공하였습니다.'})
    }
}