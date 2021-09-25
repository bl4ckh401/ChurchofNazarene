import React from 'react'
import "./About.css"
import AboutData from './Data/aboutData'

function BigCards() {
    return (
        <div className="MainCard">
                {
                    AboutData.map((items) => {
                        return(
                            <div className="nada">
                            <div className="SubCard">
                            <div className="Card1">
                                <div className="CardCont">
                                    <h4 className="CardTitle">Mission</h4>
                                        <div className="Line"></div>
                                    <h1 className="CardText">{items.card1text}</h1>
                                </div>
                            </div>
                            <div className="Card2"></div>
                            </div>
                            <div className="SubCard">
                            <div className="Card2"></div>
                            <div className="Card1">
                                <div className="CardCont">
                                    <h4 className="CardTitle">Vision</h4>
                                    <div className="Line"></div>
                                <h1 className="CardText">{items.card2text}</h1>
                                </div>
                            </div>
                            </div>
                            <div className="SubCard">
                            <div className="Card1">
                                <div className="CardCont">
                                    <h4 className="CardTitle">VALUES</h4>
                                    <div className="Line"></div>
                                <h1 className="CardText">{items.card2text}</h1>
                                </div>
                            </div>
                            <div className="Card2">

                            </div>

                            </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default BigCards
