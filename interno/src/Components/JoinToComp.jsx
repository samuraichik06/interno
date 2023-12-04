import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import classes from '../css/HomePage.module.css'
import { IoCallOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const JoinToComp = () => {
  return (
    <>
        <section className={classes.HomePagePT7}>
            <p className={classes.HomePagePT7p1}>Wanna join the interno?</p>
            <p className={classes.HomePagePT7p2}>It is a long established fact  will be distracted.</p>
            <button>Contact With Us <FaArrowRightLong /></button>
        </section>
    </>
  )
}

export default JoinToComp