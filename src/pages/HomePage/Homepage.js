import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Homepage.css'
import Banner from '../../components/Banner/Banner'
import Row from '../../components/Row/Row'
import { requests } from '../../service/requests'

function Homepage() {
  return (
    <div className='homepage'>
        <Navbar />
        <Banner />
        <div className='rows'>
          <Row title='Trending Now' url={requests.TrendingNow}/>
          <Row title='Top Rated' url={requests.TopRated}/>
          <Row title='Action' url={requests.ActionMovie}/>
          <Row title='War Movies' url={requests.WarMovie}/>
          <Row title='Adventure Movies' url={requests.AdventureMovie}/>
          <Row title='Animation Movies' url={requests.AnimationMovie}/>
          <Row title='Crime Movies' url={requests.CrimeMovie}/>
          <Row title='Sci-Fic Movies' url={requests.ScienceFictionMovie}/>


        </div>
    </div>
  )
}

export default Homepage