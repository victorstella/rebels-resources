import React from 'react'
import MemeGenComponent from './MemeGenComponent'
import axios from 'axios'

class MemeGenContainer extends React.Component {
  state = {
    topText: '',
    bottomText: '',
    memesTemplates: [],
    finalMeme: '',
    memeGenStyle: {
      display: 'flex',
      border: '3px solid cyan',
      flexDirection: 'column',
      margin: '20px',
      padding: '15px'
    }
  }

  componentDidMount = () => {
    axios.get("https://memegen.link/api/templates/")
      .then(response => {
        this.setState({ memesTemplates: Object.values(response.data) })
      })
  }

  changeMemeGenStyleEnter = () => {
    this.setState(prevState => {
      return {
        memeGenStyle: {
          ...prevState.memeGenStyle,
          border: '3px solid blue'
        }
      }
    })
  }

  changeMemeGenStyleLeave = () => {
    this.setState(prevState => {
      return {
        memeGenStyle: {
          ...prevState.memeGenStyle,
          border: '3px solid cyan'
        }
      }
    })
  }

  changeMemeText = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value.toLowerCase() })
  }

  setRandomTemplate = () => {
    const randPosition = Math.floor( Math.random() * this.state.memesTemplates.length - 1 )
    const randTemplateUrl = this.state.memesTemplates[ randPosition ].slice(35)
    return `https://memegen.link/${ randTemplateUrl }/`
  }

  generateMeme = () => {
    const templateToGen = this.setRandomTemplate()
    let topTextArr = this.state.topText.split("")
    let bottomTextArr = this.state.bottomText.split("")

    const finalTopTextArr = topTextArr.map(element => {
      if (element === '_') return '__'
      else if (element === ' ') return '_'
      else if (element === '-') return '--'
      else if (element === '?') return '~q'
      else if (element === '#') return '~h'
      else if (element === '%') return '~p'
      else if (element === '/') return '~s'
      else if (element === '"') return "''"
      else return element
    })
    const finalBottomTextArr = bottomTextArr.map(element => {
      if (element === '_') return '__'
      else if (element === ' ') return '_'
      else if (element === '-') return '--'
      else if (element === '?') return '~q'
      else if (element === '#') return '~h'
      else if (element === '%') return '~p'
      else if (element === '/') return '~s'
      else if (element === '"') return "''"
      else return element
    })

    const topTextToUri = finalTopTextArr.join('')
    const bottomTextToUri = finalBottomTextArr.join('')
    
    this.setState({
      finalMeme:  <img 
                    src={ `${ templateToGen }${ topTextToUri }/${ bottomTextToUri }.jpg` }
                    alt="Your Meme"
                  />
    })
    this.setState({ topText: '', bottomText: '' })
  }

  render () {
    return (
      <MemeGenComponent
        generateMeme={ this.generateMeme }
        changeMemeText={ this.changeMemeText }
        changeMemeGenStyleEnter={ this.changeMemeGenStyleEnter }
        changeMemeGenStyleLeave={ this.changeMemeGenStyleLeave }
        state={ this.state }
      />
    )
  }
}

export default MemeGenContainer