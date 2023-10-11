/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, createElement } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineLocationCity } from "react-icons/md";
import { BiFilter } from "react-icons/bi";
import Nav from "../components/Nav";
import { Button } from "@material-tailwind/react";

export const categorieproduct = [
  {
    id: 0,
    title: "Informatique",
    icon: MdOutlineLocationCity,
    bg: "bg-[rgb(233,235,255)]",
    color: "text-[rgb(135,122,216)]",
  },
  {
    id: 1,
    title: "Electricité",
    icon: MdOutlineLocationCity,
    bg: "bg-[rgb(244,249,236)]",
    color: "text-[rgb(184,212,231)]",
  },
  {
    id: 2,
    title: "Télécom et réseau",
    icon: MdOutlineLocationCity,
    bg: "bg-[rgb(255,221,237)]",
    color: "text-[rgb(216,122,167)]",
  },
  {
    id: 3,
    title: "Vente de materiel",
    icon: MdOutlineLocationCity,
    bg: "bg-[rgb(236,247,249)]",
    color: "text-[rgb(122,201,216)]",
  },
];
export default function Post() {
  const [click, setclick] = useState(0);

  return (
    <div className="family">
      <Nav />
      <div className="px-4 py-4 space-y-6">
        <div className="w-full justify-center items-center family select-none">
          <div className="w-full justify-center items-center text-center mt-4 flex flex-col">
            <span className="text-2xl text-bg-neutral-900 font-bold">
              Categories d'annonces
            </span>
            {/* <Button>Button</Button> */}
          </div>
          <div className="w-full px-6 flex-wrap md:px-0 mt-10 space-y-6 md:space-y-0 md:flex md:justify-center md:items-center md:space-x-8">
            {categorieproduct.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`px-6 py-4 bg-ground2 rounded-xl flex flex-col justify-center items-center space-y-4 ${
                    data.id === click && "border-2 border-[rgb(50,88,232)]"
                  }`}
                  onClick={() => {
                    setclick(i);
                  }}
                >
                  <div
                    className={`flex h-12 w-12 rounded-full ${data.bg} text-3xl ${data.color} justify-center items-center`}
                  >
                    {/* <MdOutlineLocationCity /> */}
                    {createElement(data.icon)}
                  </div>
                  <div className="flex flex-col w-full justify-center items-center">
                    <span className="text-xl text-neutralcolors font-bold">
                      {data.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
