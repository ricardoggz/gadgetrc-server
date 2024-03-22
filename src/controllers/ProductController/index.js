import { createPoolConnection } from '../../models/index.js'

export const getAllProductsByCategory = (req, res)=>{
    createPoolConnection().getConnection((err, conn)=>{
        if(err) throw new Error('Error al obtener los datos')
        conn.query(`
            SELECT * FROM productos WHERE id_categoria = "${req.params.id}"
        `,(err, rows)=>{
            if(err) return res.json(err)
            res.status(200)
            conn.release()
            return res.json(rows)
        })
    })
}