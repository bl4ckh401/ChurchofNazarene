import React from 'react'
import "./HomeMidBottom.css"

function HomeMidBottom() {
    return (
        <div class="flex flex-row justify-between w-2/3" className="HomemidBottom">
            <div class="flex flex-row justify-between mb-3" className="HomemidBottomContent">
            <div class="flex flex-row justify-between items-stretch" className="HomemidBottomImg">
                <img class="" src="/images/zKrkiCOBJDvvNLpmUiNzQd_kq8vJzr_p.png" alt="post"></img>
            </div>
            <div class="flex flex-col justify-center px-8" className="HomemidBottomTexts">
                <h3 class="text-pink-600 px-4 py-3" className="Homemidh3">WELCOME TO SALVATION CHURCH</h3>
                <h1 class="text-black text-4xl px-4 py-3" className="Homemidh1">CONNECT, GROW AND SERVE WITH US</h1>
                <p class="text-black text-xl px-4 py-3" className="Homemidp">A small river named Duden flows by their place and supplies it with the neccesary regelia. It is a paradisematic country, in which roasted parts of sentences fly into their mouths</p>
                <p class="text-black text-xl px-4 py-6" className="Homemidp">A small river named Duden flows by their place and supplies it with the neccesary regelia. It is a paradisematic country, in which roasted parts of sentences fly into their mouths</p>
                <button class="px-4 py-4 bg-pink-600 rounded-full w-1/5" className="HomemidButton">Learn More</button>
            </div>

            </div>
        </div>
    )
}

export default HomeMidBottom
