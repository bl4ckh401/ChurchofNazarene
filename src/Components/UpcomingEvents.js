import React from 'react'
import UpcomingCards from './UpcomingCards'
import "./UpcomingEvents.css"

function UpcomingEvents() {
    return (
        <div className="UpcomingEvents">
            <div class="flex w-screen py-12 flex-col justify-center items-center">
                <h2 class="text-white text-xl">UPCOMING EVENTS</h2>
                <h1 class="text-white text-3xl">UNITED IN SPIRIT</h1>
            <div class="flex w-full flex-col">
                <div class="flex w-full justify-center items-center flex-col">
                <UpcomingCards />
                </div>
                </div>
            </div>            
        </div>
    )
}

export default UpcomingEvents
