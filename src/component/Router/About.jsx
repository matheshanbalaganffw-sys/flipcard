import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='h4'>
      <h1 className='h7'>About Page</h1>
  <Link  className='aboutlink' to="Team"> OurTeam</Link>
  <Link className='aboutlink' to="Company">OurCompany</Link>

  <Outlet/>
    </div>
  )
}

export default About