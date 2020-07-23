/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

class HomeComponent extends React.Component {
  state = {
    homeStyle: {
      display: 'flex',
      border: '3px solid cyan',
      flexDirection: 'column',
      margin: '20px',
      padding: '15px',
      backgroundColor: 'black'
    }
  }

  changeHomeStyleEnter = () => {
    this.setState(prevState => {
      return {
        homeStyle: {
          ...prevState.homeStyle,
          border: '3px solid #ffe81f'
        }
      }
    })
  }

  changeHomeStyleLeave = () => {
    this.setState(prevState => {
      return {
        homeStyle: {
          ...prevState.homeStyle,
          border: '3px solid cyan'
        }
      }
    })
  }

  render () {
    return (
      <div 
        className="jumbotron col-10 mx-auto py-3 text-light" 
        style={ this.state.homeStyle }
        onMouseEnter={ this.changeHomeStyleEnter }
        onMouseLeave={ this.changeHomeStyleLeave }
      >
        <h1 className="display-4 mb-3">Meme Generator</h1>
        <p className="lead">
          {`This is a simple meme generator, fully made with ReactJS and some JavaScript, it uses the `}
          <strong>
            <a rel="noopener" href="https://memegen.link/" target="_blank">memegen.link</a>
          </strong>
          {` public API to create memes based on 2 input fields, one for the top text of the image and one for the
          bottom. Both are used to build a URI, along with a random image reference of the available API templates.
          The result is a URL linked to the "src" property of an "img" html tag, loading the finished meme.`}
        </p>
        <p className="lead">
          {`Also, the "Star Wars Character" component loads some information about a random character present 
          at any of the 7 movies. This data is provided by the `}
          <strong>
            <a rel="noopener" href="https://swapi.dev/" target="_blank">swapi.dev</a>
          </strong>
          {` public API.`}
        </p>
        <hr className="my-3" />
        <p className="lead">
          {`Just a simple email and password registration is required to use this application, with the only
          purpose of illustrating a real use case for a commercial website. The provided information will
          not be verifyied and can be false without any problem. It will be stored in the `}
          <strong>
            <a rel="noopener noreferrer" href="https://firebase.google.com/" target="_blank">Firebase</a>
          </strong>
          {` database using its Auth REST API to authenticate and manage registrations and logins.`}
        </p>
        <p className="">
          {`For more, visit the root directory of `}
          <strong>
            <a
              rel="noopener noreferrer"
              href="https://github.com/victorstella/meme-generator"
              target="_blank"
            >Meme Generator
            </a>
          </strong>
        </p>
      </div>
    )
  }
}

export default HomeComponent