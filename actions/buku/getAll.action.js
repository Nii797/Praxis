const BukuModel = require("../../models/buku.model");

class getAll {
    constructor(){

    }

    async show() {
        try{
            let query = await BukuModel.find({}).exec()
            return query
        } catch(err){
            throw err
        }
    }
}

module.exports = getAll