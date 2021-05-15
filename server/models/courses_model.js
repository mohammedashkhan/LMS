import mongoose from 'mongoose';


const courseSchema = mongoose.Schema({
    userId: String,
    courseId: String,
    courseName: String,
    courseDept: String,
    description: String,
    courseRoom: String,
    waitListCapacity: String,
    courseTeam: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model("Course", courseSchema);