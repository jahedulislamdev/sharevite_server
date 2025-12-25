import bcrypt from "bcryptjs";
import { client } from "../../config/db";
import jwt from "jsonwebtoken";
import config from "../../config";

const userCollection = client.db("core").collection("users");
const register = async (payload: Record<string, any>) => {
    const { name, email, password, photoUrl } = payload;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = {
        name,
        email,
        password: hashedPassword,
        photoUrl,
        role: "user",
    };
    const result = await userCollection.insertOne(user);
    console.log(result);

    return result;
};
const loginUser = async (userEmail: string, password: string) => {
    const user = await userCollection.findOne({ email: userEmail });
    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    const token = jwt.sign(
        { email: userEmail, role: user?.role },
        config.jwtSecretkey as string,
        { expiresIn: "1d" },
    );
    return isPasswordValid ? true : false;
};

export const authService = {
    register,
    loginUser,
};
