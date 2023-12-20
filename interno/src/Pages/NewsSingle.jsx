import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import classes from '../css/NewsSingle.module.css'
import { IoSearch } from "react-icons/io5";
import img1 from '../img/end11.png'
import img2 from '../img/end22.png'




const NewsSingle = () => {
  return (
    <>
    <Header />
    <section className={classes.HeaderBottomSecPT1}></section>
    <section className={classes.MainSection}>
        <section className={classes.contentSec}>
            <p className={classes.info1}>Let’s Get Solution for Building Construction Work</p>
            <img src={img1} alt="" className={classes.imgClass1} />
            <div className={classes.childDiv1}>
                <p className={classes.info2}>26 December,2022 </p>
                <p className={classes.info2}>Interior / Design / Home / Decore</p>
            </div>
            <p className={classes.info3}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
            <div className={classes.contentDiv1}>
                <p className={classes.info4}>“</p>
                <p className={classes.info5}>The details are not the details. They make the design.</p>
            </div>
            <p className={classes.info6}>Design sprints are great</p>
            <p className={classes.info7}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <p className={classes.info8}>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <p className={classes.info9}>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <p className={classes.info10}>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <img src={img2} alt="" className={classes.imgClass2} />
            <p className={classes.info11}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </section>
        <section className={classes.sideBar}>
            <div className={classes.help1}>
                <input type="text" placeholder='Search' className={classes.sideInput}/>
                <IoSearch className={classes.icon1} />
            </div>
            <p className={classes.info12}>Latest News</p>
            <div className={classes.contentDiv2}>
                <p className={classes.info13}>We Focus On Comfort And Gorgeous</p>
                <p className={classes.info14}>06/02/2020</p>
                <hr className={classes.hrClass} />
            </div>
            <div className={classes.contentDiv2}>
                <p className={classes.info13}>We Focus On Comfort And Gorgeous</p>
                <p className={classes.info14}>06/02/2020</p>
                <hr className={classes.hrClass} />
            </div>
            <div className={classes.contentDiv2}>
                <p className={classes.info13}>We Focus On Comfort And Gorgeous</p>
                <p className={classes.info14}>06/02/2020</p>
                <hr className={classes.hrClass} />
            </div>
            <p className={classes.info15}>Tags</p>
            <div className={classes.parentDiv}>
                <div className={classes.childDiv3}>Kitchen</div>
                <div className={classes.childDiv2}>Bedroom</div>
                <div className={classes.childDiv2}>Living Area</div>
                <div className={classes.childDiv2}>Building</div>
                <div className={classes.childDiv2}>Archecture</div>
                <div className={classes.childDiv2}>Bedroom</div>
            </div>
        </section>
    </section>
    <Footer />
    </>
  )
}

export default NewsSingle