import React from 'react'
import blogData from "./Data/blogData"
import {AiOutlineArrowRight} from "react-icons/ai"
import "./homebottom.css"



function BlogCard() {
    return (
<div class="flex w-screen flex-row justify-center items-center">
        <div className="blogholder">
            { blogData.map((item) => {
                return(
                    <div className="blogpost">
                    <div className="blogimg">
                    </div>
                    <div>
                        <h2 className="blogtext2">{item.topic}</h2>
                    </div>                  
                    <div className="compdiv">
                        <p>{item.p}</p>
                    </div>
                    <div class="flex">
                    <p className="Hometext" >Read More</p><AiOutlineArrowRight className="Hometext"/>
                    </div>
                    </div>
                    
                )
            })
          }

        </div>
        </div>
    )
}

export default BlogCard
