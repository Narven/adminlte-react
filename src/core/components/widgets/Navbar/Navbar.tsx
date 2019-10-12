import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faClock,
  faComments,
  faEnvelope,
  faSearch,
  faStar, faThLarge,
  faUsers
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><FontAwesomeIcon icon={faBars} /></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>

      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <FontAwesomeIcon icon={faComments} />
            <span className="badge badge-danger navbar-badge">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">

              <div className="media">
                <img src="./assets/images/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger"><FontAwesomeIcon icon={faStar} /></span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted"><FontAwesomeIcon icon={faClock} className={'mr-1'} /> 4 Hours Ago</p>
                  </div>
              </div>
            </a>

            <div className="dropdown-divider"/>
            <a href="#" className="dropdown-item">

              <div className="media">
                <img src="./assets/images/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted"><FontAwesomeIcon icon={faStar} /></span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted"><FontAwesomeIcon icon={faClock} className={'mr-1'} /> 4 Hours Ago</p>
                  </div>
              </div>
            </a>

            <div className="dropdown-divider"/>

            <a href="#" className="dropdown-item">
              <div className="media">
                <img src="./assets/images/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning"><FontAwesomeIcon icon={faStar} /></span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted"><FontAwesomeIcon icon={faClock} className={'mr-1'} /> 4 Hours Ago</p>
                  </div>
              </div>
            </a>
            <div className="dropdown-divider"/>
            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <FontAwesomeIcon icon={faBell} />
            <span className="badge badge-warning navbar-badge">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider"/>
            <a href="#" className="dropdown-item">
              <FontAwesomeIcon icon={faEnvelope} className={'mr-2'} /> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider"/>
            <a href="#" className="dropdown-item">
              <FontAwesomeIcon icon={faUsers} className={'mr-2'} /> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider"/>
            <a href="#" className="dropdown-item">
              <FontAwesomeIcon icon={faClock} className={'mr-1'} /> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider"/>
            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
            <FontAwesomeIcon icon={faThLarge} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
