import { User } from '../interface/user';
import UserRepository from '../repositories/user';

class UserService {
    public userRepository = new UserRepository();

    signup = async({id, password, confirmPassword, nickname, email, phone, birth} : User) => {
        const signUp = await this.userRepository.signup({id, password, confirmPassword, nickname, email, phone, birth});
        return signUp
    }

    login = async({id,password} : User )=>{
        const loginUser = await this.userRepository.login({id,password})
        return loginUser;
    }
}

export default UserService;