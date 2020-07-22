import React from 'react'
import InputsComponent from './InputsComponent.js'

class InputsContainer extends React.Component {
  state = {
    inputStyle: {
      display: 'flex',
      border: '3px solid cyan',
      flexDirection: 'column',
      margin: '20px',
      padding: '15px'
    }
  }

  changeInputStyleEnter = () => {
    this.setState(prevState => {
      return {
        inputStyle: {
          ...prevState.inputStyle,
          border: '3px solid magenta'
        }
      }
    })
  }

  changeInputStyleLeave = () => {
    this.setState(prevState => {
      return {
        inputStyle: {
          ...prevState.inputStyle,
          border: '3px solid cyan'
        }
      }
    })
  }

  render () {
    return (
      <InputsComponent
        inputChange={ this.props.inputChange }
        firstText={ this.props.firstText }
        secondText={ this.props.secondText }
        inputStyle={ this.state.inputStyle }
        changeInputStyleEnter={ this.changeInputStyleEnter }
        changeInputStyleLeave={ this.changeInputStyleLeave }
      />
    )
  }
}

export default InputsContainer