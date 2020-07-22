import React from 'react'
import TheGreatQuestionComponent from './TheGreatQuestionComponent'

class TheGreatQuestionContainer extends React.Component {
  state = {
    isLoading: 0,
    answer: '',
    imWise: false,
    theGreatQuestion: true
  }

  checkAnswer = () => {
    if (this.state.answer === 'Kali Roses') {
      this.setState(prevState => {
        return {
          imWise: !prevState.imWise,
          theGreatQuestion: !prevState.theGreatQuestion
        }
      })
      setInterval( () => {
        this.setState(prevState => {
          return {
            isLoading: prevState.isLoading + 1
          }
        })
      }, 150 )
    } else {
      this.setState(prevState => {
        return {
          theGreatQuestion: !prevState.theGreatQuestion
        }
      })
    }
  }

  setAnswer = (event) => {
    const { value } = event.target
    this.setState({ answer: value })
  }

  render () {
    return (
      <TheGreatQuestionComponent 
        setAnswer={ this.setAnswer }
        checkAnswer={ this.checkAnswer }
        state={ this.state }
      />
    )
  }
}

export default TheGreatQuestionContainer