/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { BiSearch, BiFilter, BiSolidHomeAlt2 } from "react-icons/bi";
import { Categotydata } from "./Home";
import Card from "../components/Card";
import { useLocation } from "react-router";

export default function Historique() {
  const [width, setWidth] = useState(window.innerWidth);
  const [search, setserach] = useState("");

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  const {pathname} = useLocation();
    
  useEffect(()=>{
      window.scroll(0,0)
  },[pathname])
  window.addEventListener("resize", updateScreen);
  if (width < 500) {
    return (
      <div className="family">
        <Nav />
        <div className="px-4 py-4 space-y-6 flex justify-center flex-col">
          <div className="px-2 py-2 flex justify-around items-center space-x-3 bg-white w-full rounded-2xl">
            <div className="flex justify-start items-center w-[100%]">
              {/* <div className="text-4xl text-gray-500">
                <BiSearch />
              </div> */}
              <input
                type="text"
                className="h-full w-full border-[#7B904B] border-0  px-1 py-2 text-sm outline-none"
                placeholder="Rechercher dans votre historique..."
                onChange={(e) => setserach(e.target.value)}
                value={search}
              />
            </div>
            <div className="rounded-xl bg-yellow-400/75">
              <BiFilter className="text-4xl text-white" />
            </div>
          </div>
          <div className="w-[100%] family">
            {Categotydata.map((data, i) => {
              return <Card key={i} />;
            })}
          </div>
          <div className="h-20"></div>
        </div>
      </div>
    );
  } else {
    return <div>Home pc</div>;
  }
}
