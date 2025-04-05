import React, { useEffect, useState } from "react";
import "./testimonial.css";
import { Data } from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Testimonials() {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/get-reviews");
      const data = await res.json();
      setReviewData(data);
    };
    fetchData();
  }, []);

  console.log("hello", reviewData);

  return (
    <section className="section testimonial container" id="testimonials">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">My clients say</span>

      <Swiper
        className="testimonial__container"
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={24}
        loop={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {reviewData.map(({ _id, dp, name, review }) => {
          return (
            <SwiperSlide className="testimonial__card" key={_id}>
              <img
                src={`http://localhost:5000/uploads/${dp}`}
                alt={name}
                className="testimonial__img"
              />
              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__description">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
