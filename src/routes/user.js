const data=require('../controller/engineer')
const user=require('../controller/user')
const auth=require('../helper/authentication')
const express=require('express');
const app=express.Router();
app.get('/engineer', auth, data.read)
app.post('/engineer', data.post)
app.put('/engineer/:id', data.update)
app.delete('/engineer/:id', data.delete)
app.get('/search',data.searchBy)
app.get('/sort',data.sortBy)
app.get('/pagination',data.pagination)
app.get('/combin',data.getCombin)

app.post('/regis',user.register)
app.post('/login',user.signIn)

module.exports = app;