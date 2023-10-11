/* eslint-disable no-unused-vars */
import React from "react";
import avatar from "../../assets/avatar9.png";
import banner from "../../assets/banner.png";
import Panel from "../Panel";
import { BsCameraFill } from "react-icons/bs";

const Banner = () => {
  return (
    <Panel extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700 ">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
        <div
          className="bg-green-700 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer absolute -bottom-14 left-44"
          // onClick={() => {
          //   setShowToast2(true);
          // }}
        >
          <label htmlFor="file" className="">
            <BsCameraFill className="text-sm text-white" />
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              name="upload_file"
              // onChange={handleInputChange}
            />
          </label>
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Adela Parkson
        </h4>
        <p className="text-base font-normal text-gray-600">Démarcheur </p>
      </div>

      {/* Post followers */}
      <div className="mt-1 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            9.7K
          </p>
          <p className="text-sm font-normal text-gray-600">XXXXXXXXXX</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            434
          </p>
          <p className="text-sm font-normal text-gray-600">XXXXXXXXXXXXXX</p>
        </div>
      </div>
    </Panel>
  );
};

export default Banner;
