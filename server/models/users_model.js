import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    name: { type: String,required: true},
    email: {type: String, required: true},
    password: {type: String, required: true },
    role: {type: Number, required: true },
    profile_image: {type: String , default: 0},
    phone: {type: Number , default: 0},
    about: {type: String , default: 0},
    city: {type: String , default: 0},
    Country: {type: String , default: 0},
    Company: {type: String , default: 0},
    School: {type: String , default: 0},
    Hometown: {type: String , default: 0},
    Languages: {type: String , default: 0},
    gender: {type: String , default: 0},
})

export default mongoose.model("User", userSchema);