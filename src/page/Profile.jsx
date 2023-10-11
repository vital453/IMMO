/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Banner from "../components/profile/Banner";
import General from "../components/profile/General";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router";

export default function Profile() {
  const [width, setWidth] = useState(window.innerWidth);

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
        <div className="px-4 py-4 space-y-6">
          <Banner />
          <General />
          <button
            href=" "
            className=" w-full linear mt-4 flex items-center justify-center rounded-xl bg-yellow-400/75 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-yellow-400/75 active:bg-yellow-400/75 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Sauvegarder
          </button>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="family">
        <Nav />
        <div className="px-4 py-4 space-y-6">
          <Banner />
          <General />
          <button
            href=" "
            className=" w-full linear mt-4 flex items-center justify-center rounded-xl bg-yellow-400/75 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-yellow-400/75 active:bg-yellow-400/75 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Sauvegarder
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
