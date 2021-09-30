import React from 'react'
import { FaHeadphonesAlt } from 'react-icons/fa'
import "./HomeMidBottom.css"
import { RiDownload2Line } from "react-icons/ri";

function SermonMid() {
    return (
            <div className="HomemidBottom">
            <div className="HomemidBottomContent">
            <div className="SermonMid">
                <img className="SermonMid" src="/images/womanpraying.jpeg" alt="post"></img>
            </div>
                 <div class="flex flex-col justify-center px-8"  className="HomemidBottomTexts">
                <h3 class="text-pink-600 px-4 py-3" className="Sermonmidh3">God Wants To Do A New Thing In Your Life</h3>
                    <div className="speakers">
                        <p>Speaker:cmsmasters</p>
                       <p> Category:Faith</p>
                    </div>
                <div className="SermonmidText">
                    <p className="Homemidp">A small river named Duden flows by their place and supplies it with the neccesary regelia. It is a paradisematic country, in which roasted parts of sentences fly into their mouths</p>
                    <p className="Homemidp">A small river named Duden flows by their place and supplies it with the neccesary regelia. It is a paradisematic country, in which roasted parts of sentences fly into their mouths</p>
                </div>
                <div class="flex justify-center items-center">
                <div className="buttonDiv">
                <div class="flex">
                    <button className="SermonmidButton">Listen<span><FaHeadphonesAlt class="pl-2 h-7 w-8"/></span></button>
                </div>
                <div class="flex">
                    <button className="HomemidButtoniiii">Download<span><RiDownload2Line class="pl-1 h-7 w-8"/></span></button>
                </div>    
                </div>  
                </div>  
                </div> 

            
            </div>
        </div>
        
    )
}

export default SermonMid
