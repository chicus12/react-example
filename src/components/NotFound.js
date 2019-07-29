import React from 'react'

function NotFound(props) {

  console.log(props)
  return (
    <>
      <h1>Pareces que estás perdido</h1>
      <h4>La ruta que deseas no existe</h4>
      <button onClick={() => props.history.push('/')}>Regresar al home</button>
    </>
  )
}

export default NotFound