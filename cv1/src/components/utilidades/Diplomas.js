const diplomas = (props =>{
    const {titulo, imagen, body} = props
    return(
        <article className='proyectos'><a className='aProyectos' href='./Paginasinfo/${id}' as='./Paginasinfo/{id}'><img class="imgPaginas" src={imagen} /></a>
        <aside>{titulo}</aside>
        <div dangerouslySetInnerHTML={{__html:body}} />
    </article>
    )
})

export default diplomas