let pool = require("./bd");
let md5 = require("md5");
const { query } = require("express");

async function getUserByUsernameAndPassword(nombre,email, password){
    
    try{
        let query ="select * from usuario where  nombre = ? and email = ? and password = ? limit 1";
        let rows = await pool.query(query, [nombre, email, (password)]);
        //[nombre, email, md(password)]
        console.log(pool)
        return rows[0]
    }catch(error){
        console.log(error)
    }
    console.log(query)
}
module.exports = {getUserByUsernameAndPassword}