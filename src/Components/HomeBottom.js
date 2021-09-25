import React from 'react'
import HomeSermons from './HomeSermons'
import "./homebottom.css"

function HomeBottom() {
    return (
        <div class="w-screen flex flex-col justify-center items-center mt-2 mb-8" >
            <div className="HomeBottom" >
            <div className="Textdiv" >
            <h1 class="text-5xl text-black px-4 py-2" className="ImageText">My Religion is a church that believes in Jesus, a church that loves God and People</h1>
            </div>
            </div> 
            <HomeSermons />
       </div>
    )
}

export default HomeBottom
