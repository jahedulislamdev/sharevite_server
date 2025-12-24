import express, { Request, Response } from "express";
import { client } from "./config/db";
const app = express();

const campaignCollection = client.db("core").collection("campaigns");
app.get("/campaigns", async (req: Request, res: Response) => {
    const result = await campaignCollection.find().toArray();
    res.send(result);
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello! form Sharevite server.");
});

export default app;
