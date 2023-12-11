import React from 'react'
import classes from '../css/ContactUs.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FaRegEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { FaArrowRight } from "react-icons/fa6";




const ContactUs = () => {
  return (
    <>
        <Header />
        <section className={classes.HeaderBottomSecPT1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>Contact Us</p>
                <p className={classes.help2P}>Home / Contact</p>
            </div>
        </section>
        <section className={classes.ContactUs_section}>
          <p className={classes.pMain}>We love meeting new people and helping them.</p>
          <div className={classes.contact_form}>
            <div className={classes.child_div1}>
            <div className={classes.child_single_div}>
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
            <div className={classes.child_div2}>
            <div>
                <TextField sx={{mr : 5 }} id="standard-basic" label="Name" variant="standard" className={classes.materialInput1}/>
                <TextField sx={{ml : 2}} id="standard-basic" label="Email" variant="standard" className={classes.materialInput1} />
              </div>
              <div>
                <TextField sx={{mr : 5 }} id="standard-basic" label="Subject" variant="standard" className={classes.materialInput1}/>
                <TextField sx={{ml : 2}} id="standard-basic" label="Phone" variant="standard" className={classes.materialInput1} />
              </div>
              <div>
                <TextField sx={{mt : 8 , pt : 10}} id="standard-basic" label="Hello Iam Intrested in.." variant="standard" className={classes.materialInput2} />
              </div>
              <div>
                <button>Send Now <FaArrowRight /></button>
              </div>
            </div>
          </div>
        </section>
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6629.775338453317!2d49.8035423597513!3d40.390341078126234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2saz!4v1701928588765!5m2!1sru!2saz" width="1200" height="500"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <Footer />
    </>
  )
}

export default ContactUs