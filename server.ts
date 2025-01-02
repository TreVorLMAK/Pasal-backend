import app from "./src/app";
import { envConfig } from "./src/config/config";
import adminSeeder from "./adminSeeder";

function startServer(){
    const port = envConfig.port || 4000
    app.listen(port, () => {
        console.log(`server is running on port [${port}]`)
        adminSeeder()
    })
}

startServer()