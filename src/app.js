const express = require('express')
const Product = require('./model/schemas/Product.js')
const dbConnect = require('./model/connection.js')
const cors = require('cors')
const app = express()

dbConnect().then(app.listen(3030, '0.0.0.0'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use(express.static(`${__dirname}/public`))

app.use('/', require('./routes/root.js'))
app.use('/api/', require('./routes/api.js'))
app.use('*', (req, res) =>{
  res.status(404).json({error: 'not found'})
})
