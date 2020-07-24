import React from 'react'
import StarWarsChar from './StarWarsChar/StarWarsCharContainer.js'
import MemeGen from './MemeGen/MemeGenContainer.js'

class LoggedContainer extends React.Component {
  state = {
    isLogged: false
  }

  render () {
    return (
      <div className="d-flex flex-column">
        <MemeGen />
        <StarWarsChar />
      </div>
    )
  }
}

export default LoggedContainer