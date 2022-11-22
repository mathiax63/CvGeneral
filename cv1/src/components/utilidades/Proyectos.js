import React from "react"


const proyectos = (props => {
    const {  nombre, imagen, descripcion, tipo, participante, inicio, urldegithub, body} = props;
    return (
        <div className='proyectosDetalles'>
        <img src={imagen} className='imgDetallesDeProyecto' />
     <section className='sectionDePaginasDetealles'><article  className='detallesDeInformacionDeProyecto'>
        <h2>detalles</h2>
        <h3>Nombre</h3>
        <p>{nombre}</p>
        <h3>Tipo</h3>
        <p>{tipo}</p>
        <h3>Descripcion</h3>
        <p>{descripcion} </p>
        <h3>Participantes</h3>
        <p>{participante}</p>
        <h3>Fecha de inicio y cierre</h3>
        <p> {inicio}</p>
        <h3>GitHub</h3>
        <a href=''>{urldegithub}</a>
        </article><div className="divDeBotonRegreso">
        <div dangerouslySetInnerHTML={{__html:body}} />
        <a className='botonRegreso' href='/'>Volver al menu</a></div>
        </section>
     </div>
    
        
        
       
    
    )
})

export default proyectos