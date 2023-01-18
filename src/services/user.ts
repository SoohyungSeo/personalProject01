import { User } from '../interface/user';
import UserRepository from '../repositories/user';

class UserService {
    public userRepository = new UserRepository();

    signup = async({id, password, confirmPassword, nickname, email, phone, birth} : User) => {
        const signUp = await this.userRepository.signup({id, password, confirmPassword, nickname, email, phone, birth});
        return signUp
    }
}

export default UserService;