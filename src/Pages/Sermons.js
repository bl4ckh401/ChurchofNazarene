import React from 'react'
import "../Components/About.css"
import SermonMid from '../Components/SermonMid'


function Sermons() {
    return (
        <div className="Aboutus">
            <div className="Aboutusimg">
                <div className="AboutTitle">
                    <h1 class="text-white">Sermons</h1>
                </div>
                <div className="AboutSub">
                    <h3 class="text-white">Home/Sermons</h3>
                </div>
            </div>
            <SermonMid />
        </div>
    )
}

export default Sermons
