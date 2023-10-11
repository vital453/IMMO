/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination, 
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const [width, setWidth] = useState(window.innerWidth);
  //   localStorage.setItem('admin', JSON.stringify(state.user));

  const navigate = useNavigate();
  const handlechange = async (e) => {
    if (e.activeIndex === 2) {
      try {
        localStorage.setItem("@onboarding_complete", "true");
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } catch (error) {
        console.log("status erreur", error);
      }
    }
  };
  const checkstatusonboading = async () => {
    const value = String(localStorage.getItem("@onboarding_complete"));
    console.log(value);
    if (value !== null && value === "true") {
      navigate("/home");
    }
  };
  useEffect(() => {
    checkstatusonboading();
  }, []);

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);
  if (width < 500) {
    return (
      <div className="h-screen">
        <Swiper
          pagination={{
            clickable: true,
          }}
          data-aos="fade-left"
          spaceBetween={20}
          //   loop={true}
          navigation
          grabCursor={true}
          //   autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-full w-full flex "
          onSlideChange={handlechange}
        >
          <SwiperSlide
            className="h-full w-full"
            // onClick={() => {
            //   setfullimagg(content.image);
            //   setfullimag(true);
            // }}
          >
            <Screen1 />
          </SwiperSlide>
          <SwiperSlide
            className="h-full w-full"
            // onClick={() => {
            //   setfullimagg(content.image);
            //   setfullimag(true);
            // }}
          >
            <Screen2 />
          </SwiperSlide>
          <SwiperSlide
            className="h-full w-full"
            // onClick={() => {
            //   setfullimagg(content.image);
            //   setfullimag(true);
            // }}
          >
            <Screen3 />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  } else {
    return <div>Home</div>;
  }
}

export const Screen1 = () => {
  //   const navigation = useNavigation();
  //   const checkstatusonboading = async () => {
  //     const value = await AsyncStorage.getItem("@onboarding_complete");
  //     console.log(value);
  //     if (value !== null && value === "true") {
  //       navigation.replace("home");
  //     }
  //   };
  //   useEffect(() => {
  //     checkstatusonboading();
  //   }, []);
  const [width, setWidth] = useState(window.innerWidth);

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);
  return (
    <div className="h-full flex flex-col justify-start items-center">
      <img src="fn3.jpg" alt="" className="w-full h-[60%] object-cover" />
      <div className="flex-row justify-center items-center px-6 py-4 space-y-4">
        <div>
          <span className="text-2xl text-[#555] text-center tracking-wider family ">
            Trouver vos appartement en toute scéréniter
          </span>
        </div>
        <div>
          <span className="text-sm tracking-wider text-[#777] text-justify family ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            distinctio quia obcaecati, accusantium voluptate quod quis et?
          </span>
        </div>
      </div>
    </div>
  );
};
export const Screen2 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);
  return (
    <div className="h-full flex flex-col justify-start items-center">
      <img src="fn4.jpg" alt="" className="w-full h-[60%] object-cover" />
      <div className="flex-row justify-center items-center px-6 py-4 space-y-4">
        <div>
          <span className="text-2xl text-[#555] text-center tracking-wider family ">
            Trouver vos appartement en toute scéréniter
          </span>
        </div>
        <div>
          <span
            className={`${
              width < 250 ? "text-sm" : "text-sm"
            } tracking-wider text-[#777] text-justify family `}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            distinctio quia obcaecati, accusantium voluptate quod quis et?
          </span>
        </div>
      </div>
    </div>
  );
};
export const Screen3 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);
  return (
    <div className="h-full flex flex-col justify-start items-center">
      <img src="fn5.jpg" alt="" className="w-full h-[60%] object-cover" />
      <div className="flex-row justify-center items-center px-6 py-4 space-y-4">
        <div>
          <span className="text-2xl text-[#555] text-center tracking-wider family ">
            Trouver vos appartement en toute scéréniter
          </span>
        </div>
        <div>
          <span className="text-sm tracking-wider text-[#777] text-justify family ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            distinctio quia obcaecati, accusantium voluptate quod quis et?
          </span>
        </div>
      </div>
    </div>
  );
};
