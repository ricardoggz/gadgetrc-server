const express = require('express')
const app = express()

app.listen(3030, (req, res)=>{
    console.log('Servidor Iniciado')
})
app.get('/', (req, res)=>{
    res.send('Servidor Iniciado')
})