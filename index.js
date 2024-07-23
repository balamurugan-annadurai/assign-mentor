import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import mentorRoutes from "./Routers/mentor.router.js";
import studentRoutes from "./Routers/student.router.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())

app.use("/api/mentor", mentorRoutes);
app.use("/api/student", studentRoutes);


connectDB();

app.listen(process.env.PORT, () => {
    console.log("App is listening on PORT", process.env.PORT);
})