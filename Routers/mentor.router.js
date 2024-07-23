import express from "express";
import { createMentor, showAllStudents } from "../Controllers/mentor.controller.js";

const router = express.Router(); // Create a new router instance

// Route to handle POST requests to create a new mentor
router.post("/create", createMentor);

// Route to handle GET requests to fetch all students assigned to a mentor
router.get("/assignedstudents/:id", showAllStudents);

export default router;