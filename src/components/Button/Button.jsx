import React from 'react'

const Button = ({nome, funcao}) => {
  return (
    <div>

        <button onClick={funcao}>{nome}</button>
    </div>
  )
}

export default Button