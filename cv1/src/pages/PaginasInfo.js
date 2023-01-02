import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Proyecto from '../components/utilidades/Proyectos'
import { useParams } from 'react-router-dom'

export const PaginasInfo = (promps) => {
   const [loading, setLoading] =useState(false)
   const [proyecto, setProyecto] = useState()
   const { id } = useParams();
   console.log("llegue?",id)
   
   

   useEffect(() => {
    const cargarProyecto = async() =>{
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Paginasinfo/${id}`);
      setProyecto(response.data)
      setLoading(false)
    };
    cargarProyecto();
   }, [id]);
   //const proyectosjson = Object.values(proyectos)
   //console.log(proyecto)
   //console.log(proyectosjson)


   
  return (
    <div>
        {
                loading ? (
                    <p>cargando...</p>
                ) : (
                  proyecto && <Proyecto key={proyecto.id}
                        id={proyecto.id}nombre={proyecto.nombre} descripcion={proyecto.descripcion} tipo={proyecto.tipo}
                        participantes={proyecto.participantes} inicio={proyecto.inicio} cierre={proyecto.cierre} urldegithub={proyecto.urldegithub}
                        imagenes={proyecto.imagenes} body={proyecto.cuerpo} />
                )
             }
     </div>
  )
}

export default PaginasInfo