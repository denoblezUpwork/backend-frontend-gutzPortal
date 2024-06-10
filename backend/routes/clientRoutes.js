import express from "express";
const router = express.Router();

import { addClientRecord, getAllRecords, getClientById, deleteById, updateById } from '../controllers/clientController.js'
import { protect, isAdmin } from "../middleware/authMiddleware.js";

router.post('/create', addClientRecord)
router.get('/', protect, isAdmin, getAllRecords)
router.get('/:id',protect, isAdmin, getClientById)
router.delete('/:id', protect, isAdmin, deleteById);
router.patch('/:id', protect, isAdmin, updateById)
export default router