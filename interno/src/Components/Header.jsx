import React from 'react'
import classes from '../css/HomePage.module.css'
import MainLogo from '../img/MainLogo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";



const Header = () => {
  const [open , setOpen] = React.useState(false)
  return (
    
    <>
        <header>
            <a href="/"><img src={MainLogo} alt="" /></a>
            <a href="/"><p className={classes.mainLogoP}>Interno</p></a>
            <ul>
                <a href="/"><li onMouseOver={() =>setOpen(true)} onMouseOut={() =>setOpen(false)}>Home</li></a>
                <a href=""><li>Pages</li></a>
                <a href="/Service"><li>Services</li></a>
                <a href="/OurProject"><li>Project</li></a>
                <a href="/Blog"><li>Blog</li></a>
                <a href="/ContactUs"><li>Contact</li></a>
                <li><HiMagnifyingGlass /></li>
            </ul>
        </header>
        {
          open && (
            <div className={classes.HeaderHover1} onMouseOver={() =>setOpen(true)} onMouseOut={() =>setOpen(false)}>
              <ul>
                <a href="/About"><li>About Us</li></a>
                <a href="/OurTeam"><li>Our Team</li></a>
                <a href="/ContactUs"><li>Contact Us</li></a>
                <a href="/Service"><li>Services</li></a>
                <a href="/Pirceing"><li>Pirceing</li></a>
                <a href="/Restric"><li>Restric</li></a>
                <a href="/NewLog"><li>ChangeLog</li></a>
                <a href="/Licenses"><li>Licenses</li></a>
                <a href="/OurProject"><li>Our Projects</li></a>
              </ul>
            </div>
          )
        }
    </>
  )
}

export default Header