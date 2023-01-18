import express , {Express,Request,Response} from "express";
import sequelize from "./models";
import session from "express-session";
import Router from '../src/routes/index'

const app:Express = express();
const port = 3000;

app.use(express.json());
app.use('/', Router)

app.listen(port, async() => {
    console.log('Server is Open 3000 port');
    await sequelize.authenticate()
    .then(async() => {
        console.log('DB connection success');
    })
    .catch(e => {
        console.log(e)
    })
})