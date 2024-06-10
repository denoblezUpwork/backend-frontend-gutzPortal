import express from "express";
const router = express.Router();

import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js'
import { registerAdmin, adminRoute } from "../controllers/adminController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

//User route
router.post('/auth', authUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);
router.route('/profile').get( protect, getUserProfile).put( protect, updateUserProfile);

//admin route
router.get('/get-details', protect, isAdmin, adminRoute);
router.post('/create-admin', protect, isAdmin, registerAdmin);




export default router;
