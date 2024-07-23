import mongoose from "mongoose";

// Define Student schema using mongoose.Schema
const studentSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentors",
        default:null
    }
})

// Create Students model based on studentSchema
const Students = mongoose.model("Students", studentSchema);
export default Students;