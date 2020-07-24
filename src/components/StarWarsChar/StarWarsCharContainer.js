import React from 'react'
import StarWarsCharComponent from './StarWarsCharComponent.js'
import axios from 'axios'

class StarWarsCharContainer extends React.Component {
  state = {
    SWStyle: {
      display: 'flex',
      border: '3px solid cyan',
      flexDirection: 'column',
      margin: '20px',
      padding: '15px',
      color: '#ffe81f',
      backgroundColor: 'black'
    },
    SWChar: {}
  }

  componentDidMount () {
    const randChar = Math.floor( Math.random() * 81 ) + 1
    axios.get(`https://swapi.dev/api/people/${randChar}`)
      .then(res => {
        let charValues = Object.values(res.data)
        let charKeys = Object.keys(res.data)
        for (let i = 0; i < 8; i++) {
          charKeys[i] = charKeys[i].replace(/(_)/g, " ")
          charKeys[i] = charKeys[i].charAt(0).toUpperCase() + charKeys[i].slice(1)
          charValues[i] = charValues[i].charAt(0).toUpperCase() + charValues[i].slice(1)
          this.setState(prevState => {
            if (i === 1 && charValues[i] !== 'Unknown') {
              return {
                SWChar: {
                  ...prevState.SWChar,
                  [i]: `${charKeys[i]}: ${charValues[i]} cm`
                }
              }
            } else if (i === 2 && charValues[i] !== 'Unknown') {
              return {
                SWChar: {
                  ...prevState.SWChar,
                  [i]: `${charKeys[i]}: ${charValues[i]} Kg`
                }
              }
            } else {
              return {
                SWChar: {
                  ...prevState.SWChar,
                  [i]: `${charKeys[i]}: ${charValues[i]}`
                }
              }
            }
          })
        }
      })
  }

  changeSWStyleEnter = () => {
    this.setState(prevState => {
      return {
        SWStyle: {
          ...prevState.SWStyle,
          border: '3px solid magenta'
        }
      }
    })
  }

  changeSWStyleLeave = () => {
    this.setState(prevState => {
      return {
        SWStyle: {
          ...prevState.SWStyle,
          border: '3px solid cyan'
        }
      }
    })
  }

  render () {
    return (
      <StarWarsCharComponent
        state={ this.state }
        changeSWStyleEnter={ this.changeSWStyleEnter }
        changeSWStyleLeave={ this.changeSWStyleLeave }
        SWChar={ this.state.SWChar }
      />
    )
  }
}

export default StarWarsCharContainer