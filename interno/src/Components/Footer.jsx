import React from 'react'
import classes from '../css/HomePage.module.css'
import MainLogo from '../img/MainLogo.png'
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";



const Footer = () => {
  return (
    <>
        <footer>
            <div className={classes.FooterPt1}>

                <div className={classes.childFooterPt1}>
                    <div className={classes.help1}>
                        <img src={MainLogo} alt="" />
                        <p className={classes.mainLogoP}>Interno</p>
                    </div>
                    <p className={classes.footerP1}>It is a long established fact that a reader will be distracted lookings.</p>
                    <ul className={classes.footerUlPt1}>
                        <li className={classes.footerLiPt1}><TiSocialFacebook /></li>
                        <li className={classes.footerLiPt1}><FaInstagram /></li>
                        <li className={classes.footerLiPt1}><FaLinkedinIn /></li>
                        <li className={classes.footerLiPt1}><IoLogoTwitter /></li>
                    </ul>
                </div>
                <div className={classes.childFooterPt1}>
                    <ul className={classes.footerUlPt2}>
                        <li id={classes.id1}>Pages</li>
                        <li>About Us</li>
                        <li>Our Projects</li>
                        <li>Our Team</li>
                        <li>Contact Us</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className={classes.childFooterPt1}>
                    <ul className={classes.footerUlPt2}>
                        <li id={classes.id1}>Services</li>
                        <li>Kitchan</li>
                        <li>Living Area</li>
                        <li>Bathroom</li>
                        <li>Dinning Hall</li>
                        <li>Bedroom</li>
                    </ul>
                </div>
                <div className={classes.childFooterPt1}>
                    <ul className={classes.footerUlPt2}>
                        <li id={classes.id1}>Contact</li>
                        <li>55 East Birchwood Ave. Brooklyn, New York 11201</li>
                        <li>contact@interno.com</li>
                        <li>(123) 456 - 7890</li>

                    </ul>
                </div>
            </div>
            <div className={classes.FooterPt2}>
                <p className={classes.writtenBy}>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</p>
            </div>
        </footer>
    </>
  )
}

export default Footer