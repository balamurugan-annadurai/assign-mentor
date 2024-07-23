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
app.get("/", (req, res) => {
    res.status(200).json({
        Message: "Student and Mentor Assigning API",
        CreateMentor: {
            EndPoint: "/api/mentor/create",
            Method: "POST",
            Body: {
                message: "Feilds to give in body",
                Example: {
                    "name": "Puzhal",
                    "email": "puzhal@gmail.com"
                }
            }
        },
        CreateStudent: {
            EndPoint: "/api/student/create",
            Method: "POST",
            Body: {
                message: "Feilds to give in body",
                Example: {
                    "name": "Balamurugan A",
                    "email": "bala@gmail.com"
                }
            }
        },
        "Assign Students To Mentor": {
            EndPoint: "/api/student/assignstudents",
            Method: "POST",
            Body: {
                message: "Feilds to give in body",
                Example: {
                    "mentorId": "669f4d39f89fbeb9c7592982",
                    "studentsId": [
                        "669f4d44f89fbeb9c7592985",
                        "669f4d52f89fbeb9c7592989"
                    ]
                }
            }
        },
        "Assign Or Change Student To Mentor": {
            EndPoint: "api/student/changementor",
            Method: "PUT",
            Body: {
                message: "Feilds to give in body",
                Example: {
                    "mentorId": "669f4d28f89fbeb9c759297e",
                    "studentId": "669f4d52f89fbeb9c7592989"
                }
            }
        },
        "Show all students for a mentor": {
            EndPoint: "api/mentor/assignedstudents/mentorId",
            Method: "GET",
        },
        "Show previously assigned mentor for student": {
            EndPoint: "api/student/showpreviousmentor/studentId",
            Method: "GET",
        }
    })
})

connectDB();

app.listen(process.env.PORT, () => {
    console.log("App is listening on PORT", process.env.PORT);
})