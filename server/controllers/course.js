import  mongoose from 'mongoose' ;
import Course from '../models/courses_model.js';

export const getCourseByFaculty = async (req, res)=> {
    try{
        const coursesbyfaculty = await Course.find({userId: req.userId});
        res.status(200).json(coursesbyfaculty);
    } catch (error) {
        res.status(404).json({message: error.message });
    }
}

export const getAllCourses = async (req,res) => {
    try {
        const AllCourses = await Course.find();
        res.status(200).json(AllCourses)
    } catch (error) {
        res.status(404).json({message: error.message });
    }
}

export const createCourse = async(req, res) => {
    const course = req.body;

    const newCourse = new Course({...course, userId: req.userId, createdAt: new Date().toISOString()});
    try {
        await newCourse.save();
        res.status(200).json(newCourse);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


// export const updateCourse = async (req,res) => {
//     const { id: _id } = req.params;
//     const post = req.body;
    
//     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post found with this id');

//     const updateCourse = await Course.findByIdAndUpdate(_id, post, {new: true});
//     res.json(updateCourse);
// }

export const deleteCourse =  async (req,res) => {
      const { id } = req.params;
      
      if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Cousre found with this id');
      
      await Course.findByIdAndDelete(id);
      res.json({message: 'Course Deleted'});
      
    }
    
