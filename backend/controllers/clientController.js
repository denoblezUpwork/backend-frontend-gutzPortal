import asyncHandler from 'express-async-handler'
import Client from '../models/clientModel.js'

const addClientRecord = asyncHandler(async(req, res) => {
    const { fullName, address } = req.body

    try {
        const record = await Client.create({
            fullName,
            address
        })
        res.status(200).json({message: 'Success created new record'})
    } catch (error) {
        throw new Error('error', error)
    }
})

const getAllRecords = asyncHandler(async(req, res) => {

    const record = await Client.find({}).sort({createdAt: -1})

    if(record.length <= 0) {
        throw new Error('No Record in Database')
    } else {
        res.status(200).json({record})
    }
})

const getClientById = asyncHandler(async(req, res) => {
    const { id } = req.params

    const record = await Client.findById( id );

    if(!record){
        res.status(404);
        throw new Error('No such record(s)')
    } else {
        res.status(200).json({record})
    }
})

const deleteById = asyncHandler(async(req, res) => {
    const { id } = req.params;

    const record = await Client.findOneAndDelete({_id: id})

    if(!record) {
        res.status(404).json({mesage: 'No such record(s)'})
    } else {
        res.status(200).json({message: 'Successfully deleted record(s)'})
    }
})

const updateById = asyncHandler(async(req, res) => {
    const { id } = req.params

    const UpdateReord = await Client.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if(UpdateReord) {
        res.status(200).json({mesage: 'Successfully updated record'})
    } else {
        res.status(404).json({
            message: 'No such record(s).'
        })
    }
})


export { addClientRecord, getAllRecords, getClientById, deleteById, updateById }