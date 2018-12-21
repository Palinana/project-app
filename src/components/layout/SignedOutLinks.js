import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/sign-up' className="nav-link">Signup</NavLink></li>
        <li><NavLink to='/sign-in' className="nav-link">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks