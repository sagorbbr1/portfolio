import React from 'react';
import './testimonial.css';
import {Data} from './Data';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


function Testimonials() {

  return (
    <section className="section testimonial container" id='testimonials'>
         <h2 className="section__title">Testimonials</h2>
        <span className='section__subtitle'>My clients say</span>

        <Swiper className="testimonial__container" 
        grabCursor={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        spaceBetween={24}
        loop={true}
        breakpoints={{
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48
          }
        }}
        >

        {Data.map(({id, image, title, description}) => {
        
          return (
            <SwiperSlide className='testimonial__card' key={id}>
       
       
             <img src={image} alt={title} className='testimonial__img' />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
         
            

            </SwiperSlide>

          );
        })}
        </Swiper>
        
      
    </section>
  )
}

export default Testimonials