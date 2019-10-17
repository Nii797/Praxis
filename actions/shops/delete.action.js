const Shop = require("../../models/shop.model")

class Delete {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            let query = await Shop.findOneAndDelete({
                _id: this.id
            }).exec()

            return query
        } catch (err) {
            throw err
        }
    }
}

module.exports = Delete