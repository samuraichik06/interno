import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
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
import Card from '../Components/Card'

    const Projects = [
      {title : "Minimal Bedroom" , description : "Decor / Artchitecture" , imgUrl : contentImg1 , content : 1},
      {title : "Max Bedroom" , description : "Decor / Artchitecture" , imgUrl : contentImg2 ,content : 1},
      {title : "Minimal Classic Bedroom" , description : "Decor / Artchitecture" , imgUrl : contentImg3 , content : 1},
      {title : "Bedroom" , description : "Decor / Artchitecture" , imgUrl : contentImg4 , content : 2},
      {title : "Minimal Kitchen" , description : "Decor / Artchitecture" , imgUrl : contentImg5 , content : 2},
      {title : "Child Bedroom" , description : "Decor / Artchitecture" , imgUrl : contentImg6 , content : 2},
      {title : "Minimal Bedroom" , description : "Decor / Artchitecture" , imgUrl : contentImg7 , content : 3},
      {title : "Modern Bedroom" , description : "Decor / Artchitecture" , imgUrl : contentImg8 , content : 3}
    ]

const OurProject = (index) => {


  let [style , setStyle] = useState(false)
  const toggleStyle = (index) =>{
    setStyle(!style)
  }


const items = ['Bedroom', 'Kitchan', 'Living Area'];

const [activeIndex, setActiveIndex] = useState(null);

const handleClick = (index) => {
  setActiveIndex(index);
  console.log(index);
};

  return (

    <>
      <Header />
      <section className={classes.HeaderBottomSecPT1}>
          <div className={classes.help1}>
              <p className={classes.help1P}>Our Projects</p>
              <p className={classes.help2P}>Home / Our Projects</p>
          </div>
      </section>
{
  
    // <div className={classes.experiment}>
    //   {items.map((item, index) => (
    //     <div key={index} className={` ${index === activeIndex ? classes.tab_active : classes.tab_container}`} onClick={() => handleClick(index)}>
    //       {item}
    //     </div>
    //   ))}
    // </div>
  
}  
      <section className={classes.Main_content}>

        <div className={index === activeIndex === 1 ? classes.activeProject : classes.child_content}  onClick={() => handleClick(index)}>
          <img src={contentImg1} alt="" />
          <div className={classes.content_div1}>
            <div className={classes.helpDiv1}>
              <p className={classes.info1}>Minimal Bedroom</p>
              <p className={classes.info2}>Decor / Artchitecture</p>
            </div>
            <div className={classes.helpDiv2}><IoIosArrowForward /></div>
          </div>
        </div>
        <div className={classes.child_content}>
          <img src={contentImg2} alt="" />
          <div className={classes.content_div1}>
            <div className={classes.helpDiv1}>
              <p className={classes.info1}>Max Bedroom</p>
              <p className={classes.info2}>Decor / Artchitecture</p>
            </div>
            <div className={classes.helpDiv2}><IoIosArrowForward /></div>
          </div>
        </div>
        <div className={classes.child_content}>
          <img src={contentImg3} alt="" />
          <div className={classes.content_div1}>
            <div className={classes.helpDiv1}>
              <p className={classes.info1}>Minimal Classic Bedroom</p>
              <p className={classes.info2}>Decor / Artchitecture</p>
            </div>
            <div className={classes.helpDiv2}><IoIosArrowForward /></div>
          </div>
        </div>
        <div className={classes.child_content}>
          <img src={contentImg4} alt="" />
          <div className={classes.content_div1}>
            <div className={classes.helpDiv1}>
              <p className={classes.info1}>Modern Bedroom</p>
              <p className={classes.info2}>Decor / Artchitecture</p>
            </div>
            <div className={classes.helpDiv2}><IoIosArrowForward /></div>
          </div>
        </div>
        <div className={classes.child_content}>
          <img src={contentImg5} alt="" />
          <div className={classes.content_div1}>
            <div className={classes.helpDiv1}>
              <p className={classes.info1}>Minimal Bedroom</p>
              <p className={classes.info2}>Decor / Artchitecture</p>
            </div>
            <div className={classes.helpDiv2}><IoIosArrowForward /></div>
          </div>
        </div>
        <div className={classes.child_content}>
          <img src={contentImg6} alt="" />
          <div className={classes.content_div1}>
            <div className={classes.helpDiv1}>
              <p className={classes.info1}>Minimal Bedroom</p>
              <p className={classes.info2}>Classic Bedroom</p>
            </div>
            <div className={classes.helpDiv2}><IoIosArrowForward /></div>
          </div>
        </div>
        <div className={classes.child_content}>
          <img src={contentImg7} alt="" />
          <div className={classes.content_div1}>
            <div className={classes.helpDiv1}>
              <p className={classes.info1}>Child Bedroom</p>
              <p className={classes.info2}>Decor / Artchitecture</p>
            </div>
            <div className={classes.helpDiv2}><IoIosArrowForward /></div>
          </div>
        </div>
        <div className={classes.child_content} id={classes.id1}>
          <img src={contentImg8} alt="" />
          <div className={classes.content_div1}>
            <div className={classes.helpDiv1}>
              <p className={classes.info1}>Kitchan</p>
              <p className={classes.info2}>Decor / Artchitecture</p>
            </div>
            <div className={classes.helpDiv2}><IoIosArrowForward /></div>
          </div>
        </div>

      </section>



      <Footer />
    </>
  )
}

export default OurProject