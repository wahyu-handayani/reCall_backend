const conn = require('../config/config');
module.exports = {
    readData: (req, res) => {
        new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM engineer'
            let query = conn.query(sql, (err, result) => {
                if (err) reject(err)
                resolve(res.send(JSON.stringify({ "status": 200, "error": null, "response": result })))
            })
        })
    },
    postData: (req, res) => {
        new Promise((resolve, reject) => {
            let data = { name: req.body.name, description: req.body.description, skill: req.body.skill, location: req.body.location, birth: req.body.birth, created: new Date(), updated: new Date() }
            let sql = 'INSERT INTO engineer SET ?'
            let query = conn.query(sql, data, (err, result) => {
                if (err) reject(err)
                resolve(res.send(JSON.stringify({ 'status': 200, 'error': null, 'response': result })))
            })
        })

    },
    updateData: (req, res) => {
        new Promise((resolve, reject) => {
            let data = { name: req.body.name, description: req.body.description, skill: req.body.skill, location: req.body.location, birth: req.body.birth, updated: new Date() }
            let sql = "UPDATE engineer SET ? WHERE id='" + req.params.id + "' "
            let query = conn.query(sql, data, (err, result) => {
                if (err) reject(err)
                resolve(res.send(JSON.stringify({ 'status': 200, 'error': null, 'response': result })))
            })
        })

    },
    deleteData: (req, res) => {
        new Promise((resolve, reject) => {
            let sql = "DELETE FROM engineer where id='" + req.params.id + "'"
            let query = conn.query(sql, (err, result) => {
                if (err) reject(err)
                resolve(res.send(JSON.stringify({ 'status': 200, "response": result })))
            })
        })

    },
    search:(str)=>{
        return new Promise((resolve,reject)=>{
            conn.query(`SELECT * FROM engineer WHERE name like '%${str}%' or skill like '%${str}%'`,(err,result)=>{
                if(result=='') reject(err)
                resolve(result)
            })
        })
    },
    sort:(str)=>{
        return new Promise((resolve,reject)=>{
            conn.query(`SELECT * FROM engineer order by ${str}`,(err,result)=>{
                if (err) reject(err)
                resolve(result)
            })
        })
    },
    pageLimit:(page,limit)=>{
        let startIndex=(page-1)*limit
        return new Promise((resolve,reject)=>{
            conn.query('SELECT * FROM engineer LIMIT ?,?',[startIndex,limit],(err,result)=>{
                if(result=='') reject(err)
                resolve(result)
            })
        })
    },
    combination:(search,sort,page,limit)=>{
        let startIndex=(page-1)*limit
        return new Promise((resolve,reject)=>{
            conn.query(`select * from engineer where name like '%${search}%' or skill like '%${search}%' order by ${sort} limit ${startIndex},${limit}`,(err,result)=>{
                if (result=='') reject(err)
                resolve(result)
            })
        })
    }
}