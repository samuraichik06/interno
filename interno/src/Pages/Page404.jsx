import React from 'react'
import classes from '../css/Page404.module.css'
import Header from '../Components/Header'
import { FaArrowRight } from "react-icons/fa6";
import HomePage from './HomePage';



const Page404 = () => {
  return (
    <>
      <Header />
      <section className={classes.errorSec}>
          <div className={classes.child_div1}>
            <p className={classes.info1}>404</p>
            <p className={classes.info2}>We are sorry, but the pageyou requested was not found</p>
            <button><a href='/'>Back to Home <FaArrowRight /></a></button>
          </div>
          <div className={classes.child_div2}>
            
          </div>
      </section>
    </>
  )
}

export default Page404