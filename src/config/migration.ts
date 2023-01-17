import sequelize from "../models";
import Users from '../models/user';

const dropTable = [Users];
const createTable = [Users];

async function migrate() {
    for (let i=0; i < dropTable.length; i++){
        await dropTable[i]
        .drop()
        .then(() => {
            console.log(`Success drop ${dropTable[i]} Table`)
        })
        .catch((err) => {
            console.log(`Error in drop ${dropTable[i]} Table`, err)
        })
    } 
    
    for (let i=0; i< createTable.length; i++){
        await createTable[i]
        .sync({force:false})
        .then(() => {
            console.log(`Success create ${createTable[i]} Table`)
        })
        .catch((err) => {
            console.log(`Error in Create ${createTable} Table`)
        });
    }
    sequelize.sync();
}

(async () => {
    await sequelize.query(`DROP TABLE IF EXISTS topicMapping`);
    await migrate();
})();