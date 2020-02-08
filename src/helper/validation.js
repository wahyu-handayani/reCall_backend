const Joi=require('@hapi/joi')
const schema=Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string().min(8).max(10).required(),
        position:Joi.string().required()
    })
module.exports=schema