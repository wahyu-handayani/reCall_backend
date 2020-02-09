const data=require('../controller/engineer')
const comp=require('../controller/company')
const user=require('../controller/user')
const authentication=require('../helper/authentication')
const auth=authentication.authenticateToken
const authComp=authentication.authenticateTokenCompany
const express=require('express');
const app=express.Router();
app.get('/engineer', auth, data.read)
app.post('/engineer', auth,data.post)
app.put('/engineer/:id', auth,data.update)
app.delete('/engineer/:id', auth,data.delete)
app.get('/search',auth,data.searchBy)
app.get('/sort',auth,data.sortBy)
app.get('/pagination',auth,data.pagination)
app.get('/combin',data.getCombin)

app.get('/company',authComp,comp.read)
app.post('/company',authComp,comp.post)
app.put('/company/:id',authComp,comp.update)
app.delete('/company/:id',authComp,comp.delete)

app.post('/regis',user.register)
app.post('/login',user.signIn)

module.exports = app;