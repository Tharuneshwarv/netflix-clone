import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
function Homepage() {
  return (
    <div className='homepage'>
        <Navbar />
        <Banner />
    </div>
  )
}

export default Homepage