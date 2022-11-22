//import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProyectosGeneral from '../components/utilidades/ProyectosGeneral'



 const Principal = (props) => {
   const [loading, setLoading] = useState(false)
   const [Proyectosgeneral, setProyectosgeneral] = useState([])
   


   
  useEffect(() => {
   const cargarTodo = async () => {
        setLoading(true);
        const proyectosapi = await axios.get(`${process.env.REACT_APP_API_URL}/api/a`);
        setProyectosgeneral(proyectosapi.data)
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
                
                <article className='proyectos'><a className='aProyectos' href="./DiplomasInfo"><img class="imgPaginas" src="./img/tituloDHimgpng.png" alt=""/></a>
                    <aside>Diploma Digital House</aside>
                </article>
                <article className='proyectos'><a className='aProyectos' href="./DiplomasInfo"><img class="imgPaginas" src="./img/titulo_webBasico.png"
                            alt=""/></a>
                    <aside>Diploma Curso JavaScript UTN</aside>
                </article>

                <article className='proyectos'><a className='aProyectos' href="./DiplomasInfo"><img class="imgPaginas" src="./img/tituloUTNFullStack.png" alt=""/></a>
                    <aside>Diploma Curso de desarollo Web Full Stack en la UTN</aside>
                </article>
            </section>

        </div>

    </main>
</div>
  )
}

export default Principal