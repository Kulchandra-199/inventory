import React from 'react'
import Navbar from "../components/Navbar"


const Home = ({isLoggedIn, user}) => {
  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} user={user}/>
    <h1>home</h1>
    </>
  )
}

export default Home