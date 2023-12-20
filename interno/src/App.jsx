import React from 'react'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Service from './Pages/Service'
import OurTeam from './Pages/OurTeam'
import TeamSingle from './Pages/TeamSingle'
import ContactUs from './Pages/ContactUs'
import Pirceing from './Pages/Pirceing'
import Page404 from './Pages/Page404'
import Restric from './Pages/Restric'
import NewLog from './Pages/NewLog'
import Licenses from './Pages/Licenses'
import ServiceSingle from './Pages/ServiceSingle'
import ProjectSingle from './Pages/ProjectSingle'
import OurProject from './Pages/OurProject'
import Blog from './Pages/Blog'
import NewsSingle from './Pages/NewsSingle'


import { Routes , Route } from 'react-router'






const App = () => {
  return (
  <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/Service' element={<Service />}/>
    <Route path='/OurTeam' element={<OurTeam />}/>
    <Route path='/TeamSingle' element={<TeamSingle />}/>
    <Route path='/ContactUs' element={<ContactUs />}/>
    <Route path='/Pirceing' element={<Pirceing />}/>
    <Route path='/Page404' element={<Page404 />}/>
    <Route path='/Restric' element={<Restric />}/>
    <Route path='/NewLog' element={<NewLog />}/>
    <Route path='/Licenses' element={<Licenses />}/>
    <Route path='/ServiceSingle' element={<ServiceSingle />}/>
    <Route path='/ProjectSingle' element={<ProjectSingle />}/>
    <Route path='/OurProject' element={<OurProject />}/>
    <Route path='/Blog' element={<Blog />}/>
    <Route path='/NewsSingle' element={<NewsSingle />}/>
  </Routes>
  )
}

export default App