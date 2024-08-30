import express from 'express'
import { Request, Response } from 'express'
import path from 'path'
const router = express.Router()

router.get('/', (req: Request, res: Response)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/register', (req: Request, res: Response)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'register.html'))
})

router.get('/:id', (req: Request, res: Response)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'product-page.html'))
})

export default router