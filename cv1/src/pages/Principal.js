//import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProyectosGeneral from '../components/utilidades/ProyectosGeneral'
import DIplomas from '../components/utilidades/Diplomas'
import { useParams } from 'react-router-dom'



 const Principal = (props) => {
   const [loading, setLoading] = useState(false)
   const [Proyectosgeneral, setProyectosgeneral] = useState([])
   const [Diplomas, setDiplomas] = useState([])
   const [, setProyectos] = useState([])
   const { id } = useParams();
   

   //console.log("llegue?",id)
   


   
  useEffect(() => {
   const cargarTodo = async () => {
        setLoading(true);
        const proyectosapi = await axios.get(`${process.env.REACT_APP_API_URL}/api/a`);
        setProyectosgeneral(proyectosapi.data)

        const diplomaapi = await axios.get(`${process.env.REACT_APP_API_URL}/api/b`)
        setDiplomas(diplomaapi.data)

        /*const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Paginasinfo/${id}`);
        setProyectos(response.data)*/

        setLoading(false)
      };
      cargarTodo();
    }, []);
  return (
    <div>



    

    <main>
        <div className='divgeneralMain'>
            <div class="imagenMasPresentacion">
                <img class="imgCara" src="./img/Sin título.png"/>
                <div>
                <h2>Presentacion</h2>
                <p>Hola soy Mathias Reid tengo 21 años, estudio Desarrollo Web Full Stack, no tengo experiencia laboral
                    pero si academica, con ganas de trabajar y desarrollarme en el mundo laboral de la programacion, soy
                    de Zelaya en pilar, siempre me intereso la programacion
                    , me empecé a formar hace un año y actualmente continuo mi estudio en cursos de programacion </p>
                    </div>
            </div>
            <div className='divDeInfoGeneral'><div className='divDeInfo'>
            <h2>Fecha de nacimiento</h2>
            <p>30/10/2000</p>
            </div>
            <div className='divDeInfo'> 
            <h2>Gustos</h2>
            <ul>
                <li>
                    <p>El deporte</p>
                </li>
                <li>
                    <p>Salir a caminar en la semana</p>
                </li>
                <li>
                    <p>Musica</p>
                </li>
            </ul>
            </div>
            <div className='divDeInfo'>
            <h2>Domicilio</h2>
            <p> SENILLOSA 415 caballito</p>
            </div>
            <div className='divDeInfo'>         
            <h2>Tecnologias</h2>
             
            <ul>
                <div className='divDeInfoColubnas'>
                <li className='ilDeTecnologias'>
                    <p>REACT</p>
                </li>
                <li className='ilDeTecnologias'>
                    <p>HTML</p>
                </li>
                <li className='ilDeTecnologias'>
                    <p>CSS</p>
                </li>
                <li className='ilDeTecnologias'>
                    <p>Bootstrap</p>
                </li>
                <li className='ilDeTecnologias'>
                    <p>JavaScript</p>
                </li>
                <li className='ilDeTecnologias'>
                    <p>MYSQL</p>
                </li>
                <li className='ilDeTecnologias'>
                    <p>NODE</p>
                </li>
                <li className='ilDeTecnologias'>
                    <p>API</p>
                </li>
                <li className='ilDeTecnologias'>
                    <p>GitHub</p>
                </li>
                </div>
            </ul>
            
            </div>
            </div>
            </div>

            
            <div className='divgeneralMain'>
            <h2>Portfolio</h2>

            <section className='proyectosGeneral' >
                    {
                loading ? (
                    <p>cargando...</p>
                ) : (
                    Proyectosgeneral.map(item => <ProyectosGeneral key={item.id}
                        nombre={item.nombre} id={item.id}
                        imagen={item.imagen} body={item.cuerpo} />)
                )
             }
             </section>
                
            <h2>Certificados </h2>
            <section className='diplomas'>
                
                {
                    loading ? (
                        <p>cargando...</p>
                    ) : (
                        Diplomas.map(item => <DIplomas key={item.id}
                            id={item.id}
                            titulo={item.titulo}
                            imagen={item.imagen}
                            body={item.cuerpo}                        
                        />)
                    )
                }
            </section>
            </div>
        

    </main>
</div>
  )
}

export default Principal