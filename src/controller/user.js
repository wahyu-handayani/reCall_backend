const model = require('../model/user')
const schema = require('../helper/validation')
const jwt = require('jsonwebtoken')
module.exports = {
    register: (req, res) => {
        let data = {
            email: req.body.email,
            password: req.body.password,
            position: req.body.position
        }
        model.regis(data)
            .then(result => {
                res.send({
                    status: 'regis berhasil'
                })
            })
            .catch(err => {
                let { error } = schema.validate(req.body)
                if (error) {
                    res.send({
                        message: error
                    })
                }
                res.send({ message: 'email sudah pernah terpakai' })
            })
    },
    signIn: (req, res) => {
        let data = {
            email: req.body.email,
            password: req.body.password,
            position: req.body.position
        }
        console.log(req.body.email)
        model.login(data)
            .then(result => {
                let position = JSON.parse(JSON.stringify(result[0].position))
                if (position == 'engineer') {
                    let token = jwt.sign(JSON.parse(JSON.stringify(result[0])), process.env.TOKEN, { expiresIn: '24h' })
                    res.json({
                        message: token
                    })
                } else {
                    console.log(position)
                    let token = jwt.sign(JSON.parse(JSON.stringify(result[0])), process.env.TOKEN_COMPANY, { expiresIn: '24h' })
                    res.json({
                        message: token
                    })
                }
            })
            .catch(err => res.json({
                message: 'data yg kmu masukin salah'
            }))
    }
}