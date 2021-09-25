import React from 'react'
import sermonData from './Data/sermonData'
import {AiOutlineArrowRight} from "react-icons/ai"
import "./homebottom.css"

function BorderedCards() {
    return (
        <div class="flex w-screen flex-row justify-center items-center">
        <div class="flex w-2/3 flex-row">
            { sermonData.map((item) => {
                return(
                    <div class="w-1/3 shadow-lg px-4 py-2 border-1 mb-6 border-black rounded-lg flex flex-col m-4">
                    <div class="w-full flex px-4">
                        <img src={item.src} alt={item.alt} class="w-full"></img>
                    </div>
                    <div class="w-full flex px-4 py-2">
                        <h2 className="Hometext2">{item.topic}</h2>
                    </div>
                    <div class="w-full flex px-4 py-2">
                        Speaker:<h2 className="Hometext3">{item.speaker}</h2>
                    </div>
                    <div class="w-full flex px-4 py-2">
                        Categories:<h2 className="Hometext3">{item.categories}</h2>
                    </div>                   
                    <div class="flex w-full mb-6 px-4 py-2">
                        <p>{item.p}</p>
                    </div>
                    <div class="flex">
                    <p className="Hometext">Read More</p><AiOutlineArrowRight class="ml-2" className="Hometext" />
                    </div>
                    </div>
                    
                )
            })
          }

        </div>
        </div>
    )
}

export default BorderedCards
