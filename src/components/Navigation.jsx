/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { settrigg } from "../feature/TriggerSlice";




function Navigation({ showSidebar, setShowSidebar }) {
  const location = useLocation().pathname;
  const [modalShow, setModalShow] = useState(false);
  const trigg = useSelector((state) => state.trigger.trigg);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trigg + "trigg valeur");
  }, []);

  return (
    <>
      
      <div className="w-full h-16 bg-white shadow-md flex items-center justify-start space-x-6 px-1 nav family">
        <div
          className="bg-[#e5e5e5] shadow-sm w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setShowSidebar("left-0")}
        >
          <HiMenuAlt2 />
        </div>

        <div>
          <span className="text-4xl font-semibold">IMMO.COM</span>
        </div>
        {/* <div className="flex items-center justify-center gap-4">
          <div
            className="bg-[#e5e5e5] shadow-sm w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => {
              dispatch(settrigg(true));
            }}
          >
            <BiSearch />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full">
            <img
              src="ar.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Navigation;
