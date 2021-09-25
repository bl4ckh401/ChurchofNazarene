import React from 'react'
import BlogCard from './BlogCard'
import "./homebottom.css"

function Blog() {
    return (
        <div class="flex flex-col w-screen" className="blogMain">
            <div class="justify-center items-center flex flex-col" className="blogText">
                <h4 className="blogtitle">OUR BLOG</h4>
                <h1 className="blogsub">LATEST NEWS FROM OUR BLOG</h1>
                <div class="flex flex-row justify-center items-center">
                    <BlogCard />
                </div>
            </div>
        </div>
    )
}

export default Blog
