const data=require('../controller/engineer')
const user=require('../controller/user')
const auth=require('../helper/authentication')
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

app.post('/regis',user.register)
app.post('/login',user.signIn)

module.exports = app;