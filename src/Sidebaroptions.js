import React from 'react'
import './Css/Sidebaroptions.css'

function Sidebaroptions({icon,title,number,isactive}) {
  return (
    <div className='sidebaroptions'>
        <icon></icon>
    <h4>{title}</h4>
    <p>{number}</p>
    </div>
  )
}

export default Sidebaroptions
