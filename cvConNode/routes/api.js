var express = require('express');
var router = express.Router();
let todosLosDatos= require("../models/zonaAdmin")
const cloudinary = require("cloudinary").v2;
let nodemailer = require("nodemailer")


router.get('/', async function(req, res, next) {

  let titulosYSinopsis = await todosLosDatos.todosLosproyectos()
  
  titulosYSinopsis = titulosYSinopsis.map(peliculas =>{
    if(peliculas.imagenes){
      const imagen = cloudinary.url(peliculas.imagenes,{
       
        crop:"fill"
      });
      return {
        ...peliculas,
        imagen
      }
    }else{
      return {
        ...peliculas,
        imagen:" "
      }
    }
  })
  res.json(titulosYSinopsis)
    });
      router.post("/contacto", async (req,res) =>{
        if (!req.body || !req.body.email) {
          res.status(400).json ({
            error: false
          })}
        const mail={
          to:"mathyoyo@hotmail.es",
          subject:"contacto web",
          html: `${req.body.email} se contacto a traves de la web y quiera pedir la pelicula ${req.body.pedido}`
        }
        
        const transport = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        })
        await transport.sendMail(mail)
        res.status(201).json({
          error: false,
          message: "mensaje enviado"
        })
      })
      


router.get('/contacto', async function(req, res, next) {

    let titulosYSinopsis = await todosLosDatos.todasLasPeliculas()
    
    titulosYSinopsis = titulosYSinopsis.map(peliculas =>{
      if(peliculas.imagenes){
        const imagen = cloudinary.url(peliculas.imagenes,{
         
          crop:"fill"
        });
        return {
          ...peliculas,
          imagen
        }
      }else{
        return {
          ...peliculas,
          imagen:" "
        }
      }
    })
    res.json(titulosYSinopsis)
      });
     
              router.get('/a', async function(req, res, next) {

                let titulosYSinopsiss = await todosLosDatos.todosLosproyectos()
                
                titulosYSinopsiss = titulosYSinopsiss.map(peliculas =>{
                  if(peliculas.imagenes){
                    const imagen = cloudinary.url(peliculas.imagenes,{                     
                      crop:"fill"
                    });
                    return {
                      ...peliculas,
                      imagen
                    }
                  }else{
                    return {
                      ...peliculas,
                      imagen:" "
                    }
                  }
                })
                res.json(titulosYSinopsiss)
                  });
                  
                  router.get("/b", async function (req, res, next){

                    let diplomas = await todosLosDatos.todosLosdiplomas()

                    diplomas=diplomas.map(diploma =>{
                      if(diploma.imagenes){
                        const imagen = cloudinary.url(diploma.imagenes,{
                          crop:"fill"
                        })
                        return {
                          ...diploma,
                          imagen
                        }
                      }else{
                        return {
                          ...diploma,
                          imagen:" "
                        }
                      }
                    })
                    res.json(diplomas)
                      }
                    )
                  
        
    

                  router.get('/Paginasinfo', async function(req, res, next) {

                    let titulosYSinopsis = await todosLosDatos.proyectosDetalles()
                    
                    titulosYSinopsis = titulosYSinopsis.map(peliculas =>{
                      if(peliculas.imagenes){
                        const imagen = cloudinary.url(peliculas.imagenes,{
                      
                          crop:"fill"
                        });
                        return {
                          ...peliculas,
                          imagen
                        }
                      }else{
                        return {
                          ...peliculas,
                          imagen:" "
                        }
                      }
                    })
                    res.json(titulosYSinopsis)
                      });
            
            
            
                  router.get('/Paginasinfo/{id}', async function(req, res, next) {
            
                    let titulosYSinopsis = await todosLosDatos.proyectosDetalles()
                    
                    titulosYSinopsis = titulosYSinopsis.map(peliculas =>{
                      if(peliculas.imagenes){
                        const imagen = cloudinary.url(peliculas.imagenes,{
                      
                          crop:"fill"
                        });
                        return {
                          ...peliculas,
                          imagen
                        }
                      }else{
                        return {
                          ...peliculas,
                          imagen:" "
                        }
                      }
                    })
                    res.json(titulosYSinopsis)
                      });



    
    module.exports = router