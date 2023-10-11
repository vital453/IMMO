/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function Banner() {
  const [change, setchange] = useState("À lOUER");
  return (
    <div className="w-full px-3 py-4 space-y-4 family">
      <div className="w-full justify-center items-center text-center">
        <span className="text-2xl text-gray-800">Bienvenue sur Immoweb</span>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-white px-2 py-2 w-full flex justify-center items-center rounded-xl">
          <div
            className={`w-1/2 justify-center items-center px-2 py-2 ${
              change === "À lOUER" && "bg-[rgb(40,71,109)] text-white"
            } rounded-md text-center cursor-pointer`}
            onClick={() => setchange("À lOUER")}
          >
            {" "}
            À lOUER
          </div>
          <div
            className={`w-1/2 justify-center items-center px-2 py-2 ${
              change === "À Vendre" && "bg-[rgb(40,71,109)] text-white"
            } rounded-md text-center cursor-pointer`}
            onClick={() => setchange("À Vendre")}
          >
            {" "}
            À Vendre
          </div>
        </div>
        <div className="w-full rounded-xl mt-2 py-6 px-3 boxshad">
          {change === "À lOUER" ? (
            <div className="w-full flex flex-col justify-start space-y-4 items-center ">
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
              <select
                className="h-12 px-1 py-2 border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
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
              <div className="w-full flex flex-col justify-center items-start space-y-3">
                <span className="font-bold">Prix : </span>
                <div className="w-full flex justify-between items-center space-x-3">
                  <input
                    type="text"
                    className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
                    placeholder="Minimum"
                    //   value={nom}
                    //   onChange={(e) => {
                    //     setnom(e.target.value);
                    //   }}
                  />
                  <input
                    type="text"
                    className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
                    placeholder="Maximum"
                    //   value={nom}
                    //   onChange={(e) => {
                    //     setnom(e.target.value);
                    //   }}
                  />
                </div>
              </div>
              <div className="cursor-pointer hover:bg-yellow-400 px-2 py-2 w-full flex justify-center items-center rounded-md bg-yellow-500 text-white">
                Rechercher des appartement à louer
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col justify-start space-y-4 items-center ">
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
              <select
                className="h-12 px-1 py-2 border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
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
              <div className="w-full flex flex-col justify-center items-start space-y-3">
                <span className="font-bold">Prix : </span>
                <div className="w-full flex justify-between items-center space-x-3">
                  <input
                    type="text"
                    className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
                    placeholder="Minimum"
                    //   value={nom}
                    //   onChange={(e) => {
                    //     setnom(e.target.value);
                    //   }}
                  />
                  <input
                    type="text"
                    className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
                    placeholder="Maximum"
                    //   value={nom}
                    //   onChange={(e) => {
                    //     setnom(e.target.value);
                    //   }}
                  />
                </div>
              </div>
              <div className="cursor-pointer hover:bg-yellow-400 px-2 py-2 w-full flex justify-center items-center rounded-md bg-yellow-500 text-white">
                Rechercher des appartement à vendre
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
