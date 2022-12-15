import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Proyectos from '../components/utilidades/Proyectos'
import { useParams } from 'react-router-dom'

export const PaginasInfo = (promps) => {
   const [loading, setLoading] =useState(false)
   const [proyectos, setProyectos] = useState([])
   const { id } = useParams();
   console.log("llegue?",id)

   useEffect(() => {
    const cargarProyecto = async() =>{
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Paginasinfo/${id}`);
      setProyectos(response.data)
      setLoading(false)
    };
    cargarProyecto();
   }, [id]);


   
  return (
    <div>
        {
                loading ? (
                    <p>cargando...</p>
                ) : (
                    proyectos.map(item => <Proyectos key={item.id}
                        id={item.id}nombre={item.nombre} descripcion={item.desctipcion} tipo={item.tipo}
                        participantes={item.participantes} inicio={item.inicio} urldegithub={item.urldegithub}
                        imagenes={item.imagenes} body={item.cuerpo} />)
                )
             }
     </div>
  )
}

export default PaginasInfo