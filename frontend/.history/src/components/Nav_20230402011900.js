import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav-ul-left'>
        <li>
          <Link to='/'>Shree</Link>
        </li>
      </ul>
      <ul className='nav-ul-right'>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}
