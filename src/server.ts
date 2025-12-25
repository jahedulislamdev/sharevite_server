import app from "./app";
import config from "./config";
import { connectDB } from "./config/db";

const port = config.port;

const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer();
