const conn=require('../config/config')
const jwt=require('jsonwebtoken')
require('dotenv').config()
module.exports={
    regis:(data)=>{
        return new Promise((resolve,reject)=>{
            conn.query('INSERT INTO users SET ?',data,(err,result)=>{
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    login:(data)=>{
        return new Promise((resolve,reject)=>{
            conn.query(`select * from users where email='${data.email}' and password='${data.password}' and position='${data.position}'`,(err,result)=>{
                if(result=='') reject(err)
                // console.log(result)
                token=jwt.sign(JSON.parse(JSON.stringify(result[0])),process.env.TOKEN)
                resolve(token)
            })
        })
    }
}