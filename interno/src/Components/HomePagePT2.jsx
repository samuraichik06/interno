import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import classes from '../css/HomePage.module.css'
import { IoCallOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import bioPhoto1 from '../img/BioPhoto1.jpg'
import bioPhoto2 from '../img/BioPhoto2.jpg'
import bioPhoto3 from '../img/BioPhoto3.jpg'
import sponsor1 from '../img/01.png'
import sponsor2 from '../img/02.png'
import sponsor3 from '../img/03.png'
import sponsor4 from '../img/04.png'
import sponsor5 from '../img/05.png'
import proggress1 from '../img/Proggress1.png'
import proggress2 from '../img/Proggress2.png'
import proggress3 from '../img/Proggress3.png'
import proggress4 from '../img/Proggress4.png'


const HomePagePT2 = () => {
  return (
    <>
        <section className={classes.HomePageSecPT4}>
            <p className={classes.HomePagePT4p1}>What the People Thinks About Us</p>
            <div className={classes.CardsDiv1}>
                <div className={classes.CardDiv1}>
                    <div className={classes.helpDiv1}>
                        <div className={classes.photoDiv1}>
                            <img src={bioPhoto1} alt="" className={classes.photoClass1}/>
                        </div>
                        <div className={classes.helpDiv2}>
                            <p className={classes.HomePagePT4p2}>Nattasha Mith</p>
                            <p className={classes.HomePagePT4p3}>Sydney, USA</p>
                        </div>
                    </div>
                    <p className={classes.HomePagePT4p4}>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
                </div>
                <div className={classes.CardDiv1}>
                <div className={classes.helpDiv1}>
                        <div className={classes.photoDiv1}>
                            <img src={bioPhoto2} alt="" className={classes.photoClass1}/>
                        </div>
                        <div className={classes.helpDiv2}>
                            <p className={classes.HomePagePT4p2}>Alex Dmitrysky</p>
                            <p className={classes.HomePagePT4p3}>Paris, France</p>
                        </div>
                    </div>
                    <p className={classes.HomePagePT4p4}>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
                </div>
                <div className={classes.CardDiv1}>
                <div className={classes.helpDiv1}>
                        <div className={classes.photoDiv1}>
                            <img src={bioPhoto3} alt="" className={classes.photoClass1}/>
                        </div>
                        <div className={classes.helpDiv2}>
                            <p className={classes.HomePagePT4p2}>Black Man</p>
                            <p className={classes.HomePagePT4p3}>Uganda, Africa</p>
                        </div>
                    </div>
                    <p className={classes.HomePagePT4p4}>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
                </div>
            </div>
        </section>
        <section className={classes.Sponsor}>
            <img src={sponsor1} alt="" /><img src={sponsor2} alt="" /><img src={sponsor3} alt="" /><img src={sponsor4} alt="" /><img src={sponsor5} alt="" />
        </section>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}

        <section className={classes.HomePagePT5}>
            <p className={classes.HomePagePT5p1}>Follow Our Projects</p>
            <p className={classes.HomePagePT5p2}>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            <div className={classes.CardsDiv2}>
                <div className={classes.CardDiv2}>
                    <div className={classes.photoDiv2}>
                        <img src={proggress1} alt="" className={classes.img4} />
                    </div>
                    <div className={classes.helpDiv3}>
                        <div className={classes.helpDiv4}>
                            <p className={classes.HomePagePT5p3}>Modern Kitchan</p>
                            <p className={classes.HomePagePT5p4}>Decor / Artchitecture</p>
                        </div>
                        <a href="/ProjectSingle">
                        <div className={classes.helpDiv5}>
                            <MdKeyboardArrowRight className={classes.iconClass4}/>
                        </div>                            
                        </a>

                    </div>
                </div>
                <div className={classes.CardDiv2}>
                    <div className={classes.photoDiv2}>
                        <img src={proggress2} alt="" className={classes.img1} />
                    </div>
                    <div className={classes.helpDiv3}>
                        <div className={classes.helpDiv4}>
                            <p className={classes.HomePagePT5p3}>Modern Kitchan</p>
                            <p className={classes.HomePagePT5p4}>Decor / Artchitecture</p>
                        </div>
                        <a href="/ProjectSingle">
                        <div className={classes.helpDiv5}>
                            <MdKeyboardArrowRight className={classes.iconClass4}/>
                        </div>                            
                        </a>
                    </div>
                </div>
                <div className={classes.CardDiv2}>
                    <div className={classes.photoDiv2}>
                        <img src={proggress3} alt="" className={classes.img2} />
                    </div>
                    <div className={classes.helpDiv3}>
                        <div className={classes.helpDiv4}>
                            <p className={classes.HomePagePT5p3}>Modern Kitchan</p>
                            <p className={classes.HomePagePT5p4}>Decor / Artchitecture</p>
                        </div>
                        <a href="/ProjectSingle">
                        <div className={classes.helpDiv5}>
                            <MdKeyboardArrowRight className={classes.iconClass4}/>
                        </div>                            
                        </a>
                    </div>
                </div>
                <div className={classes.CardDiv2}>
                    <div className={classes.photoDiv2}>
                        <img src={proggress4} alt="" className={classes.img3} />
                    </div>
                    <div className={classes.helpDiv3}>
                        <div className={classes.helpDiv4}>
                            <p className={classes.HomePagePT5p3}>Modern Kitchan</p>
                            <p className={classes.HomePagePT5p4}>Decor / Artchitecture</p>
                        </div>
                        <a href="/ProjectSingle">
                        <div className={classes.helpDiv5}>
                            <MdKeyboardArrowRight className={classes.iconClass4}/>
                        </div>                            
                        </a>
                    </div>
                </div>
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
    </>
  )
}

export default HomePagePT2