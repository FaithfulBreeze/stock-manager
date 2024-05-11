const mongoose = require('mongoose')
module.exports = async () =>{
    await mongoose.connect('mongodb://mongodb:27017/productsdb')
    console.log('Database connected!')
}
