import React from 'react'
import "../Components/About.css"
import BigCards from '../Components/BigCards'
import LeaderShip from '../Components/LeaderShip'
import AboutMid from '../Components/AboutMid'

function About() {
    return (
        <div className="Aboutus">
            <div className="Aboutusimg">
                <div className="AboutTitle">
                    <h1>About Us</h1>
                </div>
                <div className="AboutSub">
                    <h3>Home/About Us</h3>
                </div>
            </div>
            <div className="AboutMid">
            <AboutMid />
            </div>
            <div className="BigCards">
                <BigCards />
            </div>
            <div>
                <LeaderShip />
            </div>
        </div>
    )
}

export default About
