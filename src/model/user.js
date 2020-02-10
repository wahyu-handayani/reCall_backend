const conn=require('../config/config')
const schema = require('../helper/validation')
require('dotenv').config()
module.exports={
    regis:(data,data2)=>{
        return new Promise((resolve,reject)=>{
            conn.query('INSERT INTO users SET ?',data,(err,result)=>{
                let { error } = schema.validate(data2)
                if(err||error) reject(err)
                resolve(result)
            })
        })
    },
    login:(data)=>{
        return new Promise((resolve,reject)=>{
            conn.query(`select * from users where email='${data.email}' and password='${data.password}' and position='${data.position}'`,(err,result)=>{
                if(result=='') reject(err)
                resolve(result)
            })
        })
    }
}