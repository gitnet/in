import React from 'react'
import bannerImg from "../../images/banner.jpg";
import "./Banner.css";
export default function Banner() {
  return (
    <div className='bannerContainer'>
         <div className="container">
            <div className="banner rounded-4 p-5 bigBanner"
               style={{backgroundImage: `url(${bannerImg})` , backgroundSize:'cover', backgroundRepeat:'no-repeart', backgroundPosition:'center'}}>
               
                <div className="text-content text-white py-5 my-5">
                <p className="fs-4 textBanner">
                    Dev / Web Developer
                </p>
                <h1 className=' display-1'>
                    Mohammed <br /> Ismail
                </h1>
                </div>
                <div  className="row text-uppercase bg-black rounded-4 p-3 mt-5">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center gap-4">
                        <h2 className="display-2 text-light">
                            14
                        </h2>
                        <p className="text-light-emphasis justify-content-center m-0 ls-4">
                            Years of <br /> experience
                        </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center gap-4">
                        <h2 className="display-2 text-light">
                            420
                        </h2>
                        <p className="text-light-emphasis justify-content-center m-0 ls-4">
                            satisfied <br /> clients
                        </p>
                        </div>
                    </div>
    
                    <div className="col-md-4">
                        <div className="d-flex align-items-center gap-4">
                        <h2 className="display-2 text-light">
                            1500
                        </h2>
                        <p className="text-light-emphasis justify-content-center m-0 ls-4">
                            projects completed
                        </p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
     </div>
  )
}
