import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/sign-up'>Signup</NavLink></li>
        <li><NavLink to='/sign-in'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks