import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import classes from '../css/ServiceSingle.module.css'
import sponsor1 from '../img/01.png'
import sponsor2 from '../img/02.png'
import sponsor3 from '../img/03.png'
import sponsor4 from '../img/04.png'
import sponsor5 from '../img/05.png'
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";




const ServiceSingle = () => {
  return (
    <>
        <Header />
        <section className={classes.HeaderBottomSecPT1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>Service Single</p>
                <p className={classes.help2P}>Home / Service Single</p>
            </div>
        </section>
        <section className={classes.text_content1}>
            <div>
                <p className={classes.info1}>We set the trends of modern living Services.</p>
            </div>
            <div>
                <p className={classes.info2}>It is a long established fact that a reader will be distracted by the of readable content of a page</p>
                <p className={classes.info3}>when lookings at its layouts the points spriof using that it has a moreless normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine</p>
                <p className={classes.info3}>when lookings at its layouts the points  has a moreless normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
            </div>
        </section>
        <section className={classes.Sponsor}>
            <img src={sponsor1} alt="" /><img src={sponsor2} alt="" /><img src={sponsor3} alt="" /><img src={sponsor4} alt="" /><img src={sponsor5} alt="" />
        </section>
        <section className={classes.video_content}>
            <div className={classes.helpDiv1}><FaPlay /></div>
        </section>
        <section className={classes.text_content2}>
            <div className={classes.child_content1}>
                <p className={classes.info5}>Use of Interior</p>
                <p className={classes.info4}> Project on time and Latest Design.</p>
                <p className={classes.info4}> Renovations Benefit of Service</p>
                <p className={classes.info4}> We are confident about our projects.</p>
                <p className={classes.info4}> We provide high quality design services.</p>
                <p className={classes.info4}> Scientific Skills For getting a better result.</p>
            </div>
            <div className={classes.child_content1}>
                <p className={classes.info5}>Make An Art</p>
                <p className={classes.info4}> Renovations Benefit of Service</p>
                <p className={classes.info4}> Project on time and Latest Design.</p>
                <p className={classes.info4}> We provide high quality design services.</p>
                <p className={classes.info4}> Scientific Skills For getting a better result.</p>
                <p className={classes.info4}>  We are confident about our projects.</p>
            </div>
        </section>
        <section className={classes.end_content}>
            <div className={classes.img_div}></div>
            <div className={classes.content}>
                <p className={classes.info6}>We love design.That's how we got here.</p>
                <p className={classes.info7}>It is a long established fact that a reader will be distracted by the of readable content .</p>
                <button>Our Portfolio <FaArrowRightLong /></button>
            </div>
        </section>
        <section className={classes.HomePagePT6}>
            <hr className={classes.hr1} />
            <hr className={classes.hr2} />
            <hr className={classes.hr3} />
            <div>
                <p className={classes.HomePagePT6p1}>12</p>
                <p className={classes.HomePagePT6p2}>Success Project</p>
            </div>
            <div>
                <p className={classes.HomePagePT6p1}>85</p>
                <p className={classes.HomePagePT6p2}>Years Of Experiance</p>
            </div>
            <div>
                <p className={classes.HomePagePT6p1}>15</p>
                <p className={classes.HomePagePT6p2}>Active Project</p>
            </div>
            <div>
                <p className={classes.HomePagePT6p1}>95</p>
                <p className={classes.HomePagePT6p2}>Happy CUstomers</p>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default ServiceSingle