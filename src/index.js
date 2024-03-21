import express from 'express'
import { categoryRouter } from './routes/index.js'
const app = express()

app.listen(3030, (req, res)=>{
    console.log('Servidor Iniciado')
})
app.get('/', (req, res)=>{
    res.send('Servidor Iniciado')
})
app.use('/api/categories', categoryRouter)