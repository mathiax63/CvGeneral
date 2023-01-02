import React from "react"
import moment from "moment";



const proyectos = (props => {
    const { id, nombre, imagenes, descripcion, tipo, participantes, inicio,cierre, urldegithub, body} = props;
    const fechaDeCierre = new Date(cierre);
    const fechaDeInicio = new Date(inicio);
    console.log(id)
    //console.log(inicio+"hola")
    return (
        <div className='proyectosDetalles'>
        <img src={imagenes} className='imgDetallesDeProyecto' />
     <section className='sectionDePaginasDetealles'><article  className='detallesDeInformacionDeProyecto'>
        <h2>detalles</h2>
        <h3>Nombre</h3>
        <p>{nombre}</p>
        <h3>Tipo</h3>
        <p>{tipo}</p>
        <h3>Descripcion</h3>
        <p>{descripcion} </p>
        <h3>Participantes</h3>
        <p>{participantes}</p>
        <h3>Fecha de inicio y cierre</h3>
        <div className="textoDeFecha"><p className="textoInternoDeFecha">Del</p><p className="textoInternoDeFecha"> {fechaDeInicio.toLocaleDateString("es-ES")}</p><p className="textoInternoDeFecha">al</p> <p className="textoInternoDeFecha">{fechaDeCierre.toLocaleDateString("es-ES")}</p></div>
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