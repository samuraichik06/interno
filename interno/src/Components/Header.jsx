import React from 'react'
import classes from '../css/HomePage.module.css'
import MainLogo from '../img/MainLogo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";



const Header = () => {
  const [open , setOpen] = React.useState(false)
  return (
    
    <>
        <header>
            <img src={MainLogo} alt="" />
            <p className={classes.mainLogoP}>Interno</p>
            <ul>
                <a href="/"><li onMouseOver={() =>setOpen(true)} onMouseOut={() =>setOpen(false)}>Home</li></a>
                <a href=""><li>Pages</li></a>
                <a href="/Service"><li>Services</li></a>
                <a href=""><li>Project</li></a>
                <a href=""><li>Blog</li></a>
                <a href=""><li>Contact</li></a>
                <li><HiMagnifyingGlass /></li>
            </ul>
        </header>
        {
          open && (
            <div className={classes.HeaderHover1} onMouseOver={() =>setOpen(true)} onMouseOut={() =>setOpen(false)}>
              <ul>
                <a href="/About"><li>About Us</li></a>
                <a href=""><li>Our Projects</li></a>
                <a href="/OurTeam"><li>Our Team</li></a>
                <a href=""><li>Contact Us</li></a>
                <a href="/Service"><li>Services</li></a>
              </ul>
            </div>
          )
        }
    </>
  )
}

export default Header