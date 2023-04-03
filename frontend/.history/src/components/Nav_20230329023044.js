import React from 'react'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className=''>
        <li>
          <a href='/'>Website</a>
        </li>
      </ul>
      <ul className='nav-right'>
        <li>
          <a href='/'>Menu</a>
        </li>
        <li>
          <a href='/'>Login</a>
        </li>
      </ul>
    </nav>
  )
}
