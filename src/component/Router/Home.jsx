import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='h2'>Home   Page</h1>
     <Link to="/contact">
   <button className='h1'>Go to Contact</button>
  </Link>
    </div>
  )
}

export default Home