import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import classes from '../css/ProjectSingle.module.css'


const ProjectSingle = () => {
  return (
    <>
        <Header />
        <section className={classes.HeaderBottomSecPT1}>
        </section>
            <section className={classes.content1}>
                <div className={classes.helpDiv1}>
                    <p className={classes.info3}>Client : Your client name</p>
                    <p className={classes.info3}>Category :  Interiors</p>
                    <p className={classes.info3}>Tags :  interior, Home</p>
                    <p className={classes.info3}>Date : Date 23,02, 2022</p>
                    <p className={classes.info3}>Link :  Link example.com</p>
                </div>
                <div>
                    <p className={classes.info1}>Minimal Look Bedrooms</p>
                    <p className={classes.info2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. </p>
                    <p className={classes.info2}>In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor</p>
                </div>
            </section>
        <Footer />
    </>
  )
}

export default ProjectSingle