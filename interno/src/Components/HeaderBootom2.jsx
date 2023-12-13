import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import classes from '../css/About.module.css'
import p11 from '../img/p11.jpg'
import p1 from '../img/p1.jpg'
import p111 from '../img/p111.png'
import p22 from '../img/p22.png'
import p2 from '../img/p2.jpg'
import p222 from '../img/p222.jpg'
import p33 from '../img/p33.png'
import p3 from '../img/p3.jpg'
import p333 from '../img/p333.jpg'
import p44 from '../img/p44.png'
import p4 from '../img/p4.jpg'
import p444 from '../img/p444.jpg'





const HeaderBottom = () => {
  return (
    <>
        <section className={classes.HeaderBottomSecPT1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>About Us</p>
                <p className={classes.help2P}>Home / Service</p>
            </div>
        </section>
        <section className={classes.serviceSec1}>
            <div>
                <p className={classes.serviceSec1p1}>Project Plan</p>
                <p className={classes.serviceSec1p2}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <a href="/ServiceSingle"><p className={classes.serviceSec1p3}>Read More <FaArrowRightLong /></p></a>
            </div>
            <div>
                <p className={classes.serviceSec1p1}>Interior Work</p>
                <p className={classes.serviceSec1p2}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <a href="/ServiceSingle"><p className={classes.serviceSec1p3}>Read More <FaArrowRightLong /></p></a>
            </div>
            <div>
                <p className={classes.serviceSec1p1}>Retail Design</p>
                <p className={classes.serviceSec1p2}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <a href="/ServiceSingle"><p className={classes.serviceSec1p3}>Read More <FaArrowRightLong /></p></a>
            </div>
            <div>
                <p className={classes.serviceSec1p1}>Decoration Work</p>
                <p className={classes.serviceSec1p2}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <a href="/ServiceSingle"><p className={classes.serviceSec1p3}>Read More <FaArrowRightLong /></p></a>
            </div>
            <div>
                <p className={classes.serviceSec1p1}>Interior Work</p>
                <p className={classes.serviceSec1p2}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <a href="/ServiceSingle"><p className={classes.serviceSec1p3}>Read More <FaArrowRightLong /></p></a>
            </div>
            <div>
                <p className={classes.serviceSec1p1}>2d/3d Art Work</p>
                <p className={classes.serviceSec1p2}>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <a href="/ServiceSingle"><p className={classes.serviceSec1p3}>Read More <FaArrowRightLong /></p></a>
            </div>
        </section>
        <section className={classes.bigServiceSec}>
            <div className={classes.divP}>
                <p className={classes.pMainService}>How We Work</p>
                <p className={classes.pMainService1}>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className={classes.bigDvijeniya}>
                <div className={classes.childDvijeniya}>
                    <div className={classes.childImg}><img src={p11} alt="" className={classes.img1}/></div>
                    <div>
                        <img src={p1} alt="" className={classes.img2} /> <img src={p111} alt="" className={classes.img3} />
                        <p className={classes.childDvijeniyap1}>Concept & Details</p>
                        <p className={classes.childDvijeniyap2}>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. </p>
                    </div>
                </div>
                <div className={classes.childDvijeniya}>
                    <div>
                        <img src={p222} alt="" className={classes.img2} /> <img src={p22} alt="" className={classes.img3} />
                        <p className={classes.childDvijeniyap1}>Idea for Work</p>
                        <p className={classes.childDvijeniyap2}>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. </p>
                    </div>
                    <div className={classes.childImg}><img src={p2} alt="" className={classes.img1}/></div>
                </div>
                <div className={classes.childDvijeniya}>
                    <div className={classes.childImg}><img src={p3} alt="" className={classes.img1}/></div>
                    <div>
                        <img src={p333} alt="" className={classes.img2} /> <img src={p33} alt="" className={classes.img3} />
                        <p className={classes.childDvijeniyap1}>Design</p>
                        <p className={classes.childDvijeniyap2}>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. </p>
                    </div>
                </div>
                <div className={classes.childDvijeniya}>
                    <div>
                        <img src={p444} alt="" className={classes.img2} /> <img src={p44} alt="" className={classes.img3} />
                        <p className={classes.childDvijeniyap1}>Perfection</p>
                        <p className={classes.childDvijeniyap2}>It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. </p>
                    </div>
                    <div className={classes.childImg}><img src={p4} alt="" className={classes.img1}/></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeaderBottom