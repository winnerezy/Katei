'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AssignmentCard } from './AssignmentCard';

export const AssignmentBar = () => {

  return (
    <Swiper
    spaceBetween={30}
    slidesPerView={2}
    className='w-full space-x-4'
    >
      <SwiperSlide><AssignmentCard/></SwiperSlide>
      <SwiperSlide><AssignmentCard/></SwiperSlide>
      <SwiperSlide><AssignmentCard/></SwiperSlide>
      <SwiperSlide><AssignmentCard/></SwiperSlide>
      <SwiperSlide><AssignmentCard/></SwiperSlide>
    </Swiper>
  )
}
