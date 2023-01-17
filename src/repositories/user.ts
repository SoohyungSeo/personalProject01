import Users from "../models/user";
import { User } from '../interface/user';

export default {
    signup: async({id, password, nickname, email, phone}: User) => {
        await Users.create({id, password, nickname, email, phone})
    }
}
