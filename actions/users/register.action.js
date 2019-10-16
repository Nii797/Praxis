const user = require("../../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

class Register {
    constructor(req) {
        this.name = req.body.name,
        this.email = req.body.email,
        this.phone = req.body.phone,
        this.password = req.body.password
    }

    async exec() {
        try{
            let password = bcrypt.hashSync(this.password, 8)
            console.log(`Hashing password ${password}`)
            let insert_data = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                password
            }

            let query = new user(insert_data)
            await query.save()

            let payload = {
                user_id: query._id,
                user_name: query.name,
                user_email: query.email,
                user_phone: query.phone
            }
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: 86400
            })

            return {
                user: payload,
                token,
                expires_in: '24 Hours'
            }
        } catch(err) {
            throw err
        }
    }
}

module.exports = Register