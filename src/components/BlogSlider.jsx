import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { latestPost } from "../assets/dummyData/blogData";
import { bgGradientPrimary, buttonPrimary } from "../utils/StyleUtils";
import { useNavigate } from "react-router-dom";

export default function BlogSlider(props) {
  const navigate = useNavigate();
  const handlePostView = (postId) => {
    navigate("/blog-home/post/"+postId);
  }
  return (
    <Swiper
      //   spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      lazy={"true"}
      pagination={{
        type: "fraction",
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className={props.className}
    >
      {latestPost.map((post, index) => (
        <SwiperSlide
          key={index}
          className={`${bgGradientPrimary} p-2 text-custom-light-low`}
        >
          <div className="flex h-full w-full bg-custom-dark bg-opacity-30 rounded-lg overflow-hidden">
            <div className="hidden md:flex flex-col justify-center gap-5 md:w-5/12 p-5">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold">{post.title}</p>
              <p>{post.description}</p>
              <button className={`${buttonPrimary} w-44`} onClick={() => handlePostView(post.id)}>Read more</button>
            </div>

            <div
              className="md:w-7/12 flex items-end"
              style={{
                backgroundImage: `url(${post.urlToImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="md:hidden px-5 py-5 cursor-pointer w-full bg-custom-dark bg-opacity-30 backdrop-blur-sm space-y-2">
                <p 
                className="text-2xl font-bold text-custom-light-high underline "
                onClick={() => handlePostView(post.id)}
                >
                  {post.title}
                </p>
                <p className="text-custom-light-low text-sm font-medium">
                  <i className="fa-solid fa-up-right-from-square"></i>
                 &nbsp; {post.source.name}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
