const model=require('../model/engineer')
module.exports={
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