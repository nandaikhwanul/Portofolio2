import mongoose from "mongoose";

const Table = mongoose.Schema ({
    name:{
        type: String,
        required: true
    },
    nomorhp: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pesan: {
        type: String,
        maxlength: 10000,
        required: true
    }
});

export default mongoose.model('Data', Table);