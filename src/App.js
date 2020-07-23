import React from 'react'
import './App.css'
import Header from './components/HeaderComponent.js'
import Home from './components/HomeComponent.js'
import LoggedContainer from './components/LoggedContainer.js'
import axios from 'axios'

class App extends React.Component {
  state = {
    userData: null,
    tempData:  null
  }

  updateUserData = (event) => {
    const id = event.target.id
    const value = event.target.value
    this.setState(prevSate => {
      return {
        tempData: {
          ...prevSate.tempData,
          [id]: value
        }
      }
    })
  }

  login = () => {
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCS1ryzd6qsjNwL0koWEUpBjrsQ_zM8wRs', {
      email: this.state.tempData.loginEmail,
      password: this.state.tempData.loginPassword,
      returnSecureToken: true
    })
    .then(response => {
      this.setState({ userData: response.data })
    })
    setTimeout(() => {
      this.eraseTempData()
    }, 1500)
  }

  signUp = () => {
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCS1ryzd6qsjNwL0koWEUpBjrsQ_zM8wRs', {
      email: this.state.tempData.email,
      password: this.state.tempData.password,
      returnSecureToken: true
    })
    .then(response => {
      this.setState({ userData: response.data })
    })
    setTimeout(() => {
      this.eraseTempData()
    }, 1500)
  }

  eraseTempData = () => {
    this.setState({ tempData: null })
  }

  render () {
    return (
      <div className="App">
        <Header
          updateUserData={ this.updateUserData }
          login={ this.login }
          signUp={ this.signUp }
          eraseTempData={ this.eraseTempData }
        />
        <div className="mt-4 text-dark" hidden={ this.state.userData }>
          <Home />
        </div>
        <div hidden={ !this.state.userData }>
          <LoggedContainer />
        </div>
      </div>
    )
  
  }
}

export default App