import React, {useState } from "react"


const diplomaInfo = (props => {
    const { id, academia, imagenes, descripcion, titulo, inicio,cierre, body} = props;
    const fechaDeCierre = new Date(cierre);
    const fechaDeInicio = new Date(inicio);

    const [contenido, setContenido] = useState('Volver al menu');

  const cambiarContenido = () => {
    setContenido('Gracias por ver');
  };

  const restaurarContenido = () => {
    setContenido('Volver al menu');
  };
    

   //console.log(id)
    return (
        
        <div className='proyectosDetalles'>
        <img src={imagenes} className='imgDetallesDeProyecto' />
     <section className='sectionDePaginasDetealles'>
        <article  className='detallesDeInformacionDeProyecto'>
        <h2>detalles</h2>
        <h3>Academia</h3>
        <p>{academia}</p>
        <h3>Titulo</h3>
        <p>{titulo}</p>
        <h3>Descripcion</h3>
        <p>{descripcion} </p>
        <h3>Fecha de inicio y cierre</h3>
        <div className="textoDeFecha"><p className="textoInternoDeFecha">Del</p><p className="textoInternoDeFecha">{fechaDeInicio.toLocaleDateString("es-ES")}</p><p className="textoInternoDeFecha">al</p> <p className="textoInternoDeFecha" >{fechaDeCierre.toLocaleDateString("es-ES")}</p></div>
        </article><div className="divDeBotonRegreso">
        <div dangerouslySetInnerHTML={{__html:body}} />
        </div>
        
        <a  onMouseOver={cambiarContenido}  onMouseOut={restaurarContenido} className='botonRegreso' href='/'>{contenido}</a>
        
        </section>
        
     </div>
    
        
        
       
    
    )
})

export default diplomaInfo