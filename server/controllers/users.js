import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/users_model.js';

export const signup = async (req, res) => {
    const { name, email, password, role} = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({message: "User Already Exists"});
    
        const hashPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashPassword, name: name, role: role });

        // const addToProfile = await Profile.create({user_id: result._id, email: email, name:name});
        const token = jwt.sign({ email: result.email, id: result._id}, 'learningmangementsystem6%$&*#()#&', {expiresIn: "1h"});
    
        res.status(200).json({result, token});

    } catch (error) {
        res.status(500).json({message: 'Something went wrong.'});
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if(!existingUser) return res.status(404).json({message: "User doesn't exits"});
        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'learningmangementsystem6%$&*#()#&', {expiresIn: "1h"});
        
        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: 'Something went wrong.'});
    }
}


    //created by ashkhan ahmed on 12-05-2021