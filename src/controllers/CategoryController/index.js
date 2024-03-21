import { createPoolConnection } from '../../models/index.js'

export const getAllCategories = (req, res)=>{
    createPoolConnection().getConnection((err, conn)=>{
        if(err) throw new Error('Error al conectarse a la base de datos')
        conn.query('SELECT * FROM categorias',(err, rows)=>{
            if(err) return res.json(err)
            res.status(200)
            conn.release()
            return res.json(rows)
        })
    })
}