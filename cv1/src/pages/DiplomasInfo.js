import React from 'react'

export const DiplomasInfo = () => {
  return (
    <div>
        <div className='proyectosDetalles'>
        <img src="./img/tituloDHimgpng.png" className='imgDetallesDeProyecto' />
     <section className='sectionDePaginasDetealles'><article  className='detallesDeInformacionDeProyecto'>
        <h2>detalles</h2>
        <h3>Academia</h3>
        <p>Digital House</p>
        <h3>Titulo</h3>
        <p>Programacion Web Full Stack</p>
        <h3>Descripcion</h3>
        <p>Curso intensivo de 6 meses de duracion </p>
        <h3>Fecha de inicio y cierre</h3>
        <p> 02/02/2021 - 12/08/2021</p>
        <h3>Descargar</h3>
        <a href='../docs/diplomaDH.pdf' download="MathiasReidDiplomaDH">Click para descargar el archivo</a>
        </article><div className="divDeBotonRegreso">
        <a className='botonRegreso' href='/'>Volver al menu</a></div>
        </section>
     </div>
     </div>
  )
}

export default DiplomasInfo