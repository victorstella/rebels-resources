import React from 'react'
import CondRenderContainer from './CondRenderContainer.js'

function TheGreatQuestionComponent (props) {
  return (
    <div>
        <div className="my-4" hidden={ !props.state.theGreatQuestion }>
          <h4 className="mb-4">Who is the most beautiful actress of all?</h4>
          <div className="d-flex flex-row justify-content-center">
            <input
              type="text"
              name="answer"
              className="form-control col-4"
              value={ props.state.answer }
              placeholder="Answer"
              onChange={ props.setAnswer }
              />
            <button name="Go" className="btn btn-info mx-3" onClick={ props.checkAnswer }>Go</button>
          </div>
        </div>
        <br />
        <div hidden={ !props.state.imWise }>
          { props.state.isLoading <= 105 ? 
            <div className="mb-5">
              <p>You're a very wise man...</p>
              <div className="progress" style={{ marginTop: 20 }}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                  role="progressbar"
                  style={{ width: `${ props.state.isLoading }%` }}
                  aria-valuenow={ props.state.isLoading }
                  aria-valuemin="0"
                  aria-valuemax="100">
                </div>
              </div>
            </div>
            :
            <CondRenderContainer />
          }
        </div>
      </div>
  )
}

export default TheGreatQuestionComponent