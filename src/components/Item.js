import React from 'react'

const Item = (props) => {
  return (
    <div style={{border: 'solid red'}}>
        {props.children}
        <h3>{props.producto.nombre}</h3>
        <h4>{props.producto.precio} </h4>
    </div>
  )
}

export default Item