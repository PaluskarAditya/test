import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav-ul-left'>
        <li>
          <a href='/'>Website</a>
        </li>
      </ul>
      <ul className='nav-ul-right'>
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
