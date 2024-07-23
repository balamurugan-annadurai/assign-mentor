import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentors",
        default:null
    }
})

const Students = mongoose.model("Students", studentSchema);
export default Students;