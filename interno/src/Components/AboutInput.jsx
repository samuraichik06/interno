import React from 'react'
import classes from '../css/About.module.css'
import TextField from '@mui/material/TextField';
import { MdKeyboardArrowRight } from "react-icons/md";



const AboutInput = () => {
  return (
    <>
        <section className={classes.aboutInput}>
            <p className={classes.mainp2}>Creative project? Let's have a productive talk.</p>
            <TextField sx={{mr : 5 , mb : 5}} id="standard-basic" label="Name" variant="standard" className={classes.materialInput1}/>
            <TextField sx={{ml : 5}} id="standard-basic" label="Email" variant="standard" className={classes.materialInput1} />
            <TextField sx={{mt : 8 , pt : 10}} id="standard-basic" label="Hello Iam Intrested in.." variant="standard" className={classes.materialInput2} />
            <button>Send Now <MdKeyboardArrowRight /></button>
        </section>
    </>
  )
}

export default AboutInput