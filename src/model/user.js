const conn=require('../config/config')
module.exports={
    regis:(data)=>{
        return new Promise((resolve,reject)=>{
            conn.query('INSERT INTO users SET ?',data,(err,result)=>{
                if(err) reject(err)
                resolve(result)
            })
        })
    }
}