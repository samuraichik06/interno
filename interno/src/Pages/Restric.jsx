import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import classes from '../css/Restric.module.css'
import TextField from '@mui/material/TextField';
import { IoIosArrowForward } from "react-icons/io";




const Restric = () => {
  return (
    <>
        <Header />
        <section className={classes.HeaderBottomSecPT1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>Restricted Page</p>
                <p className={classes.help2P}>Home / Restricted Page</p>
            </div>
        </section>
        <section className={classes.passSec}>
            <p className={classes.info1}>Password Protected</p>
            <p className={classes.info2}>This page is password protected. If you are the website admin, or have access to this page, please type your password below.</p>
            <TextField sx={{pt : 1}} id="standard-basic" label="Enter Your Password" variant="standard" className={classes.TextInput} />
            <button className={classes.passButton}>Submit Now <IoIosArrowForward /></button>
        </section>
        <Footer />
    </>
  )
}

export default Restric