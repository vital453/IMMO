/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { BsListCheck } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import {
  AiFillDashboard,
  AiFillSetting,
  AiFillCloseCircle,
} from "react-icons/ai";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const location = useLocation().pathname;
  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <>
      <Navigation showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300 nave family`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <div>
            {/* <H6 color="gray" className="family">Evento</H6> */}
            <div>
              <span className="text-4xl font-semibold">IMMO</span>
            </div>
            <div
              className={`absolute top-2 md:hidden ${
                showSidebar === "left-0" ? "left-64" : "-left-64"
              } z-50 transition-all duration-300`}
              onClick={() => setShowSidebar("-left-64")}
            >
              <AiFillCloseCircle className="-ml-16 -mt-4 text-3xl text-neutral-800" />
            </div>
          </div>

          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none w-full gap-5">
              <Link
                className={`${
                  location === "/home"
                    ? "bg-[rgb(39,144,233)] text-white shadow text-xl shadow-[#349AEF]"
                    : "bg-transparent text-gray-700 text-xl"
                } px-8 py-2 rounded-md  mx-2 flex items-center justify-start gap-3 w-full `}
                onClick={() => setShowSidebar("-left-64")}
                to={"/home"}
              >
                <AiFillDashboard />
                <span>Accueil</span>
              </Link>

              <Link
                className={`${
                  location === "/login"
                    ? "bg-[rgb(39,144,233)] text-white shadow text-xl shadow-[#349AEF]"
                    : "bg-transparent text-gray-700 text-xl"
                } px-8 py-2 rounded-md  mx-2 flex items-center justify-start gap-3 w-full `}
                onClick={() => setShowSidebar("-left-64")}
                to={"/login"}
              >
                <FiLogIn />
                <span>Login</span>
              </Link>
              <Link
                className={`${
                  location === "/register"
                    ? "bg-[rgb(39,144,233)] text-white shadow text-xl shadow-[#349AEF]"
                    : "bg-transparent text-gray-700 text-xl"
                } px-8 py-2 rounded-md  mx-2 flex items-center justify-start gap-3 w-full `}
                onClick={() => setShowSidebar("-left-64")}
                to={"/register"}
              >
                <BsListCheck />
                <span>Register</span>
              </Link>
              <Link
                className={`${
                  location === "/profil"
                    ? "bg-[rgb(39,144,233)] text-white shadow text-xl shadow-[#349AEF]"
                    : "bg-transparent text-gray-700 text-xl"
                } px-8 py-2 rounded-md  mx-2 flex items-center justify-start gap-3 w-full `}
                onClick={() => setShowSidebar("-left-64")}
                to={"/profil"}
              >
                <MdOutlineAccountCircle />
                <span>Profile</span>
              </Link>
              <Link
                className={`${
                  location === "/statistique"
                    ? "bg-[rgb(39,144,233)] text-white shadow text-xl shadow-[#349AEF]"
                    : "bg-transparent text-gray-700 text-xl"
                } px-8 py-2 rounded-md  mx-2 flex items-center justify-start gap-3 w-full `}
                onClick={() => setShowSidebar("-left-64")}
                to={"/statistique"}
              >
                <IoStatsChartSharp />
                <span>Statistique</span>
              </Link>
              <Link
                className={`${
                  location === "/ticket"
                    ? "bg-[rgb(39,144,233)] text-white shadow text-xl shadow-[#349AEF]"
                    : "bg-transparent text-gray-700 text-xl"
                } px-8 py-2 rounded-md  mx-2 flex items-center justify-start gap-3 w-full `}
                onClick={() => setShowSidebar("-left-64")}
                to={"/ticket"}
              >
                <IoStatsChartSharp />
                <span>Ticket</span>
              </Link>
              <Link
                className={`${
                  location === "/evenement"
                    ? "bg-[rgb(39,144,233)] text-white shadow text-xl shadow-[#349AEF]"
                    : "bg-transparent text-gray-700 text-xl"
                } px-8 py-2 rounded-md  mx-2 flex items-center justify-start gap-3 w-full `}
                onClick={() => setShowSidebar("-left-64")}
                to={"/evenement"}
              >
                <IoStatsChartSharp />
                <span>Evenement</span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
