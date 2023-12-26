/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { data } from "autoprefixer";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setid } from "../feature/TriggerSlice";

export default function Agence_card({ data }) {
  const dispatch = useDispatch();
  return (
    <Link to={`/agence/${3}`} className="no-underline text-neutralcolors w-full h-32" onClick={()=>dispatch(setid(2))}>
    <div className="w-full h-32 bg-[rgb(255,255,255)] flex justify-between items-start rounded-xl shadow cursor-pointer px-4 py-4">
      <div className="flex flex-col justify-center items-start space-y-4 w-3/4">
        <span className="w-full truncate font-semibold text-xl">Agence Name</span>
        <span className="w-full truncate">Adresse de l'agence</span>
      </div>
      <div className="w-16 h-16 rounded-full">
        <img src={data.image} alt="" className="w-full h-full object-cover rounded-full" />
      </div>
    </div>
    </Link>
  );
}
