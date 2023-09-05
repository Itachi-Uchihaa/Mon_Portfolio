import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="media-body">
            <p>
              I greatly enjoyed working with Voldi on numerous and diverse projects.
              Both on the front-end and the back-end, he possesses a wide range of
              skills that undoubtedly allow him to single-handedly manage a full-stack project.
              I emphasize that on rather complex subjects, he managed to handle them autonomously.
              Voldi is determined, organized, conscientious, and efficient.
              I can only recommend him.
            </p>

            <h6>Yannick Gamiette</h6>
            <span>Lead Developer at Wister</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="media-body">
            <p>
              I had the opportunity to work on many cross-functional topics with Voldi.
              Whether it was on infrastructure migrations, complex back-end applications,
              various front-ends, or on legacy projects as well as new ones,
              Voldi was able to quickly gain expertise in each technology to address
              issues autonomously and effectively.
              Delighted!
            </p>
            <h6>David Fisayo</h6>
            <span>CEO at Furnstore</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="media-body">
            <p>
              {"I've"} worked with Voldi on numerous projects.
              His attention to detail makes a huge difference, which is very important to me.
              {"He's"} an asset to any project!
            </p>
            <h6>Francis Kouaho</h6>
            <span>CTO at LetsGo</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="media-body">
            <p>
              Thank you, Voldi, for the work provided! Efficient, clear, and tangible results. Looking forward to the next time!
            </p>
            <h6>Erwan Boca</h6>
            <span>Consultant at Zhiliqua</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="media-body">
            <p>
              Perfect and fast work, as always.
            </p>
            <h6>Laurie Dessart</h6>
            <span>Commercial at Urban cod</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
