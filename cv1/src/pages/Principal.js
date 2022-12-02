//import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProyectosGeneral from '../components/utilidades/ProyectosGeneral'
import DIplomas from '../components/utilidades/Diplomas'



 const Principal = (props) => {
   const [loading, setLoading] = useState(false)
   const [Proyectosgeneral, setProyectosgeneral] = useState([])
   const [Diplomas, setDiplomas] = useState([])
   


   
  useEffect(() => {
   const cargarTodo = async () => {
        setLoading(true);
        const proyectosapi = await axios.get(`${process.env.REACT_APP_API_URL}/api/a`);
        setProyectosgeneral(proyectosapi.data)

        const diplomaapi = await axios.get(`${process.env.REACT_APP_API_URL}/api/b`)
        setDiplomas(diplomaapi.data)

        setLoading(false)
      };
      cargarTodo();
    }, []);
  return (
    <div>



    

    <main>
        <div>
            <div class="imagenMasPresentacion">
                <img class="imgCara" src="./img/Sin título.png"/>
                <p>Hola soy Mathias Reid tengo 21 años, estudio Desarrollo Web Full Stack, no tengo experiencia laboral
                    pero si academica, con ganas de trabajar y desarollarme en el mundo laboral de la programacion, soy
                    de Zelaya en pilar, siempre me intereso la programacion
                    , me empeze a formar hace un año y actualmente continuo mi estoduion en cursos de programacion </p>
            </div>
            <h2>Fecha de nacimiento</h2>
            <p>30/10/2000</p>

            <h2>Gustos</h2>
            <ul>
                <li>
                    <p>el deporte</p>
                </li>
                <li>
                    <p>Salir a caminar en la semana</p>
                </li>
                <li>
                    <p>Musica</p>
                </li>
            </ul>

            <h2>Domicilio</h2>
            <p> Pedro Carrión 480, Zelaya, Provincia de Buenos Aires</p>

            <h2>Mis proyectos pasados</h2>

            <section className='proyectosGeneral' >
                    {
                loading ? (
                    <p>cargando...</p>
                ) : (
                    Proyectosgeneral.map(item => <ProyectosGeneral key={item.id}
                        nombre={item.nombre} 
                        imagen={item.imagen} body={item.cuerpo} />)
                )
             }
             </section>
                
            <h2>Diplomas</h2>
            <section className='diplomas'>
                
                {
                    loading ? (
                        <p>cargando...</p>
                    ) : (
                        Diplomas.map(item => <DIplomas key={item.id}
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