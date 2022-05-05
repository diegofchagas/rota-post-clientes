import React,{useState} from 'react'
import Input from '../Input/input'
import Button from '../Button/Button';
import axios from "axios"
function Formulario(){

 const[valor, setValor] = useState({});
   console.log(valor)

  function handleName(e){
   setValor({...valor,[e.target.name]:e.target.value})
  }

  const api =()=>{
      axios.post("https://hidden-brushlands-01887.herokuapp.com/clientes",valor)
  }


  function submit(e){
  e.preventDefault()
  api();
  }


  return (
    <div>

        <form onSubmit={submit}>

            <Input type="text" nome="Nome Completo" onChange={handleName} name="nome"/>
            <Input type="text" nome="Email" onChange={handleName} name="email" />
            <Input type="text" nome="Telefone" onChange={handleName} name="telefone"/>
        <div>
       <Button nome="enviar"/>
        </div>

        </form>
   
  
  
    </div>
  )
}

export default Formulario