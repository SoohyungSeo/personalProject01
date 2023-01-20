import Users from "../models/user";
import { User } from '../interface/user';

class UserRepository{

    signup = async({id, password, nickname, email, phone, birth} : User) => {
        const signUp = await Users.create({id, password, nickname, email, phone, birth})
        return signUp
    }

    login = async({id, password} : User) => {
        const login = await Users.findOne({where: {id:id, password:password}});
        return login
    }
}

export default UserRepository
