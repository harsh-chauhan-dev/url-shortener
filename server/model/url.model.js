import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortnerId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true,
    }, 
    clicks: {
        type: Number,
        default:0,
    },

    visitHistory: [{ timestamp: { type: Number } }],
    
}, { timeseries: true });

const URL = mongoose.model('URL', urlSchema);

export default URL;