import React from 'react'
import './App.css'
import Header from './components/Header/HeaderContainer.js'
import LogInOut from './components/LogInOutComponent.js'
import DayTime from './components/DayTimeComponent.js'
import Inputs from './components/Inputs/InputsContainer'
import MemeGen from './components/MemeGen/MemeGenContainer.js'
import List from './components/List/ListContainer.js'
import TheGreatQuestion from './components/TheGreatQuestion/TheGreatQuestionContainer.js'
import axios from 'axios'

class App extends React.Component {
  state = {
    serverResponse: '',
    firstText: '',
    secondText: '',
    listOption: '',
    isLogged: false
  }

  componentDidMount () {
    const randChar = Math.floor( Math.random() * 81 ) + 1
    axios.get(`https://swapi.dev/api/people/${randChar}`)
      .then(res => {
        this.setState({ serverResponse: res.data.name })
      } )
  }

  logIn = () => {
    this.setState(prevState => {
      return {
        isLogged: !prevState.isLogged
      }
    })
  }

  inputChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  listOptionChange = (event) => {
    this.setState({ listOption: event.target.id })
  }

  render () {
    let correctInput = `${ this.state.firstText }${ this.state.secondText }`
    let showQuestion =  correctInput.includes('blondes') && 
                        correctInput.includes('are') && 
                        correctInput.includes('awesome') &&
                        this.state.listOption.includes('blonde')

    return (
      <div className="App">
        <Header 
          logIn={ this.logIn }
          isLogged={ this.state.isLogged }
        />
        <LogInOut isLogged={ this.state.isLogged }/>
        <DayTime serverRes={ this.state.serverResponse } />
        <MemeGen />
        <br />
        <br />
        <div className="d-flex flex-row">
          <List 
            listOption={ this.state.listOption }
            listOptionChange={ this.listOptionChange }
          />
          <Inputs
            inputChange={ this.inputChange }
            firstText={ this.state.firstText }
            secondText={ this.state.secondText }
          />
        </div>
        <br />
        <br />
        <div hidden={ !showQuestion }>
          <TheGreatQuestion />
        </div>
      </div>
    )
  
  }
}

export default App