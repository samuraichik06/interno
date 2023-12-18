import React from 'react'
import classes from '../css/OurProject.module.css'
import contentImg1 from '../img/contentImg1.png'
import contentImg2 from '../img/contentImg2.png'
import contentImg3 from '../img/contentImg3.png'
import contentImg4 from '../img/contentImg4.png'
import contentImg5 from '../img/contentImg5.png'
import contentImg6 from '../img/contentImg6.png'
import contentImg7 from '../img/contentImg7.png'
import contentImg8 from '../img/contentImg8.png'
import { IoIosArrowForward } from "react-icons/io";

const Card = ({title , description , imgUrl}) => {
  return (
    <>
    <section className={classes.Main_content}>
        <div className={classes.child_content}>
          <img src={imgUrl} alt="" />
          <div className={classes.content_div1}>
            <div className={classes.helpDiv1}>
              <p className={classes.info1}>{title}</p>
              <p className={classes.info2}>{description}</p>
            </div>
            <div className={classes.helpDiv2}><IoIosArrowForward /></div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Card