import Heading from "../Shared/Heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Test = () => {

    const [reviews ,setReviews]=useState([])


    useEffect(()=>{
    fetch("reviews.json")
    .then(res=>res.json())
    .then(data=>setReviews(data))
    },[])
    
    
    


    return (
        <div>
            <Heading subHeading="What Our Clients Say" Heading='TESTIMONIALS'></Heading>
        
            <Swiper navigation={true} modules={[Navigation]}>
     {reviews.map(review=><SwiperSlide key={review._id}>
        <div className="px-20 pb-20">
        <Rating className="mx-auto mb-4"
      style={{ maxWidth: 230 }}
      value={review.rating}
      readOnly
    />
            <p>{review.details}</p>
        <p className="text-3xl text-yellow-500 font-bold mt-4 text-center">{review.name}</p>
        </div>
     </SwiperSlide>)}
        
      </Swiper>
        
        </div>
    );
};

export default Test;