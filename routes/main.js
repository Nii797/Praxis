const verifyToken   = require("../middlewares/verify_token.middlewares")
const users         = require("./users")
const index         = require("./index")
const books         = require("./books")
const shops         = require("./shop.route")
const bukus         = require("./buku.routes")
const userss        = require("./auth.route") 

const routes = (app) => {
    app.use("/", index)
    app.use("/book", books)
    app.use("/shop", shops)
    app.use("/user",verifyToken(), users)
    app.use("/buku", bukus)
    app.use("/auth", userss)
}

module.exports = routes