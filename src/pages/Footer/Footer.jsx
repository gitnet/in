import React from 'react'
import logo2 from "./logo2.png"
 
import dataLinks from "../Header/Links.json";
import SocialLinks from "../../Components/Sociallinks";
 


const drawLinks = (values, index) =>{
    return(
      <SocialLinks key={index} {...values}/>
    );
  }
  
export default function Footer() {
  return (
    <div>
        <footer id="footer" className="bg-black text-white py-5">
                <div className="container-sm">
                <div className="row g-md-5 my-5">
                    <div className="col-md-4">
                    <div className="info-box">
                        <img src={logo2} className="img-fluid" alt="" />
                        <p className="py-4">
                        Subscribe to newsletter to get some updates related with branding, designs and more.
                        </p>
                        <div className="social-links">
                            {dataLinks.map((data,index)=>drawLinks(data,index))}
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="row">
                        <div className="col-6">
                        <ul className="list-unstyled">
                            <li>
                            <a className="text-decoration-none text-white" href="index.html">Home</a>
                            </li>
                            <li>
                            <a className="text-decoration-none text-white" href="/">About</a>
                            </li>
                            <li>
                            <a className="text-decoration-none text-white" href="team.html">Team</a>
                            </li>
                            <li>
                            <a className="text-decoration-none text-white" href="single-portfolio.html">Portfolio</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-6">
                        <h6>
                            <a className="text-decoration-none text-white" href="blog.html">Blog</a>
                        </h6>
                        <h6>
                            <a className="text-decoration-none text-white" href="contact.html">Contact</a>
                        </h6>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <p>
                        Just feel free to contact if you wanna collaborate with me, or simply have a conversation.
                    </p>
                    <h3>
                        <a href="mailto:contact@yourwebsite.com" className="text-white text-decoration-none">contact@yourwebsite.com</a>
                    </h3>
                    </div>
                </div>
                <div className="row">
                    <p>©2024 Jessica. Free HTML Template by Mohd.</p>
                </div>
                </div>
            </footer>
    </div>
  )
}
