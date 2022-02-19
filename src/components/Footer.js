import React from 'react'

// snnipet: rafce

const Footer = ({action}) => {

  const style = {
    button: 'h-10 px-6 font-semibold rounded-md bg-black text-white'
  }

  return (
      <>
          <div>Este es mi pie de página</div>
          <div>Espero que te haya gustado mi sitio CoderHouse.</div>
          <button className={style.button} onClick={action}>Dale click aquí</button>
      </>
  )
}
export default Footer

