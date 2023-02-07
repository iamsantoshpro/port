import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonials() {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div id="testimonials" className="section">
    <div className="background slider-carousel">
       <div className="container">
          <div id="carouselTestimonials" className="carousel slide" data-ride="carousel">

             <div className="carousel-inner" role="listbox">
             <Slider {...settings}>
                <div className="carousel-item">
                   <div className="row">
                      <div className="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                         <p className="slider-carousel__title">Antonio Anderson</p>
                         <p className="slider-carousel__caption">Project: Landin page for travel company</p>
                         <hr />
                         <p className="slider-carousel__description">Up or well must less rent read walk so be. Easy
                            sold at do hour sing spot. Any meant has cease too the decay. Since party burst am
                            it match. By or blushes between besides offices noisier as. Sending do brought winding
                            compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has
                            cease too the decay. 
                         </p>
                      </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="row">
                      <div className="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                         <p className="slider-carousel__title">Antonio Anderson</p>
                         <p className="slider-carousel__caption">Project: Landin page for travel company</p>
                         <hr />
                         <p className="slider-carousel__description">Up or well must less rent read walk so be. Easy
                            sold at do hour sing spot. Any meant has cease too the decay. Since party burst am
                            it match. By or blushes between besides offices noisier as. Sending do brought winding
                            compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has
                            cease too the decay. 
                         </p>
                      </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="row">
                      <div className="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                         <p className="slider-carousel__title">Antonio Anderson</p>
                         <p className="slider-carousel__caption">Project: Landin page for travel company</p>
                         <hr />
                         <p className="slider-carousel__description">Up or well must less rent read walk so be. Easy
                            sold at do hour sing spot. Any meant has cease too the decay. Since party burst am
                            it match. By or blushes between besides offices noisier as. Sending do brought winding
                            compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has
                            cease too the decay. 
                         </p>
                      </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="row">
                      <div className="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                         <p className="slider-carousel__title">Antonio Anderson</p>
                         <p className="slider-carousel__caption">Project: Landin page for travel company</p>
                         <hr />
                         <p className="slider-carousel__description">Up or well must less rent read walk so be. Easy
                            sold at do hour sing spot. Any meant has cease too the decay. Since party burst am
                            it match. By or blushes between besides offices noisier as. Sending do brought winding
                            compass in. Easy sold at do hour sing spot less rent read walk so be. Any meant has
                            cease too the decay. 
                         </p>
                      </div>
                   </div>
                </div>
           </Slider>
             </div>
            
             <div className="slider-carousel__circle">
                <p><i className="fa fa-quote-right" aria-hidden="true"></i></p>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}
