import React from 'react'

function InputsComponent (props) {
  return (
    <div
        style={ props.inputStyle }
        className="d-flex flex-column justify-content-center mx-5"
        onMouseEnter={ props.changeInputStyleEnter }
        onMouseLeave={ props.changeInputStyleLeave }
      >
        <h3>Which ones are awesome?</h3>
        <br />
        <div className="d-flex flex-row">
          <input
            type="text"
            name="firstText"
            className="form-control mx-3"
            value={ props.firstText }
            placeholder="First Text"
            onChange={ props.inputChange }
          />
          <input
            type="text"
            name="secondText"
            className="form-control mx-3"
            value={ props.secondText }
            placeholder="Second Text"
            onChange={ props.inputChange }
          />
        </div>
        <div className="d-flex flex-row">
          <p className="col-6 m-0">{ props.firstText }</p>
          <p className="col-6 m-0">{ props.secondText }</p>
          <br />
        </div>
      </div>
  )
}

export default InputsComponent