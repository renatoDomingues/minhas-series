
//Is server=>
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

//const mongo = process.env.MONGODB || 'mongodb://localhost/minhas-series'
const mongo = process.env.MONGODB || 'mongodb+srv://minhas-series:minhas-series@cluster0.opt5r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise


app.get('/', (req, res) => res.send('ok'))


mongoose
    .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        app.listen(port, () =>
            console.log('Listening on: '+port))
    })
    .catch( e => {
        console.log(e)
    })

//app.listen(port, () => console.log('Listening on: '+port)) ]
//mongodb => 'mongodb+srv://minhas-series:minhas-series@cluster0.opt5r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'