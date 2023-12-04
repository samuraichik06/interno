import React from 'react'
import classes from '../css/Team.module.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import teamMember1 from '../img/teamMember1.jpg'
import teamMember2 from '../img/teamMember2.jpg'
import teamMember3 from '../img/teamMember3.png'
import teamMember4 from '../img/teamMember4.jpg'
import teamMember5 from '../img/teamMember5.jpg'
import teamMember6 from '../img/teamMember6.jpg'
import teamMember7 from '../img/teamMember7.jpg'
import teamMember8 from '../img/teamMember8.jpg'
import TeamSingle from '../Pages/TeamSingle';



const TeamMainSec = () => {
  return (
    <>
        <section className={classes.teamSec1}>
            <div className={classes.help1}>
                <p className={classes.help1P}>Our Professional</p>
                <p className={classes.help2P}>Home / Team</p>
            </div>
        </section>
        <section className={classes.teamsec2}>
            <a href="/TeamSingle">
                <div className={classes.childTeamSec2}>
                    <img src={teamMember1} alt="" className={classes.memberimg} />
                    <p className={classes.teamsec2p1}>Charlotte Levi</p>
                    <p className={classes.teamsec2p2}>Design, Australia</p>
                    <p className={classes.iconP}><FaFacebookF /><FaTwitter /></p>
                </div>            
            </a>
            <a href="/TeamSingle">
                <div className={classes.childTeamSec2}>
                    <img src={teamMember2} alt="" className={classes.memberimg} />
                    <p className={classes.teamsec2p1}>Natasha Puchkova</p>
                    <p className={classes.teamsec2p2}>Design, Australia</p>
                    <p className={classes.iconP}><FaFacebookF /><FaTwitter /></p>
                </div>            
            </a>
            <a href="/TeamSingle">
                <div className={classes.childTeamSec2}>
                    <img src={teamMember3} alt="" className={classes.memberimg} />
                    <p className={classes.teamsec2p1}>Anton Vladik</p>
                    <p className={classes.teamsec2p2}>Design, Australia</p>
                    <p className={classes.iconP}><FaFacebookF /><FaTwitter /></p>
                </div>            
            </a>
            <a href="/TeamSingle">
                <div className={classes.childTeamSec2}>
                    <img src={teamMember4} alt="" className={classes.memberimg} />
                    <p className={classes.teamsec2p1}>50 Cent</p>
                    <p className={classes.teamsec2p2}>Design, Australia</p>
                    <p className={classes.iconP}><FaFacebookF /><FaTwitter /></p>
                </div>            
            </a>
            <a href="/TeamSingle">
                <div className={classes.childTeamSec2}>
                    <img src={teamMember5} alt="" className={classes.memberimg} />
                    <p className={classes.teamsec2p1}>Slim Shady</p>
                    <p className={classes.teamsec2p2}>Design, Australia</p>
                    <p className={classes.iconP}><FaFacebookF /><FaTwitter /></p>
                </div>            
            </a>
            <a href="/TeamSingle">
                <div className={classes.childTeamSec2}>
                    <img src={teamMember6} alt="" className={classes.memberimg} />
                    <p className={classes.teamsec2p1}>Two Pack</p>
                    <p className={classes.teamsec2p2}>Design, Australia</p>
                    <p className={classes.iconP}><FaFacebookF /><FaTwitter /></p>
                </div>            
            </a>
            <a href="/TeamSingle">
                <div className={classes.childTeamSec2}>
                    <img src={teamMember7} alt="" className={classes.memberimg} />
                    <p className={classes.teamsec2p1}>Ice Cube</p>
                    <p className={classes.teamsec2p2}>Design, Australia</p>
                    <p className={classes.iconP}><FaFacebookF /><FaTwitter /></p>
                </div>            
            </a>
            <a href="/TeamSingle">
                <div className={classes.childTeamSec2}>
                    <img src={teamMember8} alt="" className={classes.memberimg} />
                    <p className={classes.teamsec2p1}>Nvp Gladov</p>
                    <p className={classes.teamsec2p2}>Design, Australia</p>
                    <p className={classes.iconP}><FaFacebookF /><FaTwitter /></p>
                </div>            
            </a>
        </section>
    </>
  )
}

export default TeamMainSec