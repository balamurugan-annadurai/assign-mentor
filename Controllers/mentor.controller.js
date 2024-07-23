import mongoose from 'mongoose';
import Students from '../Models/student.schema.js';
import Mentors from './../Models/mentor.schema.js';


// Controller function to create a new mentor
export const createMentor = async (req, res) => {
    const { name, email } = req.body;
    try {
        if (!name || !email) {
            return res.status(400).json({ message: "All fields are required(name and email)" })
        }
        const result = await Mentors.find({ email })
        if (result.length === 0) {
            const newMentor = await Mentors.create(req.body);
            return res.status(201).json({ message: "Mentor created!", newMentor });
        }

        res.status(409).json({ message: "Mentor with this email already exists" });

    } catch (error) {
        console.log(error);
    }
}

// Controller function to show all students assigned to a mentor
export const showAllStudents = async (req, res) => {
    try {
        const mentorId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(mentorId)) {
            return res.status(401).json({ message: "Invalid ID format" });
        }
        const mentor = await Mentors.findById(mentorId).populate('students');
        if (!mentor) {
            return res.status(404).json({ message: "mentor not found" });
        }
        const students = mentor.students.map(student => {
            return {
                name: student.name,
                _id: student._id
            }
        })
        if (mentor.students.length == 0) {
            return res.status(200).json({ message: `No students assigned to mentor ${mentor.name}`, students });

        }
        res.status(200).json({ message: `Students assigned to mentor ${mentor.name}`, students });
    } catch (error) {
        console.log(error);
    }
}

