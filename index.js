
//Is server=>
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const pages = require('./routes/pages')
const series = require('./routes/series')

const app = express()
const port = process.env.PORT || 3000

//const mongo = process.env.MONGODB || 'mongodb://localhost/minhas-series'
const mongo = process.env.MONGODB || 'mongodb+srv://minhas-series:minhas-series@cluster0.opt5r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//To process request body =>
app.use(bodyParser.urlencoded( {extended: true } ))

//Ours assets =>
app.use(express.static('public'))

//Process to use "ejs" 'view engine' =>
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//app.get('/', (req, res) => res.send('ok'))
app.use('/', pages)
app.use('/series', series)

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