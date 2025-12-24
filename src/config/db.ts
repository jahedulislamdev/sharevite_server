import { MongoClient, ServerApiVersion } from "mongodb";
import config from ".";

const uri = `mongodb+srv://${config.dbUser}:${config.dbPass}@cluster0.em1xxyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
export const connectDB = async () => {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("successfully connected to MongoDB!");
    } catch (err) {
        console.log("MongoDB connection failed!", err);
        process.exit(1);
    }
};
