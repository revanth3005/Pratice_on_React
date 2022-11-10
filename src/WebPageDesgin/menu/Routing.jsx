import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './RoutersFolder/Home'
import Blog from './RoutersFolder/Blog'
import Contact from './RoutersFolder/Contact'
import About from './RoutersFolder/About'

function Routing() {
  return (
    <div className='routing'>
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
        </Routes>
    </div>
  )
}

export default Routing
