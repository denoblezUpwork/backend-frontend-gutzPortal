import express from "express";
const router = express.Router();

import { addClientRecord, getAllRecords, getClientById, deleteById, updateById } from '../controllers/clientController.js'

router.post('/create', addClientRecord)
router.get('/', getAllRecords)
router.get('/:id',getClientById)
router.delete('/:id', deleteById);
router.patch('/:id', updateById)
export default router