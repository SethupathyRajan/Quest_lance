import React from 'react';
import './HeaderComponent.css';


function Header()  {
  return (
    <div className="headerDark">
      <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../assets/logo.png"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navcol-1"
            aria-controls="navcol-1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="#">
                  Become a Seller
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">
                    Community
                  </a>
                  <a className="dropdown-item" href="#">
                    Answers
                  </a>
                  <a className="dropdown-item" href="#">
                    Blog
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline mr-auto" target="_self">
              <div className="form-group">
                <label htmlFor="search-field">
                  <i className="fa fa-search"></i>
                </label>
                <input
                  className="form-control search-field"
                  type="search"
                  name="search"
                  id="search-field"
                />
              </div>
            </form>
            <span className="navbar-text">
              <a href="#" className="login">
                Log In
              </a>
            </span>
            <a className="btn btn-light action-button" role="button" href="#">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header