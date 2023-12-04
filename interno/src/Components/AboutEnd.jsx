import React from 'react'
import classes from '../css/About.module.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import aboutCard1 from '../img/AboutCard1.png'
import aboutCard2 from '../img/AboutCard2.png'
import aboutCard3 from '../img/AboutCard3.png'


const AboutEnd = () => {
  return (
    <>
        <section className={classes.AbotEndSecPT1}>
            <p className={classes.mainP1}>What the People Thinks About Us</p>
            <div className={classes.Cards}>
                <div className={classes.Card}>
                    <img src={aboutCard1} alt="" />
                </div>
                <div className={classes.Card}>
                    <img src={aboutCard2} alt="" />
                </div>
                <div className={classes.Card}>
                    <p className={classes.cardp1}>Nattasha Julie Design, Australia</p>
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><FaLinkedinIn /></li>
                        <li><FaTwitter /></li>
                        <li><IoLogoInstagram /></li>
                    </ul>
                    <p className={classes.cardp2}>+1 (378) 400-1234 julie@email.com</p>
                </div>
                <div className={classes.Card}>
                    <img src={aboutCard3} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutEnd