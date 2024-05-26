import express from "express";
const router = express.Router();

import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js'
import { registerAdmin, adminRoute } from "../controllers/adminController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

//User route
router.post('/auth', authUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

//admin route
router.get('/admin', protect, admin, adminRoute);
router.post('/create-admin', protect, admin, registerAdmin);




export default router;
