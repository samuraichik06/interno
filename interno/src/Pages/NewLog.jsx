import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import classes from '../css/NewLog.module.css'


const NewLog = () => {
  return (
    <>
        <Header />
        <section className={classes.HeaderBottomSecPT1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>ChangeLog</p>
                <p className={classes.help2P}>Home / ChangeLog</p>
            </div>
        </section>
        <section className={classes.littleSec}>
            <p className={classes.info1}>V.1</p>
            <p className={classes.info2}>Initial Interno Webflow Template Release</p>
        </section>
        <Footer />
    </>
  )
}

export default NewLog