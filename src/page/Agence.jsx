/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import { BiChevronDown, BiSearch } from "react-icons/bi";
import Nav from "../components/Nav";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Categotydata } from "./Home";
import Card from "../components/Card";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setouvre } from "../feature/TriggerSlice";
import { HiMenuAlt1 } from "react-icons/hi";
import { data } from "./Avendre";
import Agence_card from "../components/Agence_card";

export default function Agence() {
  const [close, setclose] = useState(false);
  const { pathname } = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <div>
      <Nav />

      <div className="w-full px-4 flex flex-col">
        <div className="w-full md:px-32 flex justify-center items-start flex-col space-y-4 mt-4">
          <div className="w-full flex flex-col justify-between items-center md:flex-row space-y-4 md:space-y-0">
            <div className="w-full md:w-2/4">
              <span className="text-[#1C3452] text-3xl font-semibold capitalize">
                Nos Agences
              </span>
            </div>
            <div className="relative w-full flex md:w-2/4">
              <input
                type="text"
                className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Entrez le nom d'une agence"
                //   value={nom}
                //   onChange={(e) => {
                //     setnom(e.target.value);
                //   }}
              />
              <BiSearch className="absolute right-3 top-3 text-2xl text-[rgb(40,71,109)]" />
            </div>
          </div>
          <hr className="w-full fit" />
        </div>
        <div className="w-full mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:px-32 family mb-8">
            {data.map((data, i) => {
              return <Agence_card key={i} data={data} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
