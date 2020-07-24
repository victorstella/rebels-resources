import React from 'react'

function StarWarsCharComponent (props) {
  let char = []
  const SWCharArr = Object.values(props.SWChar)
  SWCharArr.forEach((element, index) => {
    char[index] = <div className="d-flex py-0 justify-content-center" key={index}>
      <h5>{element}</h5><br />
    </div>
  });
  return (
    <div
      className="col-6 pb-4 pt-0 mx-auto mt-1 mb-4"
      style={ props.state.SWStyle }
      onMouseEnter={ props.changeSWStyleEnter }
      onMouseLeave={ props.changeSWStyleLeave }
    >
      <img 
        src="https://estadodedireito.com.br/wp-content/uploads/2017/07/Star-Wars-1024x618.png"
        alt="Star Wars"
        width="60%"
        height="auto"
        className="mx-auto"
      />
      <hr className="mb-5" style={{ border: '1px solid white', width: '100%' }} />
      { char }
    </div>
  )
}

export default StarWarsCharComponent