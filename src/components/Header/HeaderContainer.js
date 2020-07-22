import React from 'react'
import axios from 'axios'
import HeaderComponent from './HeaderComponent.js'

class Header extends React.Component {
  state = {
    userData: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  updateUserData = (event) => {
    const id = event.target.id
    const value = event.target.value
    this.setState(prevSate => {
      return {
        userData: {
          ...prevSate.userData,
          [id]: value
        }
      }
    })
  }

  signUp = () => {
    axios.put('https://meme-generator-8584e.firebaseio.com/users.json', this.state.userData)
  }

  render() {
    return (
      <HeaderComponent
        state={ this.state }
        logIn={ this.props.logIn }
        updateUserData={ this.updateUserData }
        signUp={ this.signUp }
      />
    )
  }
}

export default Header