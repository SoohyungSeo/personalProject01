import jwt from 'jsonwebtoken';
import {User} from '../interface/user';
import UserRepository from '../repositories/user';
import dotenv from 'dotenv';
import Users from '../models/user'

dotenv.config();


export default {
    createToken : async({id} : User) => {
        const refreshToken = jwt.sign({id: id}, process.env.SECRET_KEY!, {
            expiresIn:'1d'
        })
        const accessToken = jwt.sign({id: id}, process.env.SECRET_KEY!, {
            expiresIn: '1h'
        });
        await Users.update({refreshToken: refreshToken}, {where: {id}});
        return {accessToken: `Bearer ${accessToken}`};
    }
}