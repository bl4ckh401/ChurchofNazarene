import React from 'react'
import BorderedCards from './BorderedCards'
import UpcomingEvents from './UpcomingEvents'
import "./homebottom.css"

function HomeSermons() {
    return (
        <div class="flex flex-col w-full justify-center items-center py-4 px-3" className="HomeSermons">
            <div class="flex flex-col justify-center items-center w-full">
                <h3 class="text-pink-600 text-xl" className="Hometext">OUR SERMONS</h3>
                <div class="flex">
                <h3 class="text-black text-2xl" className="Hometext4">WATCH AND LISTEN TO OUR SERMONS</h3>
            </div>
                <BorderedCards />
            </div>
            <div>
                <UpcomingEvents />
            </div>
        </div>
    )
}

export default HomeSermons
