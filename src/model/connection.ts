import mongoose from 'mongoose'
import { app } from '../app'
const connect = async () =>{
    await mongoose.connect('mongodb://mongodb:27017/productsdb')
    app.listen(4000)
    console.log('Database connected!')
}

export default connect