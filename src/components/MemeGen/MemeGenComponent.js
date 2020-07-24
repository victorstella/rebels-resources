import React from 'react'

function MemeGenComponent (props) {
  return (
    <div
      className="p-0 pt-3 col-7 mx-auto"
      style={ props.state.memeGenStyle }
      onMouseEnter={ props.changeMemeGenStyleEnter }
      onMouseLeave={ props.changeMemeGenStyleLeave }
    >
      <h2><strong>--Meme Generator--</strong></h2>
      <br />
      <div className="d-flex flex-column justify-content-center mb-4 mx-3">
        <input
          type="text"
          name="topText"
          className="flex-row form-control mx-auto my-2 col-9"
          value={ props.state.topText }
          placeholder="Top Text"
          onChange={ props.changeMemeText }
        />
        <input
          type="text"
          name="bottomText"
          className="flex-row form-control mx-auto my-2 col-9"
          value={ props.state.bottomText }
          placeholder="Bottom Text"
          onChange={ props.changeMemeText }
        />
        <button 
          className="btn btn-info mx-auto mt-3"
          onClick={ props.generateMeme }>Send
        </button>
      </div>
      { props.state.finalMeme }
    </div>
  )
}

export default MemeGenComponent