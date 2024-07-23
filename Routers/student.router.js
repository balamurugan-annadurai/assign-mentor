import express from "express";
import { assignStudentsToMentor, changeMentor, createStudent, showPreviousMentor } from "../Controllers/student.controller.js";

const router = express.Router();

router.post("/create", createStudent);
router.post("/assignstudents", assignStudentsToMentor);
router.put("/changementor", changeMentor);
router.get("/showpreviousmentor/:id", showPreviousMentor);
export default router;