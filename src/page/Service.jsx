/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Nav from "../components/Nav";
import Post from "../components/post/Etape1";

export default function Service() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
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
