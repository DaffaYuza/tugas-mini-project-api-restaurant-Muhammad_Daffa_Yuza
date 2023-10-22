const db = require("../../db/config")

const menuModel = {}
menuModel.getAll = (cb) => {
    var rowData
    const query = db.all("SELECT * FROM menu",(err,rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
    console.log(rowData);
    return query
}

menuModel.create = (data) => {
    if(!data.item || !data.price){
        throw new Error("Data item dan price wajib diisi");
    }

    // Validasi kolom "item"
    if (typeof data.item !== 'string' || !data.item.match(/^[A-Za-z\s]+$/)) {
        throw new Error("Kolom 'item' harus berupa huruf.");
    }

    // Validasi kolom "price"
    if (typeof data.price !== 'number' || isNaN(data.price)) {
        throw new Error("Kolom 'price' harus berupa angka.");
    }

    return db.run(`INSERT INTO menu (item,price) VALUES ('${data.item}', '${data.price}')`,(err,rows) => {
        if(err) {
            throw err
        }else {
            return rows
        }
    })
}

menuModel.findById = (id, cb) => {
    const query = db.all(`SELECT * FROM menu WHERE id = ${id}`,(err,rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
}

menuModel.update = (id,data,cb) => {
    if(!data.item || !data.price){
        throw new Error("Data item dan price wajib diisi");
    }

    // Validasi kolom "item"
    if (typeof data.item !== 'string' || !data.item.match(/^[A-Za-z\s]+$/)) {
        throw new Error("Kolom 'item' harus berupa huruf.");
    }

    // Validasi kolom "price"
    if (typeof data.price !== 'number' || isNaN(data.price)) {
        throw new Error("Kolom 'price' harus berupa angka.");
    }
    
    return db.run(`UPDATE menu SET item = '${data.item}', price = '${data.price}' WHERE id = ${id}`, (err, rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
}

menuModel.delete = (id,cb) => {
    return db.run(`DELETE FROM menu WHERE id = ${id}`, (err, rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
}

menuModel.findByName = (menuName,cb) => {
    return db.all(`SELECT * FROM menu WHERE item IN ('${menuName}')`,(err,rows) => {
        if(err){
            cb(err,null)
        }else {
            cb(null,rows)
        }
    })
}

module.exports = menuModel