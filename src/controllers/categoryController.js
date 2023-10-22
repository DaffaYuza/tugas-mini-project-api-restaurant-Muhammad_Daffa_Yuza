const categoryModel = require("../models/categoryModel")

const categoryController = {}

categoryController.getAll = (req,res) => {
    const menus = categoryModel.getAll((err, rows) => {
        if(err){
            throw err
        } else {
            res.json({
                status : "OK",
                data : rows
            })
        }
    })   
}

categoryController.getById = (req,res) => {
    const {id} = req.params
    const menus = categoryModel.findById(id,(err, rows) => {
        if(err){
            throw err
        } else {
            res.json({
                Status : "OK",
                data : rows
            })
        }
    })   
}

categoryController.create = (req,res) => {
    try{
        const createMenu = categoryModel.create(req.body)
        return res.json({
            Status : "OK",
            message : "Data berhasil ditambahkan !"
        })
    } catch (error){
        return res.json({
            Status : "Failed",
            message: error.message
        })
    }
}

categoryController.update = (req, res) => {
    try {
        const updateMenu = categoryModel.update(req.params.id, req.body, (err, rows) => {
            if(err){
                throw err
            } else {
                return res.json({
                    Status : "OK",
                    message : "Data berhasil diupdate !"
                })
            }
        })
    } catch (error){
        return res.json({
            Status : "Failed",
            message : error.message
        })
    }
}

categoryController.delete = (req, res) => {
    try {
        const deleteMenu = categoryModel.delete(req.params.id, (err, rows) => {
            if(err){
                throw err
            } else {
                return res.json({
                    Status : "OK",
                    message : "Data berhasil dihapus !"
                })
            }
        })
    } catch (error) {
        return res.json({
            Status : "Failed",
            message : error.message
        })
    }
}


module.exports = categoryController