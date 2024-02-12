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
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                scrollbar={{
                    el: '.swiper-scrollbar',
                    draggable: true,
                }}
            >
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {Data.map((service) => <SwiperSlide> <Service key={service.service} {...service} /></SwiperSlide>)}
                </div>
                <div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-10 z-10 bg-bl p-6 rounded-full shadow-md cursor-pointer"></div>
                <div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-10 z-10 bg-bl p-6 rounded-full shadow-md cursor-pointer"></div>
                <div className="swiper-pagination absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center bg-gray-400 rounded-full text-sm px-2 py-1">
                    <span className="swiper-pagination-bullet bg-black rounded-full w-6 h-6 inline-block m-1"></span>
                    <span className="swiper-pagination-bullet bg-black rounded-full w-6 h-6 inline-block m-1"></span>
                    <span className="swiper-pagination-bullet bg-black rounded-full w-6 h-6 inline-block m-1"></span>
                </div>
                <div className="swiper-scrollbar absolute bottom-0 w-full bg-gray-200 rounded-full"></div>
            </Swiper>

        </div>
    );
}