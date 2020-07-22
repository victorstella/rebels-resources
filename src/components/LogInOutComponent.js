import React from 'react'

function LogInOutComponent (props) {
  return (
    <div className="col-12">
      <p className={ props.isLogged ? 'text-primary' : 'text-danger' }>
        { props.isLogged ? 'Hello Stranger' : 'Is Anybody Here?' }
      </p>
    </div>
  )
}

export default LogInOutComponent