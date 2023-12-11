import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import classes from '../css/Pirceing.module.css'
import { FaArrowRight } from "react-icons/fa6";



const Pirceing = () => {
  return (
    <>
        <Header />
        <section className={classes.HeaderBottomSecPT1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>Pricing & Plan</p>
                <p className={classes.help2P}>Home / Priceing</p>
            </div>
        </section>
        <section className={classes.Pirceing_section}>
            <div className={classes.pirceing_child}>
                <p className={classes.info1}>Design advices</p>
                <div className={classes.helpDiv1}>
                    <p className={classes.info2}>$</p>
                    <p className={classes.info3}>29</p>
                </div>
                <p className={classes.info4}>/month</p>
                <hr className={classes.hr1} />
                <p className={classes.info5}>General living space advices</p>
                <p className={classes.info5}>Rennovation advices</p>
                <p className={classes.info5}>Interior design advices</p>
                <p className={classes.info5}>Furniture reorganization</p>
                <p className={classes.info5}>Up to 5 hours meetings</p>
                <button>Get Started <FaArrowRight /></button>
            </div>
            <div className={classes.pirceing_child}>
            <p className={classes.info1}>Complete interior</p>
                <div className={classes.helpDiv1}>
                    <p className={classes.info2}>$</p>
                    <p className={classes.info33}>55</p>
                </div>
                <p className={classes.info4}>/month</p>
                <hr className={classes.hr1} />
                <p className={classes.info5}>Special advices app</p>
                <p className={classes.info5}>Rennovation advices</p>
                <p className={classes.info5}>Interior design</p>
                <p className={classes.info5}>Furniture reorganization forchik</p>
                <p className={classes.info5}>Up to 5 hours meetings</p>
                <button>Get Started <FaArrowRight /></button>
            </div>
            <div className={classes.pirceing_child}>
            <p className={classes.info1}>Cola design</p>
                <div className={classes.helpDiv1}>
                    <p className={classes.info2}>$</p>
                    <p className={classes.info3}>19</p>
                </div>
                <p className={classes.info4}>/month</p>
                <hr className={classes.hr1} />
                <p className={classes.info5}>Generalchik cant design</p>
                <p className={classes.info5}>Rexilaide advices</p>
                <p className={classes.info5}>Kitchen</p>
                <p className={classes.info5}>Furniture reorganization</p>
                <p className={classes.info5}>Up to 9 hours meetings</p>
                <button>Get Started <FaArrowRight /></button>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Pirceing