import Heading from "../Shared/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../assets/assets/home/slide1.jpg'
import slider2 from '../assets/assets/home/slide2.jpg'
import slider3 from '../assets/assets/home/slide3.jpg'
import slider4 from '../assets/assets/home/slide4.jpg'
import slider5 from '../assets/assets/home/slide5.jpg'

import bg1 from "../assets/assets/reservation/wood-grain-pattern-gray1x.png"
import bg2 from '../assets/assets/home/chef-service.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div className="mb-5">
            <Heading subHeading="From 11:00am to 10:00pm" Heading='ORDER ONLINE'></Heading>

            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
      <img src={slider4} alt="" />
      </SwiperSlide>
        <SwiperSlide>
            <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt="" />
        </SwiperSlide>
      </Swiper>

<div className="mt-28 flex items-center rounded-md" style={{backgroundImage: `url(${bg2})`, backgroundSize:'cover', height:"450px"}}>
   <div className="py-10 px-16 w-7/12 mx-auto rounded-md shadow-xl" style={{backgroundImage: `url(${bg1})`}}>
        <h1 className="text-4xl font-semibold text-center mb-4">Bistro Boss</h1>
        <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
   
   </div>
</div>

        </div>
    );
};

export default Slider;