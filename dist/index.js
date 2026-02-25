import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import studentRoutes from './routes/studentRoutes.js';
dotenv.config();
const startServer = async () => {
    try {
        await connectDB();
        const app = express();
        app.use(express.json());
        app.use("/", studentRoutes);
        const PORT = process.env.PORT || 3000;
        // Simple test route
        // app.get("/", (req, res) => {
        //   res.send("Server is running 🚀");
        // });
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Server failed to start:", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map