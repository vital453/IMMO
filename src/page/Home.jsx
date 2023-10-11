/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Nav from "../components/Nav";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BiSearch, BiFilter, BiSolidHomeAlt2 } from "react-icons/bi";
import { BsStar, BsBookmark, BsArrowsAngleExpand } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import Card from "../components/Card";
import { fn1, fn2, fn3, fn4, fn5, fn6, screen2 } from "../../public";
import Sidebar from "../components/Sidebar";
import Navi from "../components/Navi";
import Banner from "../components/home/Banner";
import Particle from "../components/Particle";
import { Footer } from "../components/Footer";
import Villecard from "../components/Villecard";
import Hero from "../components/Hero";
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

// data
export const Categotydata = [
  {
    icon: "aa.jpg",
    title: "Tous",
    image: fn1,
  },
  {
    icon: "ae.jpg",
    title: "Anniversaire",
    image: fn2,
  },
  {
    icon: "ar.jpg",
    title: "Atelier",
    image: fn3,
  },
  {
    icon: "at.jpg",
    title: "Baptême",
    image: fn4,
  },
  {
    icon: "ay.jpg",
    title: "Chilling",
    image: fn5,
  },
  {
    icon: "ay.jpg",
    title: "Cinéma",
    image: fn6,
  },
  {
    icon: "ay.jpg",
    title: "Colonie de vacance",
    image: screen2,
  },
];

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [search, setserach] = useState("");
  const [select, setselect] = useState("Tous");
  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);
  if (width < 500) {
    return (
      <>
        {/* <Particle /> */}
        <div className="h-full select-none">
          <Nav />
          {/* <Navi /> */}
          <Hero />
          <Banner />
          {/* <div className="h-full w-full flex flex-col justify-center items-center">
          <Navi />
          <div className="h-full flex flex-col justify-center items-center">
            <div className="h-[100%] w-full">
              <img
                src="fn2.jpg"
                alt=""
                className="h-[300px] w-full object-cover"
              />
              
            </div>
            <div className="px-2 py-2 flex justify-around items-center bg-white w-[80%] rounded-2xl -mt-7">
              <div className="flex justify-start items-center ">
                <div className="text-4xl text-gray-500">
                  <BiSearch />
                </div>
                <input
                  type="text"
                  className="h-full border-[#7B904B]  px-1 py-2 text-sm outline-none"
                  placeholder="Rechercher un appartement..."
                  onChange={(e) => setserach(e.target.value)}
                  value={search}
                />
              </div>
              <div className="rounded-xl bg-yellow-400/75">
                <BiFilter className="text-4xl text-white" />
              </div>
            </div>
          </div>
          <div className="w-[100%] select-none">
            <div className="p-2">
              <div className="w-full h-16 flex items-center justify-start scrollhori">
                {Categotydata.map((cate, i) => {
                  return (
                    <div
                      className={`${
                        cate.title === select
                          ? "bg-[rgb(251,217,80)] text-white"
                          : // ? "bg-[#35cec6] text-white"
                            "bg-[#fffbfb] text-neutral-900"
                      } px-8 py-2 rounded-md  mx-2 flex justify-center items-center`}
                      key={i}
                      onClick={() => {
                        setselect(cate.title);
                      }}
                    >
                      <span>{cate.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-[100%] flex justify-start items-center px-3">
            <span className="text-xl text-neutral-800/70 font-semibold">
              Recommander pour vous !
            </span>
          </div>

          <div className="w-[100%] horiz family">
            {Categotydata.map((data, i) => {
              return <Card />;
            })}
          </div>
          <div className="h-20"></div>
        </div> */}
          <div className="w-full">
            <div className="mx-auto max-w-7xl py-11">
              <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
                Recherche par ville
              </h2>

              <div className="mx-auto mb-0 border-b border-red-700 w-44 dark:border-gray-400"></div>
            </div>
            <div className="w-full  px-4 md:px-10">
              <div className="flex family">
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
                  // onSlideChange={handlechange}
                >
                  {Categotydata.map((data, i) => {
                    return (
                      <SwiperSlide
                        className="h-full w-full"
                        // onClick={() => {
                        //   setfullimagg(content.image);
                        //   setfullimag(true);
                        // }}
                      >
                        <div className="w-full relative mb-6 overflow-hidden rounded-xl shadow-md group">
                          <img
                            src="https://i.postimg.cc/LXRP3yN9/pexels-michael-block-3225517.jpg"
                            className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                            alt=""
                          />

                          <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                          <div>
                            <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                              <a
                                href="#"
                                className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-camera"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>

                                  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                                </svg>
                              </a>
                            </div>

                            <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                              <a
                                href=""
                                className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                              >
                                Parakou
                              </a>

                              <p className="mb-0 text-xs text-gray-300">
                                lorem ipsum
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      // <div>ab</div>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          {/* <div className="w-[100%] flex justify-start items-center px-3">
            <span className="text-xl text-neutral-800/70 font-semibold">
              Recommander pour vous !
            </span>
          </div> */}
          <div className="mx-auto max-w-7xl py-11">
            <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
              Recommander pour vous !
            </h2>

            <div className="mx-auto mb-0 border-b border-red-700 w-44 dark:border-gray-400"></div>
          </div>

          <div className="w-[100%] horiz family">
            {Categotydata.map((data, i) => {
              return <Card />;
            })}
          </div>
          <div className="h-20"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <Particle /> */}
        <Nav />
        <Hero />
        <div className="w-full flex flex-col justify-center items-center">
          {" "}
          <div className="w-full flex justify-center items-center md:w-1/2">
            <Banner />
          </div>
          <div className="w-full">
            <div className="mx-auto max-w-7xl py-11">
              {/* <span className="text-2xl text-neutral-800/70 font-semibold">
                Recherche par ville
              </span> */}
              <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
                Recherche par ville
              </h2>

              <div className="mx-auto mb-0 border-b border-red-700 w-44 dark:border-gray-400"></div>
            </div>
            <div className="w-full  px-4 md:px-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:px-32 family">
                {/* <div className="flex flex-wrap justify-center items-center gap-3 family"> */}
                {Categotydata.map((data, i) => {
                  return (
                    <div className="w-full relative mb-6 overflow-hidden rounded-md shadow-md group">
                      <img
                        src="https://i.postimg.cc/LXRP3yN9/pexels-michael-block-3225517.jpg"
                        className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                        alt=""
                      />

                      <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                      <div>
                        <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                          <a
                            href="#"
                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-camera"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>

                              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                            </svg>
                          </a>
                        </div>

                        <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                          <a
                            href=""
                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                          >
                            Parakou
                          </a>

                          <p className="mb-0 text-xs text-gray-300">
                            lorem ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                  // return <Villecard />;
                })}
              </div>
            </div>
          </div>
          {/* <section className="flex items-center bg-gray-100 font-poppins dark:bg-gray-900 ">
            <div className="container justify-center flex-1 px-4 py-4 mx-auto text-left lg:py-10 ">
              <div className="mx-auto max-w-7xl py-11">
                <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
                  Our Gallery
                </h2>

                <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>

                <div className="flex flex-wrap self-start gap-5">
                  <div className="w-full lg:w-1/5 md:w-full lg:mb-0">
                    <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                      <img
                        src="https://i.postimg.cc/k4r6XTkN/pexels-aviv-perets-3274903.jpg"
                        className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                        alt=""
                      />

                      <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                      <div>
                        <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                          <a
                            href="#"
                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-camera"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>

                              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                            </svg>
                          </a>
                        </div>

                        <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                          <a
                            href=""
                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                          >
                            Natural Scenery
                          </a>

                          <p className="mb-0 text-xs text-gray-300">
                            lorem ipsum
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-md shadow-md group">
                      <img
                        src="https://i.postimg.cc/MKXQ5fbQ/pexels-stein-egil-liland-3408744.jpg"
                        className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                        alt=""
                      />

                      <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                      <div>
                        <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                          <a
                            href="#"
                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-camera"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>

                              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                            </svg>
                          </a>
                        </div>

                        <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                          <a
                            href=""
                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                          >
                            Natural Scenery
                          </a>

                          <p className="mb-0 text-xs text-gray-300">
                            lorem ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-full lg:w-1/2 lg:mb-0">
                    <div className="relative overflow-hidden rounded-md shadow-md group">
                      <img
                        src="https://i.postimg.cc/LXRP3yN9/pexels-michael-block-3225517.jpg "
                        className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[625px] w-full transition duration-500"
                        alt=""
                      />

                      <div className="absolute inset-0 h-[620px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                      <div>
                        <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                          <a
                            href="#"
                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-camera"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>

                              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                            </svg>
                          </a>
                        </div>

                        <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                          <a
                            href=""
                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                          >
                            Natural Scenery
                          </a>

                          <p className="mb-0 text-xs text-gray-300">
                            lorem ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mb-10 lg:w-1/5 md:w-full lg:mb-0">
                    <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                      <img
                        src="https://i.postimg.cc/C1V5Vzqm/pexels-jacob-colvin-1757363.jpg"
                        className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                        alt=""
                      />

                      <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                      <div>
                        <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                          <a
                            href="#"
                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-camera"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>

                              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                            </svg>
                          </a>
                        </div>

                        <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                          <a
                            href=""
                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                          >
                            Natural Scenery
                          </a>

                          <p className="mb-0 text-xs text-gray-300">
                            lorem ipsum
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                      <img
                        src="https://i.postimg.cc/jqwg12hG/pexels-asad-photo-maldives-1591373.jpg "
                        className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                        alt=""
                      />

                      <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                      <div>
                        <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                          <a
                            href="#"
                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-camera"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>

                              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                            </svg>
                          </a>
                        </div>

                        <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                          <a
                            href=""
                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                          >
                            Natural Scenery
                          </a>

                          <p className="mb-0 text-xs text-gray-300">
                            lorem ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <div className="w-full">
            {/* <div className="w-full flex md:px-32 justify-start items-center px-4 mb-4">
              <span className="text-2xl text-neutral-800/70 font-semibold">
                Recommander pour vous !
              </span>
            </div> */}
            <div className="mx-auto max-w-7xl py-11">
              {/* <span className="text-2xl text-neutral-800/70 font-semibold">
                Recherche par ville
              </span> */}
              <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
                Recommander pour vous !
              </h2>

              <div className="mx-auto mb-0 border-b border-red-700 w-44 dark:border-gray-400"></div>
            </div>
            <div className="w-full px-4 md:px-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:px-32 family">
                {Categotydata.map((data, i) => {
                  return <Card />;
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
