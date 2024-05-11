const express = require('express')
const Product = require('./model/schemas/Product.js')
const dbConnect = require('./model/connection.js')
const app = express()

dbConnect().then(app.listen(3030))

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use('/', require('./routes/root.js'))
app.use('/api/', require('./routes/api.js'))