const Buku = require("../../models/buku.model");

const update = async (id, updated_data) => {
    let { judul, deskripsi, harga, tahun, author } = updated_data
    let opts = {
        new: author === 'true' ? true : false
    }
    let data = {
        judul, deskripsi, harga, tahun
    }
    try {
        let query = await Buku.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch(err){
        throw err
    }
}

module.exports = {
    update
}