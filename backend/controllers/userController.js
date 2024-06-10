import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

import User from '../models/UserModels.js '

/*set token*/
/*route: api/Users/auth*/
/*Access by public */
const authUser = asyncHandler(async (req, res) => {
    const { email, password, rememberMe } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    // Check if user exists and password matches
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id, rememberMe);
        res.status(200).json({
            message: 'User authenticated successfully',
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

/*register User*/
/*route: POST api/Users*/
/*Access by public */
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body

    const userExists = await User.findOne({ email });

    if(userExists){
        res.status(400);
        throw new Error('Email already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        role: 'user'
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
})
/*logout*/
/*route: POST api/Users/logout*/
/*Access by private */
const logoutUser = asyncHandler(async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: 'User logged out' });
})
/*get User profile*/
/*route: GET api/Users/profile*/
/*Access by public */
const getUserProfile = asyncHandler(async (req, res) => {
    // Log to check req.user
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
    res.status(200).json(user)
});
/*update*/
/*route: PUT api/Users/update*/
/*Access by private */
const updateUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        
        const updatedUser = await user.save();
        res.status(200).json({
            message: "Successfully updated the user",
            _id:updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        })
    }else{
        res.status(404);
        throw new Error('No user found')
    }
    
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile};
