import React from 'react'
import classes from '../css/About.module.css'
import { IoCallOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import secAboutimg1 from '../img/AboutPT3.jpg'
import secAboutimg2 from '../img/AboutPT31.jpg'




const HeaderBottom = () => {
  return (
    <>
        <section className={classes.HeaderBottomSecPT1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>About Us</p>
                <p className={classes.help2P}>Home / About Us</p>
            </div>
        </section>
        <section className={classes.HeaderBottomSecPT2}>
            <div className={classes.help2}>
                <div className={classes.posDiv3}>
                    <p className={classes.help3P}>“</p>
                    <p className={classes.help4P}>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</p>
                    <p className={classes.help5P}>-BUNNY WILLIAMS</p>
                </div>
                <div className={classes.posDiv1}></div>
                <div className={classes.posDiv2}></div>
            </div>
        </section>
        <section className={classes.HeaderBottomSecPT3}>
            <div>
                <p className={classes.secPT3p1}>What We Do</p>
                <p className={classes.secPT3p2}>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
                <button className={classes.secPT3button1}>Our Concept <MdKeyboardArrowRight /></button>
            </div>
            <div>
                <img src={secAboutimg1} alt="" />
            </div>
            <div>
                <img src={secAboutimg2} alt="" />
            </div>
            <div>
                <p className={classes.secPT3p1}>The End Result</p>
                <p className={classes.secPT3p2}>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
                <button className={classes.secPT3button1}>Our Portfolio <MdKeyboardArrowRight /></button>
            </div>
        </section>
    </>
  )
}

export default HeaderBottom