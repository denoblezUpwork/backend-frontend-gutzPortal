import mongoose from "mongoose";

const clientSchema = mongoose.Schema ({
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Client = mongoose.model('clientInformation', clientSchema)
export default Client;