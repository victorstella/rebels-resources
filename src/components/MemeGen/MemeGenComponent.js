import React from 'react'

function MemeGenComponent (props) {
  return (
    <div
      className="p-0 pt-4"
      style={ props.state.memeGenStyle }
      onMouseEnter={ props.changeMemeGenStyleEnter }
      onMouseLeave={ props.changeMemeGenStyleLeave }
    >
      <h2><strong>--Meme Generator--</strong></h2>
      <br />
      <div className="d-flex flex-row justify-content-center mb-5 mx-3">
        <input
          type="text"
          name="topText"
          className="form-control mx-3"
          value={ props.state.topText }
          placeholder="Top Text"
          onChange={ props.changeMemeText }
        />
        <input
          type="text"
          name="bottomText"
          className="form-control mx-3"
          value={ props.state.bottomText }
          placeholder="Bottom Text"
          onChange={ props.changeMemeText }
        />
        <button 
          className="btn btn-info col-1 mx-3"
          onClick={ props.generateMeme }>Gen
        </button>
      </div>
      { props.state.finalMeme }
    </div>
  )
}

export default MemeGenComponent