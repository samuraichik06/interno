import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AboutInput from '../Components/AboutInput'
import classes from '../css/Team.module.css'
import singleTeamImg1 from '../img/singleTeamImg1.png'
import { FaRegEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import styled from '@emotion/styled'




const TeamSingle = () => {

  const someThing = [
    {title : 'Website & Mobile App Design?' , description : 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.' , simvol : '+' },
    {title : 'How to Easy Successful Projects?' , description : 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.' , simvol : '+' },
    {title : 'International Trade Experience?' , description : 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.' , simvol : '+' },
  ]

  const [info , setInfo] = useState(false)


  const toggleInfo = () => {
    setInfo(!info)
  }
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };


  return (
    <>
        <Header />
        <section className={classes.single_team_sec}>
          <div className={classes.div_main1}>
            <img src={singleTeamImg1} alt="" className={classes.teamimg1} />
            <div className={classes.child_single_div}>
              <p className={classes.name}>John Smith</p>
              <p className={classes.prof}>Designer</p>
              <p className={classes.info1}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable.</p>
              <div className={classes.alaDiv}>
                <div className={classes.help_div}>
                  <FaRegEnvelope />
                </div>
                <p className={classes.info2}>info@yourdomain.com</p>
              </div>
              <div className={classes.alaDiv}>
                <div className={classes.help_div}>
                  <MdPhone />
                </div>
                <p className={classes.info2}>070 905 77 05</p>
              </div>
              <div className={classes.alaDiv}>
                <div className={classes.help_div}>
                  <TfiWorld />
                </div>
                <p className={classes.info2}>www.yourdomain.com</p>
              </div>
              <p className={classes.iconp2}><FaInstagram /> <FaFacebookSquare /> <FaLinkedin /> <FaTwitter /></p>
            </div>
          </div>
          <div>
            <p className={classes.info3}>Short Biography</p>
            <p className={classes.info4}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumourrandomised words which don't look even slightly believable.Embarrassing hidden in the middle of text.</p><br /><br /><p className={classes.info4}> All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.</p>
          </div>
          <div className={classes.div_main2}>
            <div className={classes.child_single_div2}>
              <p className={classes.info5}>Simplicity and Functionality</p>
              <p className={classes.info6}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.</p>
              <p className={classes.info7}>There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour</p>
              <div>
                <p className={classes.info8}>Project Design</p>
                <hr className={classes.help_div1}/>
                <hr className={classes.help_div2}/>
                <div className={classes.help_div3}></div>
              </div>
            </div>
            <div className={classes.child_single_div2}>
              <p className={classes.info9}>Qustion And Answer</p>
              <p className={classes.info10}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>


              {
                someThing.map((index) =>{title , description , simvol } =>{
                  return(
                    <div  className={info ? classes.activeDiv : classes.advanced_div2}>
                      <p className={info ? classes.openTitle : classes.info11}>{title}</p>
                      <p className={info ? classes.openDescription : classes.closeDescription}>{description}</p>
                      <button className={info ? classes.openSimvol : classes.help_div4} onClick={toggleInfo}>{simvol}</button>
                    </div>
                  )
                })
              }


            </div>
          </div>
        </section>
        <AboutInput />
        <Footer />
    </>
  )
}

export default TeamSingle