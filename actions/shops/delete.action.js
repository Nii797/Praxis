const ShopModel = require("../../models/shop.model")

class DeleteShop {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            let query = await ShopModel.findOneAndDelete({
                _id: this.id
            }).exec()

            return query
        } catch(err){   
            throw err
        }
    }
}

module.exports = DeleteShop