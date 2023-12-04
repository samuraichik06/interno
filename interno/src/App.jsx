import React from 'react'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Service from './Pages/Service'
import OurTeam from './Pages/OurTeam'
import TeamSingle from './Pages/TeamSingle'



import { Routes , Route } from 'react-router'




const App = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/Service' element={<Service />}/>
    <Route path='/OurTeam' element={<OurTeam />}/>
    <Route path='/OurTeam/Single' element={<TeamSingle />}/>
  </Routes>
  )
}

export default App