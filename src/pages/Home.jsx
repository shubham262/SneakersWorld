import React from 'react'
import "../styles/home.css"
import Button from '@mui/material/Button'; 
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className='home'>
    <div>
   <h1>Welcome to The SNEAKER world</h1>
   <center><h3 className='e'> Explore the wide range of sneaker</h3></center>
   <Link className='link' to="/store">
   <center><Button variant="contained" className='app'> Sneaker Store</Button></center>
   </Link>
    </div>
    </div>
  )
}

export default Home