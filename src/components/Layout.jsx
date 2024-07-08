import React from 'react'
import { Outlet  } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Subscribe from './Subscribe'
import ScrollToTop from './ScrollToTop'

const Layout = () => {



  return (



    <div>
        <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Subscribe/>
        <Footer/>

    </div>
  )
}

export default Layout