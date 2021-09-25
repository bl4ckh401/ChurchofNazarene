import React from 'react'
import "./About.css"
import leaders from './Data/leaders'

function LeaderShip() {
    return (
        <div className="LeaderShipMain">
            <div className="LeaderShipSub">
                <h1 className="pgTitle">LEADERSHIP</h1>
                <h3 className="pgSubT">OUR LEADERSHIP</h3>
                <div className="Leader">
                    {
                    leaders.map((data) => {
                        return(
                            <div className="Leader">
                            <div className="LeaderProf" key={data.id}>
                                <div className="LeaderImg">
                                <div className="LeaderDesc">
                                    <div className="LeaderDescIn">
                                        <h1 className="LeaderName">{data.name}</h1>
                                        <h4 className="LeaderPosition">{data.position}</h4>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default LeaderShip
