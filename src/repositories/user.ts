import Users from "../models/user";
import { User } from '../interface/user';

class UserRepository{

    signup = async({id, password, nickname, email, phone, birth} : User) => {
        const signUp = await Users.create({id, password, nickname, email, phone, birth})
        return signUp
    }
}


export default UserRepository
