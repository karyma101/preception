import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo/white.png'

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="navbar logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/process">4 Step Process</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/guide">How It Works</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/data">Data</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}
