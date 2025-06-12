import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialsSlider.scss';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { TestimonialCard } from './TestimonialCard/TestimonialCard';

interface Testimonial {
  logo: string;
  text: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const TestimonialsSlider = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const duplicated = [...testimonials, ...testimonials];
	
  useEffect(() => {
    fetch('/data/testimonials.json')
      .then((res) => res.json())
      .then(setTestimonials);
  }, []);

  return (
		
    <section className="testimonials">
      <div className="testimonials__block">
        <h2 className="testimonials__title">Voices of Success with Sales Fortuna</h2>

        <div className="testimonials__slider-wrapper">
          <div className="swiper-custom-prev testimonials__nav-btn">
            <img src="/assets/icons/arrow-left.svg" alt="Previous" />
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.swiper-custom-prev',
              nextEl: '.swiper-custom-next',
            }}
            pagination={{
              el: '.testimonials__pagination',
              clickable: true,
            }}
            loop={true}
            spaceBetween={16}
            slidesPerView={3}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials__swiper"
          >
            {duplicated.map((item) => (
              <SwiperSlide key={item.name + item.company}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-custom-next testimonials__nav-btn">
            <img src="/assets/icons/arrow-right.svg" alt="Next" />
          </div>
        </div>

        <div className="testimonials__pagination" />
      </div>
    </section>
  );
};