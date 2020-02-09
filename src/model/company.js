const conn=require('../config/config')
module.exports={
    readData:()=>{
        return new Promise((resolve,reject)=>{
            conn.query('select * from company',(err,result)=>{
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    postData:(data)=>{
        return new Promise((resolve,reject)=>{
            conn.query('insert into company set ?',data,(err,result)=>{
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    updateData:(data,param)=>{
        return new Promise((resolve,reject)=>{
            conn.query(`update company set ? where id=${param}`,data,(err,result)=>{
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    deleteData:(param)=>{
        return new Promise((resolve,reject)=>{
            conn.query('delete from company where id=?',param,(err,result)=>{
                if(err) reject(err)
                resolve(result)
            })
        })
    }
}