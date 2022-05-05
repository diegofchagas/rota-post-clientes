import React from 'react'

const input = ({nome,type, onChange,name}) => {
  return (
    <div>
        <label htmlFor="">{nome}</label>
        <input type={type} onChange={onChange} name={name} />
    </div>
  )
}

export default input