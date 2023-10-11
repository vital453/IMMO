/* eslint-disable no-unused-vars */
import React from "react";
import { BiSearch, BiFilter, BiSolidHomeAlt2 } from "react-icons/bi";
import { BsStar, BsBookmark, BsArrowsAngleExpand } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();

  return (
    <div
      className="w-full md:w-52 h-[360px] bg-[rgb(245, 245, 245)] flex flex-col justify-start items-start mb-6 rounded-xl shadow cursor-pointer"
      onClick={() => navigate("/detail")}
    >
      <div className="h-[50%] w-full relative">
        <img
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwYXJ0ZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          // src="fn1.jpg"
          alt=""
          className="h-full w-full rounded-t-xl object-cover"
        />
        <div className="absolute top-1 p-4 flex justify-between items-center w-full ">
          <div className="px-4 py-2  backdrop-blur-xl flex justify-center items-center rounded-2xl space-x-1 got">
            <div className="text-xl text-yellow-400/75">
              <BsStar />
            </div>
            <div className="mt-1">
              <span className="text-base text-white font-semibold">4.5</span>
            </div>
          </div>
          <div className="h-10 w-10  backdrop-blur-xl flex justify-center items-center rounded-full space-x-1 got">
            <div className="text-xl text-yellow-400/75">
              <BsBookmark />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-start items-start px-3 mt-0 py-2">
        <div className="w-full truncate">
          <span className="text-neutral-800/75 text-xl font-bold">
            Nom de votre appartement{" "}
          </span>
        </div>
        <div className="w-full flex justify-start items-center truncate -ml-3 mt-2">
          <div className="text-4xl text-yellow-400/75 font-bold">
            <CiLocationOn />
          </div>
          <div className="">
            <span className="text-gray-400 text-xl">Parakou - Sinangourou</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-3 mb-1 md:space-y-0 md:gap-0">
      <div className="flex justify-center items-center">
          <span className="text-md md:text-[12px] font-bold text-neutral-800">
            1.500.000 FCFA
          </span>
          <span className="text-md md:text-[12px] text-gray-400">/mois</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="text-[18px] text-yellow-400/75">
            <BiSolidHomeAlt2 />
          </div>
          <div>
            <span className="text-[14px] font-bold text-neutral-800">45</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center px-2 py-2 gap-0">
        {/* <div className="flex justify-center items-center">
          <span className="text-[10px] font-bold text-neutral-800">
            1.500.000 FCFA
          </span>
          <span className="text-[10px] text-gray-400">/mois</span>
        </div> */}

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="text-[18px] text-yellow-400/75">
            <BsArrowsAngleExpand />
          </div>
          <div>
            <span className="text-[14px] font-bold text-neutral-800">
              1OO00 m²
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
