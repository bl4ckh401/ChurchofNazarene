import React from 'react'
import headerData from './Data/headerData'
import { FaSearch } from "react-icons/fa";
import "./Header.css"
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div  className="header_Top">
            <div class="flex h-fit">
            <div class="flex flex-col items-center ml-40" className="header_Logo">
            </div>
            <div class="flex ml-64" className="menu_Items">
            { headerData.map((item) =>{
                return(
              <div>
                <Link to={item.path}>
                <div >
                <h3 class="pl-3">{item.title}</h3>
                </div>
                </Link>
              </div>
            )
            })
            }           
            </div>
                <span className="search_Icon">
                <FaSearch />
                </span> 
                <button className="button">DONATE</button>
           </div>
        </div>

    )
}

export default Header
