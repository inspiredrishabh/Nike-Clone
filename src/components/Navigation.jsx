import React from 'react'

function Navigation() {
  return (
    <nav>
      <div className='logo'>
        <img src='/images/logo.jpg' alt='logo' height='50px' />
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  )
}

export default Navigation
