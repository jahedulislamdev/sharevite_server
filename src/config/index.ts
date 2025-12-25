import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
    port: process.env.PORT || 5000,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    jwtSecretkey: process.env.JWT_SECRET,
};

export default config;
