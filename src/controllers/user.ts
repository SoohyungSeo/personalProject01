import { Request, Response, NextFunction } from "express";
import UserService from '../services/user';
import { User } from '../interface/user';

class UserController {
    public userService = new UserService();

    signup = async(req: Request, res: Response, next: NextFunction) => {
        const {id, password, confirmPassword, nickname, email, phone, birth} : User = req.body;
        await this.userService.signup({id,password, confirmPassword, nickname, email, phone, birth});
        res.status(201).json({message:"회원가입 완료"})
    }
}

export default UserController;