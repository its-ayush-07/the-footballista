import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://www.freeiconspng.com/uploads/football-png-23.png" alt="" width="30"  className="d-inline-block align-text-top" />
                    The Footballista
                </a>  
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#standings">Standings</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#fixtures">Fixtures</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#results">Results</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>                
        </div>
    )
}

export default NavBar
