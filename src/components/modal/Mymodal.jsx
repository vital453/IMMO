/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import InputField from "../fields/InputField";
import { FcGoogle } from "react-icons/fc";

export default function Mymodal({ visible, onclose }) {
  if (!visible) return null;
  return (
    <div
      className="fixed inset-0 bg-black-color bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center w-full"
      onClick={() => onclose()}
    >
      <div className="h-10"></div>
      <div className="bg-transparent w-full h-[400px] px-2 py-2  text-neutralcolors rounded md:w-[700px] md:h-[400px]">
        {/* <div
          className="w-full flex justify-end text-2xl text-red-700 items-end"
          onClick={() => onclose()}
        >
          <AiOutlineCloseCircle />{" "}
        </div> */}
        <div className="h-full w-full">
                    <iframe
                      className="h-full w-full"
                      allowfullscreen=""
                      src="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1?controls=1"
                    ></iframe>
                  </div>
      </div>
    </div>
  );
}
