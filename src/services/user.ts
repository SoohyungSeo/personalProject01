import { User } from '../interface/user';
import userRepository from '../repositories/user';

export default {
    signup: async({id, password, confirmPassword, nickname, email, phone}: User) => {
        const signupUser = {
            id: id,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            nickname: nickname,
            phone: phone            
        }
        await userRepository.signup(signupUser);
    }
}