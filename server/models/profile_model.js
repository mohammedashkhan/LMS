import mongoose from 'mongoose';


const profileSchema = mongoose.Schema({
    user_id: String,
    profile_image: {type: String , default: 0},
    name: String,
    email:String,
    phone: {type: Number , default: 0},
    about: {type: String , default: 0},
    city: {type: String , default: 0},
    Country: {type: String , default: 0},
    Company: {type: String , default: 0},
    School: {type: String , default: 0},
    Hometown: {type: String , default: 0},
    Languages: {type: String , default: 0},
    gender: {type: String , default: 0},	
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model("Profile", profileSchema);