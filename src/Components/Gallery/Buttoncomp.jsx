import React, { useState } from 'react'
import buttonsData from "./buttonGalleryData.json"

export default function Buttoncomp({onFilterSelect , allButton}) {
  var [Is_checked , SetIschecked] = useState(true)

  const clicknothing = (event,index,filterImages) => { 
    event.preventDefault(); 
       SetIschecked(index)
       onFilterSelect(filterImages)
       allButton(null);
     return;
  };
  return (
    <div>
          <div id="filters" className="button-group d-flex flex-wrap gap-3 justify-content-center py-5" data-aos="fade-up">
            <a href="/" key='-1' onClick={(e) => clicknothing(e,-1,null)} className={`btn btn-primary text-decoration-none text-uppercase`}>
                    All
                </a>
            {buttonsData.map((returnData , index) => (
                <a href="/" key={index} onClick={(e) => clicknothing(e,index,returnData['data-filter'])} className={`btn btn-primary text-decoration-none text-uppercase ${Is_checked===index? 'is-checked':''}`} data-filter={returnData['data-filter']}>
                    {returnData.button_txt}
                </a>
              ))}
            </div>
    </div>
  )
}
