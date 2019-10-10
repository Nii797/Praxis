const express       = require('express');
const router        = express.Router();
const CreateBuku    = require('../actions/buku/create.action');
const getAll        = require('../actions/buku/getAll.action');
// const DeleteBuku    = require('../actions/buku/delete.action');
const ShowBuku      = require('../actions/buku/show.action');
const { update }    = require('../actions/buku/update.action');

router.post('/', async (req, res) => {
    let data = await new CreateBuku(req).create()
    try{
        return res.status(201).json({
            status: "Sukses",
            data,
            message: "buku berhasil dibuat!"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.get('/', async (req, res) => {
    try{
        let data = await new getAll().show()
        return res.send({
            status: 'berhasil',
            data,
            message: "berhasil get semua data!"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.get('/:id', async (req, res) => {
    try{
        let {id} = req.params
        let data = await new ShowBuku(id).exec()
        
        return res.status(200).json({
            status: "Berhasil",
            data,
            message: "berhasil get data buku"
        })
    } catch(err){
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
});

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let updated_data = {
        judul       : req.body.judul,
        deskripsi   : req.body.deskripsi,
        harga       : req.body.harga,
        tahun       : req.body.tahun,
        author      : req.body.author
    }

    try{
        let data = await update(id, updated_data)

        return res.status(200).json({
            status: "status",
            data,
            message: "Data user berhasil diupdate"
        })
    } catch(err){
        return res.status(400).json({
            status: "sukses",
            message: err.message
        
        })
    }
});

router.delete('/:id', async(req,res) => {
    let { id } = req.params
    try{
        let data = await new DeleteBuku(id).exec()
        return res.status(400).json({
            status: "Sukses",
            data,
            message: err.message
        })
    } catch(err){
        return res.status(200).json({
            status: "Error",
            message: err.message
        })
    }
});

module.exports = router












