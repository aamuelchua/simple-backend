
//Import Files and Modules
const express = require('express');
const bodyParser = require('body-parser')


//Start-up server and middleware
const app = express();

const server = app.listen(3000,()=>{
    console.log('Mainframe Server listening')
})

//App Routes
let encodeUrl = bodyParser.urlencoded({ extended: false })

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/templates/index.html')
})

app.post('/login',encodeUrl,(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;

    if (username === 'teacher AA' && password === 'is awesome'){
        res.sendFile(__dirname+'/templates/success.html')
    }else{
        res.sendFile(__dirname+'/templates/failure.html')
    }
})

app.get('/',(req,res)=>{
    console.log('here')
})