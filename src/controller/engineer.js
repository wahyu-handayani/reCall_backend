const model=require('../model/engineer')
module.exports={
    read:(req,res)=>{
        model.readData()
        .then(result=>res.send(JSON.stringify({ 'status': 200, "response": result })))
        .catch(err=>res.json({
            message:err
        }))
    },
    post:(req,res)=>{
        let data = {
            name: req.body.name,
            description: req.body.description,
            skill: req.body.skill,
            location: req.body.location,
            birth: req.body.birth,
            created: new Date(),
            updated: new Date()
        }
        model.postData(data)
        .then(result=>res.send(JSON.stringify({ 'status': 200, "response": result })))
        .catch(err=>res.json({
            message:err
        }))
    },
    update:(req,res)=>{
        let data = {
            name: req.body.name,
            description: req.body.description,
            skill: req.body.skill,
            location: req.body.location,
            birth: req.body.birth,
            updated: new Date()
        }
        let param=req.params.id
        model.updateData(data,param)
        .then(result=>res.json({
            response:result
        }))
        .catch(err=>res.json({
            message:err
        }))
    },
    delete:(req,res)=>{
        let param=req.params.id
        model.deleteData(param)
        .then(result=>res.json({
            response:result
        }))
        .catch(err=>res.json({
            message:err
        }))
    },
    searchBy:(req,res)=>{
        let search=req.query.search || ''
        model.search(search)
        .then(result=>res.json({
            message:'DATANYA ADA',
            data:result
        }))
        .catch(err=>res.json({
            message:"DATANYA GK ADA"
        }))
    },
    sortBy:(req,res)=>{
        let sortir=req.query.sortir || 'id'
        model.sort(sortir)
        .then(result=>res.json({
            data:result
        }))
        .catch(err=>res.json({
            message:'data tidak tersedia'
        }))
    },
    pagination:(req,res)=>{
        let page=parseInt(req.query.page) || 1
        let limit=parseInt(req.query.limit) || 1
        model.pageLimit(page,limit)
        .then(result=>res.json({
            data:result
        }))
        .catch(err=>res.json({
            message:'gak ada data'
        }))
    },
    getCombin:(req,res)=>{
        let page=parseInt(req.query.page) ||1
        let limit=parseInt(req.query.limit) ||1
        let search=req.query.search || ''
        let sort=req.query.sort || 'id'
        model.combination(search,sort,page,limit)
        .then(result=>res.json({
            data:result
        }))
        .catch(err=>res.json({
            message:'data gak ada...'
        }))
    }
}