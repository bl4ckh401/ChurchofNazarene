import React from 'react'
import eventData from './Data/eventData'
import {AiOutlineArrowRight} from "react-icons/ai"

function UpcomingCards() {
    return (
        <div class="flex w-screen flex-row justify-center items-center">
        <div class="flex w-2/3 flex-row">
            { eventData.map((item) => {
                return(
                    <div class="w-1/3 mb-6 rounded-lg mx-3 shadow flex flex-col">
                    <div class="w-full  flex px-4">
                        <img src={item.src} alt={item.alt} class="w-full"></img>
                    </div>
                    <div class="bg-white">
                    <div class="w-full flex px-4 py-2">
                        <h2 class="text-xl">{item.topic}</h2>
                    </div>
                    <div class="w-full flex px-4 py-2">
                        <h2 class="">{item.date}</h2>
                    </div>
                    <div class="w-full flex px-4 py-2">
                       <h2 class="">{item.venue}</h2>
                    </div>                   
                    <div class="flex w-full mb-6 px-4 py-2">
                        <p>{item.location}</p>
                    </div>
                    <div class="flex">
                    <p class="text-pink-600 pl-4 py-2">More Details</p><AiOutlineArrowRight class="text-pink-600 ml-2"/>
                    </div>
                    </div>
                    </div>
                    
                )
            })
          }
        </div>
        </div>
    )
}

export default UpcomingCards
