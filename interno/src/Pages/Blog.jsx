import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import classes from '../css/Blog.module.css'
import img from '../img/endImg1.png'
import news1 from '../img/news1.png'
import news2 from '../img/news2.png'
import news3 from '../img/news3.png'
import news4 from '../img/news4.png'
import news5 from '../img/news5.png'
import news6 from '../img/news6.png'
import { IoIosArrowForward } from "react-icons/io";



const Blog = () => {

    const newsInfo = [
        {title : 'Kitchan Design' , description : 'Let’s Get Solution For Building Construction Work' , imgUrl : news1},
        {title : 'Living Design' , description : 'Low Cost Latest Invented Interior DesigningIdeas.' , imgUrl : news2},
        {title : 'Interior Design' , description : 'Best For Any Office & Business Interior Solution' , imgUrl : news3},
        {title : 'Kitchan Design' , description : 'Low Cost Latest Invented Interior DesigningIdeas.' , imgUrl : news4},
        {title : 'Interior' , description : 'Let’s Get Solution For Building Construction Work' , imgUrl : news5},
        {title : 'Living Design' , description : 'Best For Any Office & Business Interior Solution' , imgUrl : news6}
    ]

  return (
    <>
        <Header />
        <section className={classes.HeaderBottomSecPT1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>Articles & News</p>
                <p className={classes.help2P}>Home / Blog</p>
            </div>
        </section>
        <p className={classes.mainp1}>Latest Post</p>
        <section className={classes.sec1}>
            <div><img src={img} alt=""  className={classes.imgDiv1} /></div>
            <div className={classes.childDiv1}>
                <p className={classes.info1}>Low Cost Latest Invented Interior Designing Ideas</p>
                <p className={classes.info2}>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                <p className={classes.info2}>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <div className={classes.helpDiv1}>
                    <p className={classes.info3}>26 December,2022 </p>
                    <div><IoIosArrowForward /></div>
                </div>
            </div>
        </section>
        <section className={classes.articleCards}>
            {
                newsInfo.map(({title , description , imgUrl}) =>{
                    return(
                        <div className={classes.articleCard}>
                        <div className={classes.posDiv}>{title}</div>
                        <img src={imgUrl} alt="" className={classes.imgClass} />
                        <p className={classes.info4}>{description}</p>
                        <div className={classes.helpDiv2}>
                            <p className={classes.info3}>26 December,2022 </p>
                            <a href="/NewsSingle"><div><IoIosArrowForward /></div></a>
                        </div>
                    </div>
                    )
                })
            }

        </section>
        <Footer />
    </>
  )
}

export default Blog