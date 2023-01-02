const diplomas = (props =>{
    const {id,titulo, imagen, body} = props
    
    return(
        <article className='proyectos'><a className='aProyectos' href={'/DiplomasInfo/'+id} as='./Paginasinfo/{id}'><img class="imgPaginas" src={imagen} /></a>
        <aside>{titulo}</aside>
        <div dangerouslySetInnerHTML={{__html:body}} />
    </article>
    )
})

export default diplomas