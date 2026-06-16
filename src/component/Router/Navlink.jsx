import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navlink = () => {
  return (
    <div>
<nav className='h3'>
    <Link to='/'>Home</Link> 
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
  
</nav>
<Outlet/>

    </div>
  )
}

export default Navlink