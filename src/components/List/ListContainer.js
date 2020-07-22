import React from 'react'
import ListComponent from './ListComponent'

class ListContainer extends React.Component {
  state = {
    listStyle: {
      display: 'flex',
      border: '3px solid cyan',
      flexDirection: 'column',
      margin: '20px',
      padding: '15px'
    }
  }

  changeListStyleEnter = () => {
    this.setState(prevState => {
      return {
        listStyle: {
          ...prevState.listStyle,
          border: '3px solid #00ff00'
        }
      }
    })
  }

  changeListStyleLeave = () => {
    this.setState(prevState => {
      return {
        listStyle: {
          ...prevState.listStyle,
          border: '3px solid cyan'
        }
      }
    })
  }

  render () {
    return (
      <ListComponent
        listStyle={ this.state.listStyle }
        changeListStyleEnter={ this.changeListStyleEnter }
        changeListStyleLeave={ this.changeListStyleLeave }
        listOptionChange={ this.props.listOptionChange }
      />
    )
  }
}

export default ListContainer