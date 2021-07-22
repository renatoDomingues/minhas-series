
//Is server=>
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const mongo = process.env.MONGODB || 'mongodb://localhost/minhas-series'
const mongoose = require('mongoose')
mongoose.Promesa = global.Promise

app.get('/', (req, res)=> res.send('ok'))

mongoose
    .connect(mongo, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(port, ()=>
            console.log('Listening on: '+port))
    })
    .catch(e=>{
        console.log(e)
    })

//app.listen(port, ()=>console.log('Listening on: '+port))