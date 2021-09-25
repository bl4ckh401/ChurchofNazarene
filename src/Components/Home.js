import React from 'react'
import Blog from './blog'
import HomeBottom from './HomeBottom'
import HomeMid from './HomeMid'
import HomeTop from './HomeTop'

function Home() {
    return (
        <div class="w-screen">
            <HomeTop />
            <HomeMid />
            <HomeBottom />
            <Blog />
        </div>
    )
}

export default Home
