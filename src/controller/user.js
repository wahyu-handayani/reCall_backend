const model=require('../model/user')
const schema=require('../helper/validation')
module.exports={
    register:(req,res)=>{
        let data={
            email:req.body.email,
            password:req.body.password,
            position:req.body.position
        }
        model.regis(data)
        .then(result=>{
            res.send({
                status:'regis berhasil'
            })
        })
        .catch(err=>{
            let {error}=schema.validate(req.body)
            if (error){
                res.send({
                    message: error
                })
            }
            res.send({message:'email sudah pernah terpakai'})
        })
    }
}