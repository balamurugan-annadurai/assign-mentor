import mongoose from 'mongoose';
import Mentors from '../Models/mentor.schema.js';
import Students from './../Models/student.schema.js';

export const createStudent = async (req, res) => {
    const { name, email } = req.body;
    try {
        if (!name || !email) {
            return res.status(400).json({ message: "All fields are required(name and email)" })
        }
        const result = await Students.find({ email })
        if (result.length === 0) {
            const newStudent = await Students.create(req.body);
            return res.status(201).json({ message: "Student created!", newStudent });
        }

        res.status(409).json({ message: "Student with this email already exists" });

    } catch (error) {
        console.log(error);
    }
}

export const assignStudentsToMentor = async (req, res) => {
    try {
        const { mentorId, studentsId } = req.body;
        if (!mentorId || !studentsId) {
            return res.status(400).json({ message: "All fields are required(mentorId and studentsId)" })
        }
        const mentor = await Mentors.findOne({ _id: mentorId });
        if (!mentor) {
            return res.status(404).json({ message: "Mentor not found!" })
        }

        const studentsWithoutMentors = await Students.find({ _id: { $in: studentsId }, mentor: null });
        const studentsWithMentors = await Students.find({ _id: { $in: studentsId }, mentor: { $ne: null } });
        console.log(studentsWithMentors);
        console.log(studentsWithoutMentors)
        if (studentsWithMentors.length > 0) {
            const studentsWithMentorsIds = studentsWithMentors.map(student => {
                return student._id;
            })
            return res.status(400).json({ message: `These students already have mentor`, studentsId: studentsWithMentorsIds })
        }

        mentor.students.push(...studentsId);
        await mentor.save();
        await Students.updateMany({ _id: { $in: studentsWithoutMentors } }, { mentor: mentor._id })
        res.status(200).json({
            message: `students assigned to mentor ${mentor.name}`,
            mentorName: mentor.name,
            mentorEmail: mentor.email,
            assignedStudentsId: mentor.students
        })
    } catch (error) {
        console.log(error);
    }
}

export const changeMentor = async (req, res) => {
    try {
        const { mentorId, studentId } = req.body;
        if (!mentorId || !studentId) {
            return res.status(400).json({ message: "All fields are required(mentorId and studentId)" })
        }
        const mentor = await Mentors.findOne({ _id: mentorId });
        if (!mentor) {
            return res.status(404).json({ message: "Mentor not found" });
        }
        const student = await Students.findOne({ _id: studentId });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const previousMentor = await Mentors.findOne({ _id: student.mentor });
        if (previousMentor._id == mentorId) {
            return res.status(200).json({ message: "This mentor is already assigned" });
        }
        if (previousMentor) {
            previousMentor.students = previousMentor.students.filter(id => id != studentId);
            await previousMentor.save();
        }
        await student.updateOne({ mentor: mentorId });
        mentor.students.push(studentId);
        await mentor.save();
        const updatedStudentDetails = await Students.findOne({ _id: studentId });
        return res.status(200).json({ message: "mentor assigned to student", updatedStudentDetails, mentor })

    } catch (error) {
        console.log(error);
    }
}

export const showPreviousMentor = async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(studentId)) {
            return res.status(401).json({ message: "Invalid ID format" });
        }
        const student = await Students.findOne({ _id: studentId }).populate('mentor');
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        if (student.mentor == null) {
            return res.status(200).json({ message: "This student has no previous mentor" });
        }
        res.status(200).json({
            mentor: {
                name: student.mentor.name,
                _id: student.mentor._id

            }
        })
    } catch (error) {
        console.log(error);
    }
}