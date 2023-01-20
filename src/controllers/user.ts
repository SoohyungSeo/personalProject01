import { Request, Response, NextFunction } from "express";
import UserService from '../services/user';
import { User } from '../interface/user';
import Token from '../utils/token';

class UserController {
    public userService = new UserService();

    //회원가입
    signup = async(req: Request, res: Response, next: NextFunction) => {
        const {id, password, confirmPassword, nickname, email, phone, birth} : User = req.body;
        await this.userService.signup({id,password, confirmPassword, nickname, email, phone, birth});
        res.status(201).json({message:"회원가입 완료"})
    }

    //로그인
    login = async(req:Request, res:Response, next: NextFunction) => {
        const {id, password} : User = req.body;
        const login = await this.userService.login({id,password});
        const createToken = await Token.createToken({id});
        res.cookie('aceess Token', createToken)
        res.status(201).json({message:"로그인되었습니다.", createToken})        
    }


}

export default UserController;