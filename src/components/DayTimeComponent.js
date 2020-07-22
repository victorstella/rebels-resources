import React from 'react'

function DayTime (props) {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  let styles = {
    fontSize: '350%'
  }

  if( hours < 12 ) {
    timeOfDay = 'morning'
    styles.color = '#19ffa4'
  } else if ( hours >= 12 && hours < 18 ) {
    timeOfDay = 'afternoon'
    styles.color = '#ffe926'
  } else {
    timeOfDay = 'night'
    styles.color = '#5a1fff'
  }

  const text = props.serverRes ? `Good ${ timeOfDay } ${ props.serverRes }` : 'Loading...'
  
  return (
    <h2 style={ styles }>{ text }</h2>
  )
}

export default DayTime