const customerModel = require("../models/customerModel")

const customerController = {}

customerController.getAll = (req,res) => {
    const menus = customerModel.getAll((err, rows) => {
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

customerController.getById = (req,res) => {
    const {id} = req.params
    const menus = customerModel.findById(id,(err, rows) => {
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

customerController.create = (req,res) => {
    try{
        const createMenu = customerModel.create(req.body)
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

customerController.update = (req, res) => {
    try {
        const updateMenu = customerModel.update(req.params.id, req.body, (err, rows) => {
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

customerController.delete = (req, res) => {
    try {
        const deleteMenu = customerModel.delete(req.params.id, (err, rows) => {
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


module.exports = customerController