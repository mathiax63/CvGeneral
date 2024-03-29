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
          html: `${req.body.email} se contacto a traves de la web y quiere hablar ${req.body.trabajo}`
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
          message: "Mensaje enviado, lo estare contactando por Email en la brevedad"
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

                let todosLosProyectos = await todosLosDatos.todosLosproyectos()

                todosLosProyectos = todosLosProyectos.map(proyectos =>{
                  
                  if(proyectos.imagenes){
                    const imagen = cloudinary.url(proyectos.imagenes,{                     
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
                res.json(todosLosProyectos)
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
                                                                    
                      router.get('/Paginasinfo/:id', async function(req, res, next) {
                          let titulosYFoto = await todosLosDatos.proyectosDetallesPorId(req.params.id)
                          //console.log(titulosYFoto) 
                                                                                    
                            if(titulosYFoto.imagenes){                                                                       
                              titulosYFoto.imagenes =  cloudinary.url(titulosYFoto.imagenes,{                                   
                                crop:"fill"
                              });                       
                            }                                                
                            res.json(titulosYFoto);
                          });


                          router.get('/DiplomasInfo', async function(req, res, next) {

                            let diplomsaInfo = await todosLosDatos.todosLosdiplomas()
                            
                            diplomsaInfo = diplomsaInfo.map(diploma =>{
                              if(diploma.imagenes){
                                const imagen = cloudinary.url(diploma.imagenes,{
                              
                                  crop:"fill"
                                });
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
                            res.json(diplomsaInfo)
                              });

                              router.get('/DiplomasInfo/:id', async function(req, res, next) {
                                let diplomaInfo = await todosLosDatos.diplomaPorId(req.params.id)
                                //console.log(titulosYFoto)                                                                        
                                    
                                  if(diplomaInfo.imagenes){
                                    diplomaInfo.imagenes =  cloudinary.url(diplomaInfo.imagenes,{                              
                                      
                                      crop:"fill"
                                    });                       
                                  }                                                
                                  res.json(diplomaInfo);
                                });
    
    module.exports = router