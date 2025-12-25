import { Request, Response } from "express";
import { authService } from "./auth.service";

const register = async (req: Request, res: Response) => {
    try {
        const result = await authService.register(req.body);
        if (result.insertedId) {
            res.status(201).json({
                success: true,
                message: "user registered successfully",
                data: result,
            });
        }
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const authController = {
    register,
};
