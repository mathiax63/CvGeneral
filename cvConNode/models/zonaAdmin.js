let pool = require("./bd");


async function todosLosproyectos(){
    
        let query ="select * from proyectos";
        let rows = await pool.query(query);
        //console.log(rows)
        return rows
    
}

async function todosLosdiplomas(){
    
    let query ="select * from diplomas";
    let rows = await pool.query(query);
    //console.log(rows)
    return rows

}
async function agregarProyecto(obj){
    try{
        let query ="insert into proyectos set ?";
        let rows = await pool.query(query, [obj])
        console.log(query)
        return rows;
    } catch(error){
        console.log(error);
        throw error;
    }
}
async function agregarDiploma(obj){
    try{
        let query ="insert into diplomas set ?";
        let rows = await pool.query(query, [obj])
        console.log(query)
        return rows;
    } catch(error){
        console.log(error);
        throw error;
    }
}
async function borrarProyectos(id){
    let query = "delete from proyectos where id = ?";
    let rows = await pool.query(query, [id]);
    return rows
}
async function borrarDiplomas(id){
    let query = "delete from diplomas where id = ?";
    let rows = await pool.query(query, [id]);
    return rows
}

async function borrarProyecto(id) {
    let query = "select * from proyectos where id = ?"
    let rows = await pool.query(query, [id]);
    return rows[0]
}
async function borarrDiploma(id) {
    let query = "select * from diplomas where id = ?"
    let rows = await pool.query(query, [id]);
    return rows[0]
}

async function modificarecho(obj, id){
    try{
        let query = "update proyectos set ? where id=?";
        let rows = await pool.query(query, [obj, id]);
        return rows;
    }catch(error){
        throw error
    }
}
async function proyectosDetalles(){
    let query = "select * from proyectos where id = ?";
    let rows = await pool.query(query, [id]);
    return rows[0]
}



module.exports = {todosLosproyectos, agregarProyecto, borrarProyectos,borarrDiploma, borrarProyecto, modificarecho, todosLosdiplomas, agregarDiploma, borrarDiplomas, proyectosDetalles}