var express = require('express');
var router = express.Router();
let cvBase= require("../../models/zonaAdmin")
const util = require("util") 
const cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload)
const destroy = util.promisify(cloudinary.uploader.destroy)


router.get('/', async function(req, res, next) {

let titulosYSinopsis = await cvBase.todosLosdiplomas()

titulosYSinopsis = titulosYSinopsis.map(proyectos =>{
  if(proyectos.imagenes){
    const imagen = cloudinary.image(proyectos.imagenes,{
      width:100,
      height:100,
      crop:"fill"
    });
    return {
      ...proyectos,
      imagen
    }
  }else{
    return {
      ...proyectos,
      imagen:" "
    }
  }
})

let titulosYSinopsis1 = await cvBase.todosLosproyectos()

titulosYSinopsis = titulosYSinopsis.map(proyectos =>{
  if(proyectos.imagenes){
    const imagen = cloudinary.image(proyectos.imagenes,{
      width:100,
      height:100,
      crop:"fill"
    });
    return {
      ...proyectos,
      imagen
    }
  }else{
    return {
      ...proyectos,
      imagen:" "
    }
  }
})
  res.render('admin/admin', {
    layout: "admin/layout",
    nombre: req.session.nombre,
    title: "Zona de administracion",
    email: req.session.email,
    titulosYSinopsis,
    titulosYSinopsis1
  });
});

router.get("/salir", function (req, res){
  req.session.destroy();
  res.render("index",{
    layout: "admin/layout"
  })
})
router.get("/agregar", function (req, res){
  res.render("admin/agregar",{
    layout: "admin/layout"
  })
})





router.post("/agregar", async function(req, res, next) {
  console.log(req.body)
try{
  let imagenes = " ";
  //console.log(req.files.imagenes)
  if(req.files && Object.keys(req.files).length >0){
    imagen = req.files.imagenes;
    imagenes = (await uploader(imagen.tempFilePath)).public_id
  }


  if(req.body.nombre != "" && req.body.descripcion != ""){
      //estos if array.isArray sirven para los checkbox

      console.log(req.body.nombre)
      console.log(req.body.id)
      console.log(req.body.descripcion)
      console.log(req.body)
     
    
    await cvBase.agregarProyecto({
      ...req.body, //informacion titulo, sinopsis etc
      imagenes
    });
    res.redirect("/admin/admin")
  } else {
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      message: "todos los campos"
    })
  }
} catch (error){
  console.log(error)
  res.render("admin/agregar", {
    layout: "admin/layout",
    error: true,
    message: "no se cargo"
  })
}
})
router.get("/agregarD", function (req, res){
  res.render("admin/agregarD",{
    layout: "admin/layout"
  })
})





router.post("/agregarD", async function(req, res, next) {
  console.log(req.body)
try{
  let imagenes = " ";
  //console.log(req.files.imagenes)
  if(req.files && Object.keys(req.files).length >0){
    imagen = req.files.imagenes;
    imagenes = (await uploader(imagen.tempFilePath)).public_id
  }


  if(req.body.academia != "" && req.body.descripcion != ""){
      //estos if array.isArray sirven para los checkbox

      console.log(req.body.academia)
      console.log(req.body.id)
      console.log(req.body.descripcion)
      console.log(req.body)
     
    
    await cvBase.agregarDiploma({
      ...req.body, //informacion titulo, sinopsis etc
      imagenes
    });
    res.redirect("/admin/admin")
  } else {
    res.render("admin/agregarD", {
      layout: "admin/layout",
      error: true,
      message: "todos los campos"
    })
  }
} catch (error){
  console.log(error)
  res.render("admin/agregarD", {
    layout: "admin/layout",
    error: true,
    message: "no se cargo"
  })
}
})

router.get("/eliminarDiploma/:id", async(req, res, next) =>{
  let id = req.params.id;
  
  let img = await cvBase.borarrDiploma(id)
  if (img.imagenes){
    console.log("llegue1?")
    await(destroy(img.imagenes))
  }
  await cvBase.borrarDiplomas(id);
  res.redirect("/admin/admin")
})


router.get("/eliminar/:id", async(req, res, next) =>{
  let id = req.params.id;
  
  let img = await cvBase.borrarProyecto(id)
  if (img.imagenes){
    console.log("llegue?")
    await(destroy(img.imagenes))
  }
  await cvBase.borrarProyectos(id);
  res.redirect("/admin/admin")
})



router.get("/editar/:id", async (req, res, next) =>{
  
  let id = req.params.id;
  let producto = await cvBase.borrarProyecto(id)

  producto.inicio = `${producto.inicio.toISOString().substring(0,10)}`;
  
  res.render("admin/editar", {
    layout: "admin/layout",
    producto
  })
})

router.post("/editar", async (req, res, next) => {
 
  try{
    let imagenes = req.body.img_original
    let borrar_vieja = false
    if(req.body.img_delete === "1"){
      imagenes= null;
      borrar_vieja= true;
    }else {
      if(req.files && Object.keys(req.files).length > 0){
        imagen = req.files.imagenes;
        imagenes = (await uploader(imagen.tempFilePath)).public_id;
        borrar_vieja= true
      }
    }
    if(borrar_vieja && req.body.img_original){
      await (destroy(req.body.img_original))
    }


    let obj = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      participantes: req.body.participantes,
      tipo: req.body.tipo,
      urldegithub: req.body.urldegithub,
      inicio: req.body.inicio,
      imagenes
    }
    console.log(obj)
    await cvBase.modificarecho(obj, req.body.id);
    res.redirect("/admin/admin");
  }
  catch(error){
    console.log(error)
    res.render("admin/editar",{
      layout: "admin/layout",
      error: true,
      message:"no se pudo editar"
    })
  }
})



module.exports = router;

