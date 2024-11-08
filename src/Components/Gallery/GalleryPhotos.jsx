import React ,{useState} from 'react'
import "./GalleryStyle.css"; 
import imgsData from "./imageGalleryData.json"
import FilteredButtons from "./Buttoncomp"


export default function GalleryPhotos() {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [filterPressed , setFilterPressed] = useState(0);
    var DataSetImages ;  
    DataSetImages = imgsData 
    const handleFilterSelect = (filterValue) => { 
      setFilterPressed(filterPressed + 1)
      setSelectedFilter(filterValue);
     
    };
    const getNonfiltered =()=>{
        DataSetImages = imgsData 
    }
      const filteredImage = selectedFilter ? imgsData.filter((data_key) => data_key['data-lightbox'] === selectedFilter) : imgsData
      console.log(filteredImage)
     if(filterPressed > 0 )
        DataSetImages = filteredImage 
     
     
  
  return (
    <div>
        <section className="portfolio py-5">
            <div className="container">
                <div className="justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="section-header text-center">
                            <h4 className="fw-bold fs-2 txt-fx slide-up">
                                My Gallery
                            </h4>
                            </div> 
                        </div>
                        {/* Here is the buttons which we can use them to filter the images*/}
                        <FilteredButtons onFilterSelect={handleFilterSelect} allButton={getNonfiltered}  />
                    </div>

                    <div className="grid p-0 clearfix row row-cols-2 row-cols-lg-3 row-cols-xl-4" data-aos="fade-up">
                        {DataSetImages.map((returnedImage, index)=>(
                            <div key={index} className="col mb-4 portfolio-item photography">
                                <a href={require(`../../images/${returnedImage.imgUrl}`)} data-lightbox={returnedImage['data-lightbox']} data-title={returnedImage['data-title']}
                                title={returnedImage.title}>
                                    <img src={require(`../../images/${returnedImage.imgUrl}`)} className="img-fluid rounded-4" alt="portfolio" /></a>
                            </div>
                        ))}
                   
                    </div>
                </div>
             </div>
          </section>
    </div>
  )
}
