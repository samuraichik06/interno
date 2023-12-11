import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import classes from '../css/Licenses.module.css'
import img1 from '../img/license1.png'
import img2 from '../img/license2.png'
import img3 from '../img/license3.png'
import img4 from '../img/license22.png'
import img5 from '../img/license222.png'
import img6 from '../img/license2222.png'

const Licenses = () => {
  return (
    <>
        <Header />
        <section className={classes.HeaderBottomSecPT1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>Licenses</p>
                <p className={classes.help2P}>Home / Licenses</p>
            </div>
        </section>
        <section className={classes.textSec}>
            <p className={classes.info1}>Photography</p>
            <p className={classes.info2}>All images used in the Interno Webflow Ecommerce Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels.</p>
        </section>
        <section className={classes.licenseSec1}>
            <div className={classes.contentDiv1}>
                <p className={classes.info3}>Unsplash</p>
                <p className={classes.info4}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.</p>
            </div>
            <div className={classes.Cards1}>
                <div className={classes.card1}><img src={img1} alt="" /></div>
                <div className={classes.card1}><img src={img2} alt="" /></div>
                <div className={classes.card1}><img src={img3} alt="" /></div>
            </div>
        </section>
        <section className={classes.licenseSec1}>
            <div className={classes.contentDiv1}>
                <p className={classes.info3}>Pexels</p>
                <p className={classes.info4}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12.</p>
            </div>
            <div className={classes.Cards1}>
                <div className={classes.card1}><img src={img4} alt="" /></div>
                <div className={classes.card1}><img src={img5} alt="" /></div>
                <div className={classes.card1}><img src={img6} alt="" /></div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Licenses