/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Post from "../components/post/Etape1";
import { useLocation } from "react-router";

export default function Service() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  window.addEventListener("resize", updateScreen);
  if (width < 500) {
    return (
      <div className="family">
        <Nav />
        <div className="px-4 py-4 space-y-6">
          <Post />
        </div>
      </div>
    );
  } else {
    return <div>Home pc</div>;
  }
}
