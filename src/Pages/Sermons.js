import React from 'react'
import "../Components/About.css"
import SermonMid from '../Components/SermonMid'


function Sermons() {
    return (
        <div className="Aboutus">
            <div className="Aboutusimg">
                <div className="AboutTitle">
                    <h1>Sermons</h1>
                </div>
                <div className="AboutSub">
                    <h3>Home/Sermons</h3>
                </div>
            </div>
            <div className="AboutMid">
            <SermonMid />
            </div>
        </div>
    )
}

export default Sermons
