import React from 'react'

function HeaderComponent (props) {
  return (
    <header className="header d-flex align-items-center px-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-jedi-order.png"
        alt="Jedi"
        height="100%"
        width="auto"
        className="my-auto mr-2"
      />
      <h3>Jedi Order's Meme Generator</h3>
      <button
        type="button"
        className="btn btn-light ml-auto"
        data-toggle="modal"
        data-target="#login"
      >Login
      </button>
      <button
        type="button"
        className="btn btn-dark ml-3"
        data-toggle="modal"
        data-target="#signin"
      >Sign Up
      </button>

      <div
        className="modal fade"
        id="login"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="login"
        aria-hidden="true"
      >
        <div className="modal-dialog d-flex justify-content-center" role="document">
          <div className="modal-content col-10" >
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex flex-column mx-4">
              <input
                type="email"
                id="loginEmail"
                className="form-control my-3"
                placeholder="Email"
                onChange={ props.updateUserData }
              />
              <input
                type="password"
                id="loginPassword"
                className="form-control my-3 col-9"
                placeholder="Password"
                onChange={ props.updateUserData }
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-dismiss="modal">Cancel</button>
              <button
                type="button"
                className="btn btn-info"
                onClick={ props.login }
                data-dismiss="modal">Enter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="signin"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="signin"
        aria-hidden="true"
      >
        <div className="modal-dialog d-flex justify-content-center" role="document">
          <div className="modal-content col-10">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">Sign Up</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex flex-column mx-4">
              <input 
                type="email"
                id="email"
                className="form-control my-3"
                placeholder="Email"
                onChange={ props.updateUserData }
              />
              <input
                type="password"
                id="password"
                className="form-control my-3 col-9"
                placeholder="Password"
                onChange={ props.updateUserData }
              />
              <input
                type="password"
                id="confirmPassword"
                className="form-control my-3 col-9"
                placeholder="Confirm Password"
                onChange={ props.updateUserData }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                onClick={ props.eraseTempData }
                data-dismiss="modal">Cancel
              </button>
              <button
                type="button"
                className="btn btn-info"
                onClick={ props.signUp }
                data-dismiss="modal">Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent