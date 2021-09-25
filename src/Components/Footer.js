import React from 'react'
import headerData from './Data/headerData';
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";
import "./Footer.css" 

function Footer() {
    return (
        <div className="FooterMain1">
           <div className="FooterMain">
            <section class="ml-12 w-3/4 my-12 flex flex-row justify-between" >
                <container class="h-64 w-64 bg-black " className="Footer_Logo">
                </container>
                <div class="flex flex-col">
                <div>
                    <p className="heading">Quick links</p>
                    </div>
                    <div className="data">
                    {
                        headerData.map((item) => {
                            return(
                                <div class="flex">
                                <div class="flex flex-col items-center">
                                <h3 class="text-white" >{item.title}</h3>
                                </div>
                              </div>   
                            )
                        })
                    }
                    </div>
                    </div>
                <div class="flex flex-col" >
                    <h1 class="text-white p-4" className="heading">GET IN TOUCH</h1>
                    <div className="data2">
                        <span class="px-2">
                            <GoLocation/>
                        </span>
                        <p>Loren ipsum dolor sit amet, conect etur adipisching elit</p>
                    </div>
                    <div className="data2">
                        <span class="px-2">
                            <BiPhoneCall/>
                        </span>
                        <p>+254 765 524 850</p>
                    </div>
                    <div className="data2">
                        <span class="px-2">
                            <AiOutlineMail/>
                        </span>
                        <p>contact@example.com</p>
                    </div>                
                    </div>
            </section>
            <div className="copyrightMain">
            <div className="copyright">
                <AiOutlineCopyright className="copyright2" class="text-white"/><p className="copyright2" class="text-white">Copyright 2020. All right reserved</p>
            </div>
            </div>
        </div> 
        </div>
        
    )
}

export default Footer;
