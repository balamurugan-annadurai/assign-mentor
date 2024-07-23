import express from "express";
import { createMentor, showAllStudents } from "../Controllers/mentor.controller.js";

const router = express.Router();

router.post("/create", createMentor);
router.get("/assignedstudents/:id", showAllStudents);

export default router;