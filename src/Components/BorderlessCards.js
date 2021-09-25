import React from 'react'
import Homemiddata from "./HomemidContent"
import RedCard from './RedCard'
import { FaPrayingHands } from "react-icons/fa";
import "./HomeTop.css"

function BorderlessCards() {
    return (
        <div class="flex flex-col w-2/3 justify-between">
            <div class="flex flex-col p-2 justify-between">
                <div class="flex flex-row ml-4 p-2 justify-between">
                    {
                        Homemiddata.map((item) =>{
                            return(
                                <div className="borderLess">
                                <div className="icons">
                                    <span>
                                        <FaPrayingHands class="h-12 w-12 border-black"/>
                                    </span>
                                    <div className="title">
                                    <h5>{item.h2}</h5>
                                    </div>
                                    <div className="expect">
                                    <h5>{item.h4}</h5>
                                    </div>
                                    <div class="w-1/4 border-t-2 border-pink-500 items-center py-2"></div>
                                    </div>
                                    <div className="paragraph">
                                    <p class="pt-16">{item.p}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
            <RedCard />
                </div>
            </div>
        </div>
    )
}

export default BorderlessCards
