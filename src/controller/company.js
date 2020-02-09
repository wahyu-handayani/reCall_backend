const model=require('../model/company')
module.exports={
    read:(req,res)=>{
        model.readData()
        .then(result=>res.json({
            message:result
        }))
        .catch(err=>res.json({
            message:err
        }))
    },
    post:(req,res)=>{
        let data={
            name:req.body.name,
            logo:req.body.logo,
            location:req.body.location,
            description:req.body.description,
            email:req.body.email
        }
        model.postData(data)
        .then(result=>res.json({
            message:result
        }))
        .catch(err=>res.json({
            message:err
        }))
    },
    update:(req,res)=>{
        let data={
            name:req.body.name,
            logo:req.body.logo,
            location:req.body.location,
            description:req.body.description
        }
        let param=req.params.id
        model.updateData(data,param)
        .then(result=>res.json({
            message:result
        }))
        .catch(err=>res.json({
            message:err
        }))
    },
    delete:(req,res)=>{
        let param=req.params.id
        model.deleteData(param)
        .then(result=>res.json({
            message:result
        }))
        .catch(err=>res.json({
            message:err
        }))
    }
}