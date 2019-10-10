const mongoose = require('mongoose');
const Schema = mongoose.Schema


const bukuSchema = new Schema({
    judul: {
        type: String
    },

    deskripsi: {
        type: String
    },

    harga: Number,
    tahun: Number,
    author: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

let Buku = mongoose.model('Buku', bukuSchema);

module.exports = Buku







