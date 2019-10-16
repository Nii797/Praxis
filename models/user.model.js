const mongoose = require("mongoose")
const Schema  = mongoose.Schema

let penggunaSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
})

let Pengguna = mongoose.model("Pengguna", penggunaSchema)

module.exports = Pengguna