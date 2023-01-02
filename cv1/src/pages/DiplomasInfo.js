import { useState, useEffect } from 'react'
import axios from 'axios'
import Diploma from '../components/utilidades/DiplomaInfo'
import { useParams } from 'react-router-dom'

export const DiplomaInfo = (promps) => {
   const [loading, setLoading] =useState(false)
   const [diploma, setDiploma] = useState()
   const { id } = useParams();
   console.log("llegue?",id)

   useEffect(() => {
    const cargarDiploma = async() =>{
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/DiplomasInfo/${id}`);
      setDiploma(response.data)
      setLoading(false)
    };
    cargarDiploma();
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
                  diploma && <Diploma key={diploma.id}
                        id={diploma.id}academia={diploma.academia} descripcion={diploma.descripcion} tipo={diploma.tipo}
                        titulo={diploma.titulo} inicio={diploma.inicio} cierre={diploma.cierre}
                        imagenes={diploma.imagenes} body={diploma.cuerpo} />
                )
             }
     </div>
  )
}

export default DiplomaInfo