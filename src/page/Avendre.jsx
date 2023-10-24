import { BiChevronDown, BiSearch } from "react-icons/bi";
import Nav from "../components/Nav";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Categotydata } from "./Home";
import Card from "../components/Card";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router";
import Agence_card from "../components/Agence_card";

export const data = [
  {
    image: "1518.gif",
  },
  {
    image: "1582.gif",
  },
  {
    image: "1998560.gif",
  },
  {
    image: "2490077.gif",
  },
  {
    image: "3895374.gif",
  },
  {
    image: "3906495.gif",
  },
  {
    image: "667471.gif",
  },
];
export default function Avendre() {
  const [close, setclose] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <div className="w-full">
      <Nav />
      <div className="bg-[#F7F9FB] w-full px-4 py-8 flex flex-col  md:flex-row md:justify-around gap-10 ">
        <div className="w-full flex justify-between items-center gap-8 text-[rgb(40,71,109)]">
          <div className="relative w-full flex">
            <input
              type="text"
              className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Entrez une ville ou code postale"
              //   value={nom}
              //   onChange={(e) => {
              //     setnom(e.target.value);
              //   }}
            />
            <BiSearch className="absolute right-3 top-3 text-2xl text-[rgb(40,71,109)]" />
          </div>
          {/* <select
          className="h-12 px-1 py-2 border-1 font-semibold bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
          name="country-selector"
          // onChange={(e) => setdiscount_type(e.target.value)}
          id=""
        >
          <option selected="" value="0">
            A vendre
          </option>
          <option value="Pourcentage">A louer</option>
        </select> */}
        </div>
        <div className="w-full flex justify-between items-center gap-8 text-[rgb(40,71,109)]">
          <select
            className="h-12 px-1 py-2 border-1 font-semibold bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
            name="country-selector"
            // onChange={(e) => setdiscount_type(e.target.value)}
            id=""
          >
            <option selected="" value="0">
              Maison
            </option>
            <option value="Pourcentage">Appartement</option>
            <option value="Espece">Bureau</option>
            <option value="Espece">Commerce</option>
          </select>
          {/* <div className="relative w-full flex">
          <div className="">
            <Popover placement="bottom">
              <PopoverHandler>
                <span className="font-semibold text-lg">prix</span>
              </PopoverHandler>
              <PopoverContent>
                <span>This is a very beautiful popover, show some love.</span>
              </PopoverContent>
            </Popover>
          </div>
          <BiChevronDown className="absolute right-3 top-3 text-2xl text-[rgb(40,71,109)]" />
        </div> */}
          <Popover placement="bottom" dismiss={{ enabled: close }}>
            <PopoverHandler>
              <Button className="relative border-1 bg-transparent justify-center items-center h-12  py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 font-semibold text-lg text-[rgb(40,71,109)] text-start px-2 capitalize">
                prix
                <BiChevronDown className="absolute right-3 top-3 text-2xl text-[rgb(40,71,109)]" />
              </Button>
            </PopoverHandler>
            <PopoverContent className="mr-5">
              <div className="w-full gap-0 justify-center items-center flex flex-col">
                <div className="w-full gap-4 justify-center items-center flex">
                  <div className="w-full flex flex-col space-y-2 justify-center items-start">
                    <span>Minimum (FCFA)</span>
                    <input
                      type="number"
                      className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="0"
                      //   value={nom}
                      //   onChange={(e) => {
                      //     setnom(e.target.value);
                      //   }}
                    />
                  </div>
                  <div className="w-full flex flex-col space-y-2 justify-center items-start">
                    <span>Maximum (FCFA)</span>
                    <input
                      type="number"
                      className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="0"
                      //   value={nom}
                      //   onChange={(e) => {
                      //     setnom(e.target.value);
                      //   }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-full flex items-center justify-end mt-4"
                onClick={() => setclose(!close)}
              >
                <Button color="green">Valider</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-full px-4 flex md:px-32">
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-center items-start flex-col space-y-4 mt-4">
            <span className="text-[#1C3452] text-3xl font-semibold capitalize">
              Appartement à vendre
            </span>
            <hr className="w-full fit" />
          </div>

          <div className="w-full flex justify-center items-center gap-4 mb-4">
          <div className="w-full md:w-3/4 mt-10 ">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 family">
              {Categotydata.map((data, i) => {
                return <Card key={i} />;
              })}
            </div>
          </div>
          <div className="w-1/4 mt-10 space-y-4 partition2">
          {data.map((data, i) => (
            <Agence_card key={i} data={data} />
          ))}
        </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
