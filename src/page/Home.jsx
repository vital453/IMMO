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
            <div className="w-full flex justify-start items-center px-4 md:px-10 mb-4">
              <span className="text-2xl text-neutral-800/70 font-semibold">
                Recherche par ville à vendre
              </span>
            </div>
            <div className="w-full  px-4 md:px-10">
              <div className="flex flex-wrap justify-center items-center gap-3 family">
                {Categotydata.map((data, i) => {
                  return <Villecard />;
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
            <div className="w-full flex justify-start items-center px-4 md:px-10 mb-4">
              <span className="text-2xl text-neutral-800/70 font-semibold">
                Recherche par ville
              </span>
            </div>
            <div className="w-full  px-4 md:px-10">
              <div className="flex flex-wrap justify-center items-center gap-3 family">
                {Categotydata.map((data, i) => { 
                  return <Villecard />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-start items-center px-4 md:px-10 mb-4">
              <span className="text-2xl text-neutral-800/70 font-semibold">
                Recommander pour vous !
              </span>
            </div>
            <div className="w-full px-4 md:px-10">
              <div className="flex flex-wrap justify-center items-center gap-3 family">
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
