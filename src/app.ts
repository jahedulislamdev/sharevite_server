import express, { Request, Response } from "express";
import { authRoutes } from "./modules/auth/auth.routes";
const app = express();
app.use(express.json());

// routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello! form Sharevite server.");
});
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
        description:
            "The requested route does not exist. Please check the URL and try again.",
    });
});
export default app;
