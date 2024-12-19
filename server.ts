import app from "./src/app";
import { envConfig } from "./src/config/config";

function startServer(){
    const port = envConfig || 4000
    app.listen(envConfig.port, () => {
        console.log("server is running on port [${port}]");
    })
}

startServer()