const jwt=require('jsonwebtoken')
require('dotenv').config()
module.exports={
    authenticateToken:(req,res,next)=>{
        const authHeader=req.headers['authorization']
        const token=authHeader && authHeader.split(' ')[1]
        if(token==null) return res.sendStatus(401)
        jwt.verify(token,process.env.TOKEN,(err,user)=>{
            if(err) return res.sendStatus(403)
            req.user=user
            console.log(user,'//')
            next()
        })
    },
    authenticateTokenCompany:(req,res,next)=>{
        const authHeader=req.headers['authorization']
        const token=authHeader && authHeader.split(' ')[1]
        if(token==null) return res.sendStatus(401)
        jwt.verify(token,process.env.TOKEN_COMPANY,(err,user)=>{
            if(err) return res.sendStatus(403)
            req.user=user
            console.log(user,'//')
            next()
        })
    }
}
