const express = require('express')
const router = express.Router()
const { create, getAll } = require("../actions/books")
const { isString } = require("lodash")
const CreateBook = require("../actions/books/create.action")

router.post("/", async (req, res) => {
    try {
        let { title, description, price, author, shop_id } = req.body
        price = parseInt(price)

        let data = await new CreateBook({
            title,
            description,
            price,
            author,
            shop_id
        }).exec()

        return res.send({
            status: "Success",
            message: "Create book successfully",
            data
        })
    } catch (err) {
        return res.send({
            status: "Error",
            message: err.message
        })
    }
})



// router.post("/", (req, res) => {
//     let data = create(req)

//     if(isString(data) === true) {
//         return res.status(400).json({
//             status: "error",
//             message: data
//         })
//     }

//     return res.status(200).json({
//         status: "success",
//         data,
//         message: "Book created successfully!"
//     })
// })

router.get("/", async (req, res) => {
    let data = await getAll()

    return res.send({
        status: "success",
        data,
        message: "Get all book data"
    })
})

module.exports = router