/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { TbSmartHome } from "react-icons/tb";
import { BiSearch, BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { TbBrandSocketIo } from "react-icons/tb";
import { BsSendPlusFill, BsFileText } from "react-icons/bs";
import { createElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";

export default function Nav() {
  const nav = [
    {
      link: "/home",
      icon: TbSmartHome,
      title: "Home",
    },
    {
      link: "/a_louer",
      icon: BiSearch,
      // icon: BiUser,
      title: "Rechercher",
    },
    {
      link: "/publication",
      icon: BsSendPlusFill,
      title: "Publication",
    },
    {
      link: "/historique",
      icon: BsFileText,
      title: "Historique",
    },
    // {
    //   link: "/contact",
    //   icon: MdOutlinePermContactCalendar,
    //   title: "Settings",
    // },
  ];
  const nav1 = [
    {
      link: "/home",
      title: "Acceuil",
    },
    {
      link: "/a_louer",
      title: "A louer",
    },
    {
      link: "/a_vendre",
      title: "A vendre",
    },
    {
      link: "/publication",
      title: "Publier une annonce",
    },
    // {
    //   link: "/contact",
    //   icon: MdOutlinePermContactCalendar,
    //   title: "Settings",
    // },
  ];
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  //   console.log("hash", location.hash);
  //   console.log("pathname", location.pathname);
  //   console.log("search", location.search);
  const pathname = location.pathname;
  const [showMenu, setShowMenu] = useState(true);
  const [active, setActive] = useState(0);

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  const [scroll, setscroll] = useState(false);
  const updateScroll = () => {
    // console.log("offset: "+window.pageYOffset);
    var scrollMaxY =
      window.scrollMaxY ||
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    // console.log("height: "+scrollMaxY);
    // console.log("resultats: "+(scrollMaxY-window.pageYOffset));

    if (window.pageYOffset < 50) {
      setscroll(false);
    } else {
      setscroll(true);
    }
  };

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  window.addEventListener("scroll", updateScroll);
  window.addEventListener("resize", updateScreen);
  if (width < 500) {
    return (
      <div className="w-full flex justify-center shadow shadow-[9,9,9] rounded-t-lg">
        {/* <div
          className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenuAlt2 size={34} />
        </div> */}
        <nav
          className={`fixed w-full  z-[999] flex items-center gap-[40px] bg-white px-6 py-3 backdrop-blur-md rounded-t-[50px]  text-dark_primary duration-300 ${
            showMenu ? "bottom-0 " : "bottom-[-100%]"
          }`}
        >
          {nav.map((item, i) => (
            <>
              {" "}
              <div className="flex w-full flex-col justify-center items-center space-y-1 ">
                <Link
                  key={i}
                  to={item.link}
                  onClick={() => setActive(i)}
                  className={`text-xl text-gray-500 p-2.5 rounded-full sm:cursor-pointer 
                  ${item.link === pathname && "bg-yellow-400/75 text-white"} `}
                >
                  {createElement(item.icon)}
                </Link>
                <span className="text-center text-xs text-gray-500 family">
                  {item.title}
                </span>
              </div>
            </>
          ))}
        </nav>
      </div>
    );
  } else {
    return (
      <>
        <div className={`navigation_bar ${scroll && "bg-white shadow"} family`}>
          <div className="logo">
            <Link className="no-underline liens1">
              Logo<span className="text-yellow-500"> Immobilier</span>
              {/* Logo &nbsp;<span className="text-yellow-500"> Immobilier</span> */}
            </Link>
          </div>
          <nav className="space-x-3 navigation">
            {nav1.map((item, i) => (
              <Link
                to={`${item.link}`}
                className={`no-underline liens2 ${
                  item.title === pathname &&
                  "after:bg-[rgb(61,108,169)] after:w-full after:block after:h-[2px] after:absolute after:bottom-0 after:left-0"
                }`}
                key={i}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to={"/login"}
              className="px-3 cursor-pointer py-2 no-underline rounded-xl border-1 border-[rgb(61,108,169)] flex justify-center items-center space-x-3"
            >
              <FiUser className="text-[#3d6ca9]" />
              <span className="text-[#3d6ca9]">Se connecter</span>
            </Link>
          </nav>
        </div>
        <hr className="w-full fit" />
      </>
    );
  }
}
