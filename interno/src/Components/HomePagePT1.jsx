import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import classes from '../css/HomePage.module.css'
import SecPT3 from '../img/HomePageSecPT3Img.jpg'
import { IoCallOutline } from "react-icons/io5";



const HomePagePT1 = () => {
  return (
    <>
        <section className={classes.HomePageSecPT1}>
            <p className={classes.homeMainp1}>Let Your Home Be Unique</p>
            <p className={classes.homeChildp1}>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
            <a href="/OurProject"><button>Get Started <FaArrowRightLong className={classes.iconClass1}/></button></a> 
        </section>
        <section className={classes.HomePageSecPT2}>
            <div>
                <p className={classes.HomePageSecPT2p1}>Project Plan</p>
                <p className={classes.HomePageSecPT2p2}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <p className={classes.HomePageSecPT2p3}>Read More <FaArrowRightLong /></p>
            </div>
            <div>
                <p className={classes.HomePageSecPT2p1}>Interior Work</p>
                <p className={classes.HomePageSecPT2p2}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <p className={classes.HomePageSecPT2p3}>Read More <FaArrowRightLong /></p>
            </div>
            <div>
                <p className={classes.HomePageSecPT2p1}>Realization</p>
                <p className={classes.HomePageSecPT2p2}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <p className={classes.HomePageSecPT2p3}>Read More <FaArrowRightLong /></p>
            </div>
        </section>
        <section className={classes.HomePageSecPT3}>
            <div>
                <p className={classes.HomePageSecPT3p1}>We Create The ArtOf Stylish LivingStylishly</p>
                <p className={classes.HomePageSecPT3p2}>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
                <div className={classes.HomePageSecPT2Div1}>
                    <div className={classes.iconDivchik2}><IoCallOutline className={classes.iconClass2}/></div>
                    <div>
                        <p className={classes.HomePageSecPT3p3}>Better Call Me</p>
                        <p className={classes.HomePageSecPT3p4}>070 905 77 05</p>
                    </div>
                </div>
                <a href="/ContactUs"><button>Get Free Estimate <FaArrowRightLong className={classes.iconClass1}/></button></a> 
            </div>
            <div>
                <img src={SecPT3} alt="" />
            </div>
        </section>
    </>
  )
}

export default HomePagePT1