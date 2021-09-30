import React from 'react'
import Blog from './blog'
import HomeBottom from './HomeBottom'
import HomeMid from './HomeMid'
import HomeTop from './HomeTop'
import UpcomingEvents from './UpcomingEvents'

function Home() {
    return (
        <div class="w-screen justify-center items-center">
            <HomeTop />
            <HomeMid />
            <HomeBottom />
            <UpcomingEvents />
            <Blog />
        </div>
    )
}

export default Home
