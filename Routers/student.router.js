import express from "express";
import { assignStudentsToMentor, changeMentor, createStudent, showPreviousMentor } from "../Controllers/student.controller.js";

const router = express.Router(); // Create a new router instance


// Route to handle POST requests to create a new student
router.post("/create", createStudent);

// Route to handle POST requests to assign students to a mentor
router.post("/assignstudents", assignStudentsToMentor);

// Route to handle PUT requests to change or assign a new mentor to a student
router.put("/changementor", changeMentor);

// Route to handle GET requests to fetch the previous mentor of a student
router.get("/showpreviousmentor/:id", showPreviousMentor);
export default router;