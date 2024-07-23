import mongoose from "mongoose";

// Define Mentor schema using mongoose.Schema
const mentorSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Students"
    }]
})

// Create Mentors model based on mentorSchema
const Mentors = mongoose.model("Mentors", mentorSchema);
export default Mentors;