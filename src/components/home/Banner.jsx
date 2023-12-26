/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { recupcategory } from "../../feature/categorySlice";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function Banner() {
  const navigate = useNavigate();

  const [change, setchange] = useState("A_lOUER");
  const [selectcat, setselectcat] = useState(1);
  const [search, setsearch] = useState("");
  const [prixmin, setprixmin] = useState(0);
  const [prixmax, setprixmax] = useState(0);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const get_category = () => {
    // console.log(`${process.env.baseurl}` + "valuer enviro");
    Axios.get(`${import.meta.env.VITE_BASE_URL}get_category`, {}).then(
      (response) => {
        if (response.data[0]) {
          console.log(response.data);
          dispatch(recupcategory(response.data));
          // localStorage.setItem("change_version", "non");
        }
      }
    );
  };

  const searchpage = () => {
    console.log("ici");
    if (search && selectcat && prixmin && prixmax) {
      navigate(
        `/search/${search}/${change}/${selectcat}/${prixmin}/${prixmax}`
      );
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veillez renseigner tous les champs",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  useEffect(() => {
    get_category();
  }, []);

  return (
    <div className="w-full px-3 py-4 space-y-4 family">
      {/* <div className="w-full justify-center items-center text-center">
        <span className="text-2xl text-gray-800">Bienvenue sur Immoweb</span>
      </div> */}
      <div className="mx-auto max-w-7xl py-11">
        <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
          Bienvenue sur Immo
        </h2>

        <div className="mx-auto mb-0 border-b border-red-700 w-44 dark:border-gray-400"></div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-white px-2 py-2 w-full flex justify-center items-center rounded-xl">
          <div
            className={`w-1/2 justify-center items-center px-2 py-2 ${
              change === "A_lOUER" && "bg-[rgb(40,71,109)] text-white"
            } rounded-md text-center cursor-pointer`}
            onClick={() => setchange("A_lOUER")}
          >
            {" "}
            À lOUER
          </div>
          <div
            className={`w-1/2 justify-center items-center px-2 py-2 ${
              change === "A_Vendre" && "bg-[rgb(40,71,109)] text-white"
            } rounded-md text-center cursor-pointer`}
            onClick={() => setchange("A_Vendre")}
          >
            {" "}
            À Vendre
          </div>
        </div>
        <div className="w-full rounded-xl mt-2 py-6 px-3 boxshad">
          {change === "A_LOUER" ? (
            <div className="w-full flex flex-col justify-start space-y-4 items-center ">
              <div className="relative w-full flex">
                <input
                  type="text"
                  className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Entrez une ville ou code postale"
                  value={search}
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
                <BiSearch className="absolute right-3 top-3 text-2xl text-[rgb(40,71,109)]" />
              </div>
              <select
                className="h-12 px-1 py-2 border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
                name="country-selector"
                onChange={(e) => setselectcat(e.target.value)}
                id=""
              >
                {categories.map((data, i) => {
                  return (
                    <option selected="" value={data.id} key={i}>
                      {data.nom}
                    </option>
                  );
                })}
              </select>
              <div className="w-full flex flex-col justify-center items-start space-y-3">
                <span className="font-bold">Prix : </span>
                <div className="w-full flex justify-between items-center space-x-3">
                  <input
                    type="number"
                    className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
                    placeholder="Minimum"
                    value={prixmin}
                    onChange={(e) => {
                      setprixmin(e.target.value);
                    }}
                  />
                  <input
                    type="number"
                    className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
                    placeholder="Maximum"
                    value={prixmax}
                    onChange={(e) => {
                      setprixmax(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                className="cursor-pointer hover:bg-yellow-400 px-2 py-2 w-full flex justify-center items-center rounded-md bg-yellow-500 text-white"
                onClick={() =>
                  navigate(
                    `/search/${search}/${change}/${selectcat}/${prixmin}/${prixmax}`
                  )
                }
                // onClick={(e) => searchpage()}
              >
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
                  value={search}
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
                <BiSearch className="absolute right-3 top-3 text-2xl text-[rgb(40,71,109)]" />
              </div>
              <select
                className="h-12 px-1 py-2 border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
                name="country-selector"
                onChange={(e) => setselectcat(e.target.value)}
                id=""
              >
                {categories.map((data, i) => {
                  return (
                    <option selected="" value={data.id} key={i}>
                      {data.nom}
                    </option>
                  );
                })}
              </select>
              <div className="w-full flex flex-col justify-center items-start space-y-3">
                <span className="font-bold">Prix : </span>
                <div className="w-full flex justify-between items-center space-x-3">
                  <input
                    type="number"
                    className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
                    placeholder="Minimum"
                    value={prixmin}
                    onChange={(e) => {
                      setprixmin(e.target.value);
                    }}
                  />
                  <input
                    type="number"
                    className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
                    placeholder="Maximum"
                    value={prixmax}
                    onChange={(e) => {
                      setprixmax(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                className="cursor-pointer hover:bg-yellow-400 px-2 py-2 w-full flex justify-center items-center rounded-md bg-yellow-500 text-white"
                // onClick={(e) => searchpage()}
                onClick={() =>
                  navigate(
                    `/search/${search}/${change}/${selectcat}/${prixmin}/${prixmax}`
                  )
                }
              >
                Rechercher des appartement à vendre
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
