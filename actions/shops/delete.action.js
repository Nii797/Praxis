const Shop = require("../../models/shop.model")

class Delete {
    constructor(params, deleted) {
        this.params  = params,
        this.deleted = deleted
    }

    async exec() {
        try {
            let del = await Shop.findByIdAndDelete(
                this.params,
                this.deleted,
                {
                    new: true
                }).exec()

                return del
        } catch (err) {
            throw err
        }
    }
}

module.exports = Delete