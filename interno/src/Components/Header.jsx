import React from 'react'
import classes from '../css/HomePage.module.css'
import MainLogo from '../img/MainLogo.png'
import { HiMagnifyingGlass } from "react-icons/hi2";



const Header = () => {
  return (
    
    <>
        <header>
            <img src={MainLogo} alt="" />
            <p className={classes.mainLogoP}>Interno</p>
            <ul>
                <li>Home</li>
                <li>Pages</li>
                <li>Services</li>
                <li>Project</li>
                <li>Blog</li>
                <li>Contact</li>
                <li><HiMagnifyingGlass /></li>
            </ul>
        </header>
    </>
  )
}

export default Header