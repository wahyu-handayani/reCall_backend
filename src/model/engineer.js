const conn = require('../config/config');
module.exports = {
    readData:()=>{
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM engineer'
            conn.query(sql, (err, result) => {
                if (err) reject(err)
                resolve(result)
            }) 
        })
    },
    postData:(data)=>{
        return new Promise((resolve,reject)=>{
            let sql = 'INSERT INTO engineer SET ?'
            conn.query(sql, data, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })

        })
    },
    updateData:(data,param)=>{
        return new Promise((resolve,reject)=>{
            let sql = `UPDATE engineer SET ? WHERE id=${param}`
            conn.query(sql, data, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    },
    deleteData:(param)=>{
        return new Promise((resolve,reject)=>{
            let sql = "DELETE FROM engineer where id=?"
            conn.query(sql,param, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    },
    // deleteData: (req, res) => {
    //     new Promise((resolve, reject) => {
    //         let sql = "DELETE FROM engineer where id='" + req.params.id + "'"
    //         let query = conn.query(sql, (err, result) => {
    //             if (err) reject(err)
    //             resolve(res.send(JSON.stringify({ 'status': 200, "response": result })))
    //         })
    //     })

    // },
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