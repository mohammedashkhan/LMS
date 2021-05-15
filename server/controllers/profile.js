import  mongoose from 'mongoose' ;
import User from '../models/users_model.js';

export const getProfile = async (req, res)=> {
    try{
        // const userID = req.userId;
        const userProfile = await User.findById(req.userId);
        // const userProfile = await Profile.find();
        res.status(200).json(userProfile);
    } catch (error) {
        res.status(404).json({message: error.message })
    }
}


export const updateProfile = async (req,res) => {
    const { id: _id } = req.params;
    const profile = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No User found with this id');

    const updatedProfile = await User.findByIdAndUpdate(_id, profile, {new: true});
    res.json(updatedProfile);
}

