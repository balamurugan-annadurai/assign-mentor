// Import required modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import mentorRoutes from "./Routers/mentor.router.js";
import studentRoutes from "./Routers/student.router.js";

dotenv.config(); // Initialize dotenv to load environment variables

const app = express(); // Create Express application instance
app.use(cors()); // Enable CORS for all routes
app.use(express.json()) // Middleware to parse JSON request bodies

app.use("/api/mentor", mentorRoutes);  // Mentor API routes

app.use("/api/student", studentRoutes);  // Student API routes

// Define root endpoint with API documentation
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
                    "mentorId": "669f6c721203d30714e1dd9b",
                    "studentsId": [
                        "669f6cf41203d30714e1dda1",
                        "669f6d391203d30714e1dda5"
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
                    "mentorId": "669f6ca11203d30714e1dd9e",
                    "studentId": "669f6cf41203d30714e1dda1"
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

connectDB();  // Connect to MongoDB database

// Start server and log port number
app.listen(process.env.PORT, () => {
    console.log("App is listening on PORT", process.env.PORT);
})