const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const handler = require('./lib/handlers')

app.engine('handlebars', expressHandlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

app.get('/', handler.home)

app.get('/about', handler.about)

app.use(handler.notFound)

app.use(handler.serverError)

app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}`
))