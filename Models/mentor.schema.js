import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Students"
    }]
})

const Mentors = mongoose.model("Mentors", mentorSchema);
export default Mentors;