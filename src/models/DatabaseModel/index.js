import mysql from 'mysql'

export const createPoolConnection= ()=>{
    return mysql.createPool({
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'gadgetrc'
    })
}