import ProductList from "./ProductList"
import React, { useEffect, useRef, useState } from "react";

// swiper
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import BrandItem from "../components/BrandItem";
import './Home.css'
import { Link } from "react-router-dom";
import ReviewList from "./ReviewList";


SwiperCore.use([Autoplay])

function Home() {

    return (
      <div id="wrap">
        <article id="box01">
        <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={{delay: 1500, disableOnInteraction: false}}
        className="mySwiper"
      >
        <SwiperSlide><Link to="/list/Product27"><img src="/images/Banner/banner01.jpg" alt="banner01"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/list/Product29"><img src="/images/Banner/banner02.jpg" alt="banner02"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/event"><img src="/images/Banner/banner03.jpg" alt="banner03"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/list/Product33"><img src="/images/Banner/banner04.jpg" alt="banner04"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/list/Product31"><img src="/images/Banner/banner05.jpg" alt="banner05"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/list/Product18"><img src="/images/Banner/banner07.jpg" alt="banner07"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/list/Product08"><img src="/images/Banner/banner08.jpg" alt="banner08"/></Link></SwiperSlide>
      </Swiper>
        </article>
        <article id="box02">
          <ProductList/>
        </article>
        <article id="box03"></article>
        <article id="box04">
          <h3>브랜드관 <span><Link to="/brand">〉</Link></span></h3>
          <BrandItem/>
        </article>
        <article id="box05">
          <h3>인스타그램 고객 후기</h3>
          <p>다른 고객 후기가 궁금 하다면?</p>
          <div className="review">
            <ReviewList/>
          </div>
        </article>
      </div>
    );
  }
  
  export default Home;
  