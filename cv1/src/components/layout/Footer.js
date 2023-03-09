import React from 'react'
import axios from "axios"
import {useState} from "react"

export const Footer = () => {
  const initialFrom = {   
    email:'',
    trabajo: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] =useState("");
  const [formData,setFromData] =useState(initialFrom);

  const handleChange = e =>{
    const {name, value} = e.target;
    setFromData(oldData => ({
      ...oldData,
      [name]:value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    setSending(true)
    const response = await axios.post("http://localhost:3000/api/contacto", formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false){
    setFromData(initialFrom)
  }
  }
  return (
    <div>    <footer>
      <div>
    <h3>Contactos</h3>
    <ul>
        <li><a href="www.linkedin.com/in/mathiasreid19b623217">linkedin</a></li>
        <li>
            <p>Numero de telefono: 11 6840 4305 </p>
        </li>
        <li>
            <p>Email:mathyoyo@hotmail.es</p>
        </li>
    </ul>
    </div>
    <div class="DivFooter">
      <form className="formPP" action="/contacto" onSubmit={handleSubmit} method='post'>
        <h3>¿le gustaria contactarme?</h3>
        <p>Envie un email y le respondere a la brevedad</p>
        <div class="contenedorDePedirPeliculas">
          <div className='formularioDelFooter'>
        <div class="divPedirPeliculas">
          <label class="labelDePedirPelicula" for="email">Su Email :</label>
        <input class="inputPedirPeli" type="text" name="email" value={formData.email} onChange={handleChange} required/>
      </div>
      <div class="divPedirPeliculas">
        <label class="labelDePedirPelicula" for="trabajo">Su peticion/consulta :</label>
        <input class="inputPedirPeli" type="text" name="trabajo" value={formData.trabajo} onChange={handleChange} required/>        
    </div>
    </div>
    <button type="submit" class="btn-btn-primary" className="margin: 0px;">Enviar</button>
     
  </div>

  </form>
    {sending ? <p>Enviando.....</p> : null}
    {msg ? <p>{msg}</p> : null}
    
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
    crossorigin="anonymous"></script>
    </div>


</footer></div>
  )
}
export default Footer