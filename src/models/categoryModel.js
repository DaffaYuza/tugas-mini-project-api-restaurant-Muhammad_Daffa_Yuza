const db = require("../../db/config")

const categoryModel = {}
categoryModel.getAll = (cb) => {
    var rowData
    const query = db.all("SELECT * FROM categories",(err,rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
    console.log(rowData);
    return query
}

categoryModel.create = (data) => {
    if(!data.name){
        throw new Error("Data name wajib diisi");
    }

    // Validasi kolom "name"
    if (typeof data.name !== 'string' || !data.name.match(/^[A-Za-z\s]+$/)) {
        throw new Error("Kolom 'name' harus berupa huruf.");
    }

    return db.run(`INSERT INTO categories (name) VALUES ('${data.name}')`, (err,rows) => {
        if(err) {
            throw err
        }else {
            return rows
        }
    })
}

categoryModel.findById = (id, cb) => {
    const query = db.all(`SELECT * FROM categories WHERE id = ${id}`,(err,rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
}

categoryModel.update = (id,data,cb) => {
    if(!data.name){
        throw new Error("Data name wajib diisi");
    }

    // Validasi kolom "name"
    if (typeof data.name !== 'string' || !data.name.match(/^[A-Za-z\s]+$/)) {
        throw new Error("Kolom 'name' harus berupa huruf.");
    }
    
    return db.run(`UPDATE categories SET name = '${data.name}' WHERE id = ${id}`, (err, rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
}

categoryModel.delete = (id,cb) => {
    return db.run(`DELETE FROM categories WHERE id = ${id}`, (err, rows) => {
        if(err) {
            cb(err, null)
        }else {
            cb(null, rows)
        }
    })
}

module.exports = categoryModel