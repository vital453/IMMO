/* eslint-disable no-unused-vars */
import { useState } from "react";
import Nav from "../components/Nav";
import Mymodal from "../components/modal/Mymodal";
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

export default function Societe() {
  const [width, setWidth] = useState(window.innerWidth);

  const [mm, setmm] = useState(false);

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);
  return (
    <div>
      <Nav />
      <div className="w-full flex flex-col justify-center items-center my-10">
        <section className="section banner px-0 relative mb-8">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="lg:col-6">
                <h1 className="banner-title">CFIM NUMERIQUE</h1>
                <p className="mt-6 text-justify">
                  Un centre de formation technique et professionnel, une
                  entreprise de prestation de services informatique,
                  audiovisuel, imprimerie et d’incubation pour les apprenants.
                </p>
                <a
                  className="bg-white rounded-xl px-6 py-3 no-underline text-neutralcolors mt-8"
                  href="#"
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  Lorem, ipsum dolor.
                </a>
              </div>
              <div className="lg:col-6">
                <img
                  className="w-full object-contain"
                  src={`${import.meta.env.VITE_BASE_URL}uploads/banner-img.png`}
                  width="603"
                  height="396"
                  alt=""
                />
              </div>
            </div>
          </div>
          {width < 500 && (
            <img
              className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
              src={`${import.meta.env.VITE_BASE_URL}uploads/banner-shape.svg`}
              alt=""
            />
          )}
        </section>

        <section className="section key-feature relative mb-20">
          {width < 500 && (
            <img
              className="absolute left-0 top-0 -z-[1] -translate-y-1/2"
              src={`${import.meta.env.VITE_BASE_URL}uploads/feature-shape.svg`}
              alt=""
            />
          )}

          <div className="container">
            <div className="row justify-between text-center lg:text-start">
              <div className="lg:col-5">
                <h2>Les solutions proposé par notre structure</h2>
              </div>
              <div className="mt-6 lg:col-5 lg:mt-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  egestas Werat viverra id et aliquet. vulputate egestas
                  sollicitudin .
                </p>
              </div>
            </div>
            <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">Live Caption</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <span className="icon mt-4">
                  <img
                    className="objec-contain"
                    src={`${
                      import.meta.env.VITE_BASE_URL
                    }uploads/feature-icon-1.svg`}
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">Smart Reply</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <span className="icon mt-4">
                  <img
                    className="objec-contain"
                    src={`${
                      import.meta.env.VITE_BASE_URL
                    }uploads/feature-icon-2.svg`}
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">Sound Amplifier</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <span className="icon mt-4">
                  <img
                    className="objec-contain"
                    src={`${
                      import.meta.env.VITE_BASE_URL
                    }uploads/feature-icon-3.svg`}
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">Gesture Navigation</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <span className="icon mt-4">
                  <img
                    className="objec-contain"
                    src={`${
                      import.meta.env.VITE_BASE_URL
                    }uploads/feature-icon-4.svg`}
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">Dark Theme</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <span className="icon mt-4">
                  <img
                    className="objec-contain"
                    src={`${
                      import.meta.env.VITE_BASE_URL
                    }uploads/feature-icon-5.svg`}
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">Privacy Controls</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <span className="icon mt-4">
                  <img
                    className="objec-contain"
                    src={`${
                      import.meta.env.VITE_BASE_URL
                    }uploads/feature-icon-6.svg`}
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">Location Controls</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <span className="icon mt-4">
                  <img
                    className="objec-contain"
                    src={`${
                      import.meta.env.VITE_BASE_URL
                    }uploads/feature-icon-7.svg`}
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">Security Updates</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <span className="icon mt-4">
                  <img
                    className="objec-contain"
                    src={`${
                      import.meta.env.VITE_BASE_URL
                    }uploads/feature-icon-8.svg`}
                    alt=""
                  />
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
                <div>
                  <h3 className="h4 text-xl lg:text-2xl">Focus Mode</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <span className="icon mt-4">
                  <img
                    className="objec-contain"
                    src={`${
                      import.meta.env.VITE_BASE_URL
                    }uploads/feature-icon-9.svg`}
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section services">
          <div className="container">
            {/* <div
              className="tab row gx-5 items-center"
              data-tab-group="integration-tab"
            >
              <div className="lg:col-7 lg:order-2">
                <div className="tab-content" data-tab-content>
                  <div className="tab-content-panel active" data-tab-panel="0">
                    <img
                      className="w-full object-contain"
                      src="images/sells-by-country.png"
                    />
                  </div>
                  <div className="tab-content-panel" data-tab-panel="1">
                    <img
                      className="w-full object-contain"
                      src="images/collaboration.png"
                    />
                  </div>
                  <div className="tab-content-panel" data-tab-panel="2">
                    <img
                      className="w-full object-contain"
                      src="images/sells-by-country.png"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
                <div className="text-container">
                  <h2 className="lg:text-4xl">
                  Empêchez les échecs d’avoir un impact sur votre réputation
                  </h2>
                  <p className="mt-4">
                  Notre plateforme vous aide à ...............
                  </p>
                  <ul className="tab-nav -ml-4 mt-8 border-b-0" data-tab-nav>
                    <li className="tab-nav-item active flex items-center justify-start mb-2" data-tab="0">
                      <img
                        className="mr-3"
                        src="images/icons/checkmark-circle.svg"
                        alt=""
                      />
                     <span> Habit building essential choose habit</span>
                    </li>
                    <li className="tab-nav-item active flex items-center justify-start mb-2" data-tab="0">
                      <img
                        className="mr-3"
                        src="images/icons/checkmark-circle.svg"
                        alt=""
                      />
                     <span> Habit building essential choose habit</span>
                    </li>
                    <li className="tab-nav-item active flex items-center justify-start mb-2" data-tab="0">
                      <img
                        className="mr-3"
                        src="images/icons/checkmark-circle.svg"
                        alt=""
                      />
                     <span> Habit building essential choose habit</span>
                    </li>
                    <li className="tab-nav-item active flex items-center justify-start mb-2" data-tab="0">
                      <img
                        className="mr-3"
                        src="images/icons/checkmark-circle.svg"
                        alt=""
                      />
                     <span> Habit building essential choose habit</span>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="row gx-5 mt-12 items-center lg:mt-0">
              {/* <div className="lg:col-7">
                <div className="relative">
                  <img
                    className="w-full object-contain"
                    src="images/collaboration.png"
                  />
                  <img
                    className="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
                    src="images/shape.svg"
                    alt=""
                  />
                </div>
              </div> */}
              <div className="mt-6 lg:col-5 lg:mt-0">
                <div className="text-container">
                  <h2 className="lg:text-4xl">
                    Empêchez les échecs d’avoir un impact sur votre réputation
                  </h2>
                  <p className="mt-4 justify-center text-justify">
                    Notre Entreprise vous aide à ...............
                  </p>
                  <ul className="mt-6 text-dark lg:-ml-4">
                    <li className="mb-2 flex items-center rounded px-4">
                      <img
                        className="mr-3"
                        src={`${
                          import.meta.env.VITE_BASE_URL
                        }uploads/checkmark-circle.svg`}
                        alt=""
                      />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam, nostrum.
                    </li>
                    <li className="mb-2 flex items-center rounded px-4">
                      <img
                        className="mr-3"
                        src={`${
                          import.meta.env.VITE_BASE_URL
                        }uploads/checkmark-circle.svg`}
                        alt=""
                      />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam, nostrum.
                    </li>
                    <li className="flex items-center rounded px-4">
                      <img
                        className="mr-3"
                        src={`${
                          import.meta.env.VITE_BASE_URL
                        }uploads/checkmark-circle.svg`}
                        alt=""
                      />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam, nostrum.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row gx-5 mt-12 items-center lg:mt-0">
              <div className="lg:col-7 lg:order-2">
                <div className="video pb-5 pr-9 mt-4">
                  <div className="video-thumbnail overflow-hidden rounded-2xl">
                    <div className="relative">
                      <img
                        className="w-full object-contain"
                        src={`${
                          import.meta.env.VITE_BASE_URL
                        }uploads/intro-thumbnail.png`}
                        alt=""
                      />
                      {mm == false && (
                        <a
                          id="play-video"
                          className="video-play-button cursor-pointer"
                          onClick={() => setmm(!mm)}
                        >
                          <span></span>
                        </a>
                      )}
                    </div>
                    {mm && <Mymodal visible={mm} onclose={() => setmm(!mm)} />}
                    {/* <button className="video-play-btn">
                      <img src="images/icons/play-icon.svg" alt="" />
                    </button> */}
                  </div>

                  {/* <img
                    className="intro-shape absolute bottom-0 right-0 -z-[1]"
                    src="images/shape.svg"
                    alt="" 
                  /> */}
                </div>
              </div>
              <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
                {/* <div className="text-container">
                  <h2 className="lg:text-4xl">
                    Accountability that works for you
                  </h2>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi egestas Werat viverra id et aliquet. vulputate egestas
                    sollicitudin .
                  </p>
                  <button className="btn btn-white mt-6">know about us</button>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="reviews">
          <div className="container">
            <div className="flex flex-col justify-center items-center">
              <div className="lg:col-6">
                <h2>Nos clients ont de belles choses à dire sur nous</h2>
              </div>
              <div className="lg:col-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  egestas Werat viverra id et aliquet. vulputate egestas
                  sollicitudin .
                </p>
              </div>
            </div>
            <div className="row mt-10">
              <div className="col-12">
                <div className="swiper reviews-carousel">
                  {width > 600 ? (
                    <div className="swiper-wrapper">
                      <Swiper
                        pagination={{
                          clickable: true,
                        }}
                        data-aos="fade-left"
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        navigation
                        grabCursor={true}
                        autoplay={{ delay: 3000 }}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="h-full w-full flex "
                        // onSlideChange={handlechange}
                      >
                        <SwiperSlide
                        // className="h-full w-full"
                        // onClick={() => {
                        //   setfullimagg(content.image);
                        //   setfullimag(true);
                        // }}
                        >
                          <div className="swiper-slide">
                            <div className="review">
                              <div className="flex justify-center items-center rounded-full w-12 h-12 review-author-avatar bggradient">
                                <img
                                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  alt=""
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                              <h4 className="mb-2">Courtney Henry</h4>
                              <p className="mb-4 text-[#666]">microsoft corp</p>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatem consequatur vero
                                vel aliquam itaque dignissimos praesentium
                                necessitatibus! Soluta, autem, voluptas
                                voluptatem voluptatibus eos eaque, odio
                                voluptates omnis ab necessitatibus dignissimos!
                                Accusamus impedit sed at libero cum quidem
                                recusandae eaque! Repellendus, molestiae eum
                                optio nulla velit doloremque doloribus quis
                                fugit qui!
                              </p>
                              <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star-white.svg`}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                        // className="h-full w-full"
                        // onClick={() => {
                        //   setfullimagg(content.image);
                        //   setfullimag(true);
                        // }}
                        >
                          <div className="swiper-slide">
                            <div className="review">
                              <div className="flex justify-center items-center rounded-full w-12 h-12 review-author-avatar bggradient">
                                <img
                                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  alt=""
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                              <h4 className="mb-2">Courtney Henry</h4>
                              <p className="mb-4 text-[#666]">microsoft corp</p>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatem consequatur vero
                                vel aliquam itaque dignissimos praesentium
                                necessitatibus! Soluta, autem, voluptas
                                voluptatem voluptatibus eos eaque, odio
                                voluptates omnis ab necessitatibus dignissimos!
                                Accusamus impedit sed at libero cum quidem
                                recusandae eaque! Repellendus, molestiae eum
                                optio nulla velit doloremque doloribus quis
                                fugit qui!
                              </p>
                              <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star-white.svg`}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                        // className="h-full w-full"
                        // onClick={() => {
                        //   setfullimagg(content.image);
                        //   setfullimag(true);
                        // }}
                        >
                          <div className="swiper-slide">
                            <div className="review">
                              <div className="flex justify-center items-center rounded-full w-12 h-12 review-author-avatar bggradient">
                                <img
                                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  alt=""
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                              <h4 className="mb-2">Courtney Henry</h4>
                              <p className="mb-4 text-[#666]">microsoft corp</p>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatem consequatur vero
                                vel aliquam itaque dignissimos praesentium
                                necessitatibus! Soluta, autem, voluptas
                                voluptatem voluptatibus eos eaque, odio
                                voluptates omnis ab necessitatibus dignissimos!
                                Accusamus impedit sed at libero cum quidem
                                recusandae eaque! Repellendus, molestiae eum
                                optio nulla velit doloremque doloribus quis
                                fugit qui!
                              </p>
                              <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star-white.svg`}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide
                        // className="h-full w-full"
                        // onClick={() => {
                        //   setfullimagg(content.image);
                        //   setfullimag(true);
                        // }}
                        >
                          <div className="swiper-slide">
                            <div className="review">
                              <div className="flex justify-center items-center rounded-full w-12 h-12 review-author-avatar bggradient">
                                <img
                                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  alt=""
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                              <h4 className="mb-2">Courtney Henry</h4>
                              <p className="mb-4 text-[#666]">microsoft corp</p>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Voluptatem consequatur vero
                                vel aliquam itaque dignissimos praesentium
                                necessitatibus! Soluta, autem, voluptas
                                voluptatem voluptatibus eos eaque, odio
                                voluptates omnis ab necessitatibus dignissimos!
                                Accusamus impedit sed at libero cum quidem
                                recusandae eaque! Repellendus, molestiae eum
                                optio nulla velit doloremque doloribus quis
                                fugit qui!
                              </p>
                              <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star.svg`}
                                  alt=""
                                />
                                <img
                                  src={`${
                                    import.meta.env.VITE_BASE_URL
                                  }uploads/star-white.svg`}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      {/* <div className="swiper-slide">
              <div className="review">
                <div className="review-author-avatar bg-gradient">
                  <img src="images/users/user-2.png" alt="" />
                </div>
                <h4 className="mb-2">Ronald Richards</h4>
                <p className="mb-4 text-[#666]">meta limited</p>
                <p>
                  Our platform helps build secure onboarding authentica
                  experiences & engage your users. We build .
                </p>
                <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                  <img src="images/icons/star.svg" alt="" />
                  <img src="images/icons/star.svg" alt="" />
                  <img src="images/icons/star.svg" alt="" />
                  <img src="images/icons/star.svg" alt="" />
                  <img src="images/icons/star-white.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="review">
                <div className="review-author-avatar bg-gradient">
                  <img src="images/users/user-6.png" alt="" />
                </div>
                <h4 className="mb-2">Bessie Cooper</h4>
                <p className="mb-4 text-[#666]">apple inc ltd</p>
                <p>
                  Our platform helps build secure onboarding authentica
                  experiences & engage your users. We build .
                </p>
                <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                  <img src="images/icons/star.svg" alt="" />
                  <img src="images/icons/star.svg" alt="" />
                  <img src="images/icons/star.svg" alt="" />
                  <img src="images/icons/star.svg" alt="" />
                  <img src="images/icons/star-white.svg" alt="" />
                </div>
              </div>
            </div> */}
                    </div>
                  ) : (
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="review">
                          <div className="flex justify-center items-center rounded-full w-12 h-12 review-author-avatar bggradient">
                            <img
                              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <h4 className="mb-2">Courtney Henry</h4>
                          <p className="mb-4 text-[#666]">microsoft corp</p>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptatem consequatur vero vel aliquam itaque
                            dignissimos praesentium necessitatibus! Soluta,
                            autem, voluptas voluptatem voluptatibus eos eaque,
                            odio voluptates omnis ab necessitatibus dignissimos!
                            Accusamus impedit sed at libero cum quidem
                            recusandae eaque! Repellendus, molestiae eum optio
                            nulla velit doloremque doloribus quis fugit qui!
                          </p>
                          <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                            <img
                              src={`${
                                import.meta.env.VITE_BASE_URL
                              }uploads/star.svg`}
                              alt=""
                            />
                            <img
                              src={`${
                                import.meta.env.VITE_BASE_URL
                              }uploads/star.svg`}
                              alt=""
                            />
                            <img
                              src={`${
                                import.meta.env.VITE_BASE_URL
                              }uploads/star.svg`}
                              alt=""
                            />
                            <img
                              src={`${
                                import.meta.env.VITE_BASE_URL
                              }uploads/star.svg`}
                              alt=""
                            />
                            <img
                              src={`${
                                import.meta.env.VITE_BASE_URL
                              }uploads/star-white.svg`}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="swiper-pagination reviews-carousel-pagination !bottom-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 xl:py-[120px]">
          <div className="container">
            <div
              className="row justify-center rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16 bggradient"
              // style={{
              //   backgroundImage:
              //     "linear-gradient(184.78deg, #fa709a 7.64%, #fee140 120.07%)",
              // }}
            >
              <div className="lg:col-11">
                <div className="row">
                  <div className="lg:col-7">
                    <h2 className="h1 text-white">
                      Aider les équipes du monde entier avec concentration
                    </h2>
                    <a
                      className="bg-white rounded-xl px-6 py-3 no-underline text-neutralcolors mt-8 mb-8"
                      href="#"
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                    >
                      Lorem, ipsum dolor.
                    </a>
                  </div>
                  <div className="mt-8 lg:col-5 lg:mt-0">
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi egestas Werat viverra id et aliquet. vulputate
                      egestas sollicitudin .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
