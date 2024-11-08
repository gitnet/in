import React from 'react';
import "./Items.css";
import IconType from '../Svgicons';
export default function Items() {
  return (
    <>
       <section className="p-5 ">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-3">
                <div className="d-flex gap-4 align-items-start">
                    <div className="icon">
                       <IconType iconname="monitor" />
                    </div>
                    <div className="text-md-start">
                    <h5>
                        UI/UX Design
                    </h5>
                    <p className="postf">
                        At in proin consequat ut cursus venenatis sapien.
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="d-flex gap-4 align-items-start">
                    <div className="icon">
                    
                    <IconType iconname="notes" />
                    </div>
                    <div className="text-md-start">
                    <h5>
                        Illustration
                    </h5>
                    <p className="postf">
                        At in proin consequat ut cursus venenatis sapien.
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3">
                <div className="d-flex gap-4 align-items-start">
                    <div className="icon">
                        <IconType iconname="laptop" />
                    </div>
                    <div className="text-md-start">
                    <h5>
                        Graphic Design
                    </h5>
                    <p className="postf">
                        At in proin consequat ut cursus venenatis sapien.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}
