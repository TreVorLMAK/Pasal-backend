import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";

const sequelize = new Sequelize(envConfig.connectionString as string)


//check 
try{
    sequelize.authenticate()
        .then(() => {
            console.log('Database synced successfully')
        })
        .catch(err=> {
            console.log('Error syncing database: ', err)
            })
            } catch (error) {
                console.log(error)
                }

export default sequelize