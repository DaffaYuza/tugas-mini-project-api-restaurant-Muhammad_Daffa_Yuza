const db = require("../../db/config")

const customerModel = {}
customerModel.getAll = (cb) => {
    var rowData
    const query = db.all("SELECT * FROM customer",(err,rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
    console.log(rowData);
    return query
}

customerModel.create = (data) => {
    if(!data.name || !data.address || !data.email){
        throw new Error("Data name, address, dan email wajib diisi");
    }

    // Validasi kolom "name"
    if (typeof data.name !== 'string' || !data.name.match(/^[A-Za-z\s]+$/)) {
        throw new Error("Data name harus berupa huruf.");
    }

    // Validasi kolom "email"
    if (typeof data.email !== 'string' || !data.email.match(/^[A-Za-z\s]+$/) && !data.email.match(/\S+@\S+\.\S+/)) {
        throw new Error("email yang anda masukkan tidak valid.");
    }

    return db.run(`INSERT INTO customer (name,address,email) VALUES ('${data.name}', '${data.address}', '${data.email}')`,(err,rows) => {
        if(err) {
            throw err
        }else {
            return rows
        }
    })
}

customerModel.findById = (id, cb) => {
    const query = db.all(`SELECT * FROM customer WHERE id = ${id}`,(err,rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
}

customerModel.update = (id,data,cb) => {
    if(!data.name || !data.address || !data.email){
        throw new Error("Data name, address, dan email wajib diisi");
    }

    // Validasi kolom "name"
    if (typeof data.name !== 'string' || !data.name.match(/^[A-Za-z\s]+$/)) {
        throw new Error("Data name harus berupa huruf.");
    }

    // Validasi kolom "email"
    if (typeof data.email !== 'string' || !data.email.match(/^[A-Za-z\s]+$/) && !data.email.match(/\S+@\S+\.\S+/)) {
        throw new Error("email yang anda masukkan tidak valid.");
    }
    
    return db.run(`UPDATE customer SET name = '${data.name}', address = '${data.address}', email = '${data.email}' WHERE id = ${id}`, (err, rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
}

customerModel.delete = (id,cb) => {
    return db.run(`DELETE FROM customer WHERE id = ${id}`, (err, rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
}

module.exports = customerModel