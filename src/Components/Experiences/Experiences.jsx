import React from 'react'
import data from "./data.json"
import "./Experiences.css"
export default function Experiences() {
  return (
    <>
        <section>
                <div className="container">
                <div className="row">
                    {data.map((masterSection,index) => ( 
                    <div key={index} className="col-lg-4 CVsection">
                        <div className={`h-100 ${masterSection.id%2 === 0? 'bg-green':'bg-yellow'}  p-4 rounded-4`}>
                            <h3>
                              {masterSection.title}
                            </h3>
                            {masterSection.items.map((childs, index) =>(  
                                <div key={index} className="py-4">
                                    <p className="text-dark-emphasis">
                                        {childs.it_date}
                                    </p>
                                    <h5>
                                        {childs.it_title}
                                    </h5>
                                    <p className="text-dark-emphasis">
                                        {childs.it_desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <br />
                    </div>
                    ))}
                  </div>
                </div>
            </section>
    </>
  )
}
