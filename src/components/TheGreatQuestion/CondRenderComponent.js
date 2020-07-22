import React from 'react'

function CondRenderComponent (props) {
  return (
    <div style={{ border: `3px solid ${ props.decoration }` }}>
      <p
        className="text-dark font-weight-bold m-0"
        style={{ backgroundColor: `${ props.decoration }` }}
      >Kali Roses is such a GODDESS!!</p>
      <img 
        src={ props.imageSrc } 
        alt="MyGirl"
        height="600"
      />
    </div>
  )
}

export default CondRenderComponent