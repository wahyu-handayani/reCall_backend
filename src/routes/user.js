const engineer=require('../model/engineer');
const data=require('../controller/engineer')
const user=require('../controller/user')
const express=require('express');
const app=express.Router();
app.get('/engineer', engineer.readData)
app.post('/engineer', engineer.postData)
app.put('/engineer/:id', engineer.updateData)
app.delete('/engineer/:id', engineer.deleteData)
app.get('/search',data.searchBy)
app.get('/sort',data.sortBy)
app.get('/pagination',data.pagination)
app.get('/combin',data.getCombin)

app.post('/regis',user.register)
module.exports = app;