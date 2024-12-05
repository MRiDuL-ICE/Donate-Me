import React, { useRef } from "react";
import bannerimg1 from "../assets/img/girl-1039729_1920.jpg";
import bannerimg2 from "../assets/img/young-friends-with-shopping-bags-winter.jpg";
import bannerimg3 from "../assets/img/winter-family.jpg";
import bannerimg4 from "../assets/img/girl-with-sweaters.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "animate.css";

const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 mb-4 py-4 md:h-[47rem] rounded-xl shadow-lg">
      <div className="hero h-[47rem] relative rounded-xl">
        <div className="flex justify-between flex-col absolute left-0 top-40 gap-32">
          <div className="rounded-full w-[100px] h-[100px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse translate-x-[140px] top-0"></div>
          <div className="rounded-full w-[80px] h-[80px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-pulse bottom-0 translate-y-[200px]"></div>
        </div>

        <div className="absolute inset-0 md:h-full rounded-lg">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper w-full h-[45rem] object-cover rounded-md"
          >
            <SwiperSlide>
              <img
                className="rounded-lg object-cover h-[45rem] w-[80rem] mx-auto"
                src={bannerimg1}
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-lg object-cover h-[45rem] w-[80rem] mx-auto"
                src={bannerimg2}
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-lg object-cover h-[45rem] w-[80rem] mx-auto"
                src={bannerimg3}
                alt="Slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-lg object-cover h-[45rem] w-[80rem] mx-auto"
                src={bannerimg4}
                alt="Slide 4"
              />
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>

          <div className="hero-content  text-neutral-content w-[20rem] md:top-32 md:w-11/12 lg:w-2/4 bg-[#00bf63] bg-opacity-70 rounded-lg text-center  flex flex-col md:flex-row lg:flex-row justify-between gap-10 mx-auto absolute lg:top-32 top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="sm:w-72 animate__animated animate__backInLeft md:w-2/3 lg:w-2/3">
              <h1 className="mb-5 w-full text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                Warm Hearts, Warm Winter
              </h1>
              <p className="mb-5 text-white text-sm sm:text-base md:text-lg">
                This winter, join hands to support local communities in need.
                Your small act of kindness can bring warmth and hope to many.
                Together, we can make this season joyful for everyone.
              </p>
            </div>
            <div className="animate__animated animate__backInRight bg-gradient-to-br md:w-3/5  lg:w-2/5 h-[26rem]  from-blue-50 to-blue-200 p-4 py-20 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Support Local Communities
              </h2>
              <p className="text-blue-800 mb-6">
                Join us in making a difference this winter. Your contributions
                can bring warmth to those in need.
              </p>
              <div className="flex justify-center gap-4 ">
                <Link to={"/donationcampaigns"}>
                  <button className="px-4 py-2 bg-[#00bf63] text-white rounded-lg hover:bg-green-600">
                    Donate Now
                  </button>
                </Link>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col absolute gap-24 right-0 top-72">
          <div className="rounded-full w-[100px] h-[100px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse translate-x-[0px] -left-32 absolute top-0"></div>
          <div className="rounded-full w-[80px] h-[80px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-pulse translate-y-[200px]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
