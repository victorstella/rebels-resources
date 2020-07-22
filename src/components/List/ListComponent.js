import React from 'react'

function ListComponent (props) {
  return (
    <div
      className="p-4"
      style={ props.listStyle }
      onMouseEnter={ props.changeListStyleEnter }
      onMouseLeave={ props.changeListStyleLeave }
    >
      
      <div className="d-flex justify-content-start align-items-center form-check mx-5">
        <input
          className="form-check-input"
          type="radio"
          name="haircolor"
          id="redhead"
          value="Red Head"
          onClick={ props.listOptionChange }
        />
        <label className="form-check-label" htmlFor="redhead">Redhead</label>
      </div>
      <div className="d-flex justify-content-start align-items-center form-check mx-5">
        <input
          className="form-check-input"
          type="radio"
          name="haircolor"
          id="brunette"
          value="Brunette"
          onClick={ props.listOptionChange }
        />
        <label className="form-check-label" htmlFor="brunette">Brunette</label>
      </div>
      <div className="d-flex justify-content-start align-items-center form-check mx-5">
        <input
          className="form-check-input"
          type="radio"
          name="haircolor"
          id="blonde"
          value="Blonde"
          onClick={ props.listOptionChange }
        />
        <label className="form-check-label" htmlFor="blonde">Blonde</label>
      </div>
      <div className="d-flex justify-content-start align-items-center form-check mx-5">
        <input
          className="form-check-input"
          type="radio"
          name="haircolor"
          id="jetblack"
          value="Jet Black"
          onClick={ props.listOptionChange }
        />
        <label className="form-check-label" htmlFor="jetblack">Jet Black</label>
      </div>
    </div>
  )
}

export default ListComponent