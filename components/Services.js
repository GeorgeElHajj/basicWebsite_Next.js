"use client";
import { Data } from "@/data";
import Service from "./Service.js";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Services() {
    return (
        <div className=" m-5 p-5 border border-gray-300 rounded-lg">
            <h3 className=" text-center text-lg font-semibold bl mb-4">Services</h3>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {Data.map((service) =>  <SwiperSlide> <Service key={service.service} {...service} /></SwiperSlide>)}  
                </div>
            </Swiper>
        </div>
    );
}
