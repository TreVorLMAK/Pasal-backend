import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";

const sequelize = new Sequelize(envConfig.connectionString as string,{
    models : [__dirname + '/models']
})

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

                sequelize.sync({force : false}).then(()=>{
                    console.log("local changes injected to database successfully")
                })

export default sequelize