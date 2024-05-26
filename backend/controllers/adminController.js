import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/UserModels.js '

/* Create a admin role */
/* Access by admin only*/
const registerAdmin = asyncHandler(async(req, res) => {
    const { name, email, password} = req.body
    const userExists = await User.findOne({ email });

    if(userExists){
        res.status(400);
        throw new Error('Email already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        role: 'admin'
    });
    if(user){
        generateToken(res, user._id);
        res.status(201).json({
            message: 'User registered successfully'
        })
    } else {
        res.status(400);
        throw new Error('Invalid data')
    }
});

const adminRoute = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Admin route access successfully'})
})

export { registerAdmin, adminRoute };