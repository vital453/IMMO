/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Nav from "../components/Nav";
import Axios from "axios";
import { recupmaison_apparte } from "../feature/postSlice";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import Card from "../components/Card";
import { Footer } from "../components/Footer";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { recupcategory } from "../feature/categorySlice";

export default function Search1() {
  const [close, setclose] = useState(false);
  const { pathname } = useLocation();
  const [postfiltre, setpostfiltre] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [search, setsearch] = useState(String(pathname).split("/")[2]);
  const [selectcat, setselectcat] = useState(
    parseInt(String(pathname).split("/")[4])
  );
  console.log(parseInt(String(pathname).split("/")[4]), "val cat");
  const [prixmin, setprixmin] = useState(
    parseInt(String(pathname).split("/")[5])
  );
  const [prixmax, setprixmax] = useState(
    parseInt(String(pathname).split("/")[6])
  );

  const dispatch = useDispatch();
  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  const maison_apparte = useSelector((state) => state.post.maison_apparte);
  const categories = useSelector((state) => state.category.categories);

  const get_all_maison_apparte = () => {
    // console.log(`${process.env.baseurl}` + "valuer enviro");
    Axios.get(
      `${import.meta.env.VITE_BASE_URL}get_all_maison_apparte`,
      {}
    ).then((response) => {
      if (response.data[0]) {
        console.log(response.data);
        dispatch(recupmaison_apparte(response.data));
        // localStorage.setItem("change_version", "non");
      }
    });
  };
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

  const displayUser = postfiltre.map((data, index) => {
    return <Card key={index} data={data} />;
  });
  const recherche1 = () => {
    console.log("price");
    setpostfiltre(
      maison_apparte.filter(
        (t) =>
          t.nom.toLowerCase().includes(search.toLowerCase()) &&
          parseInt(t.categorie) == parseInt(selectcat)
      )
    );
  };
  const recherche2 = (val, ident) => {
    // console.log("je suis dans la recherche");
    if (ident == "search") {
      console.log("je suis dans la recherche COTE SEARCH");
      setsearch(val);
      if (
        val == "" &&
        selectcat == 1
        //  && prixmin == 0 && prixmax == 0
      ) {
        console.log("pop");
        setpostfiltre(maison_apparte);
      } else if (
        val != "" &&
        selectcat != 0
        //  && prixmin != 0 && prixmax != 0
      ) {
        console.log("flop");
        setpostfiltre(
          maison_apparte.filter(
            (t) =>
              t.nom.toLowerCase().includes(val) &&
              parseInt(t.categorie) == parseInt(selectcat)
            // parseInt(t.loyer) >= prixmin &&
            // parseInt(t.loyer) <= prixmax
          )
        );
      } else if (
        val == "" &&
        selectcat != 0
        //  && prixmin != 0 && prixmax != 0
      ) {
        setpostfiltre(
          maison_apparte.filter(
            (t) => parseInt(t.categorie) == parseInt(selectcat)
            // parseInt(t.loyer) >= prixmin &&
            // parseInt(t.loyer) <= prixmax
          )
        );
      }
      // else if (val != "" && selectcat != 0
      // //  && prixmin == 0 && prixmax == 0
      //  ) {
      //   setpostfiltre(
      //     maison_apparte.filter(
      //       (t) =>
      //         t.nom.toLowerCase().includes(val) &&
      //         parseInt(t.categorie) == parseInt(selectcat)
      //     )
      //   );
      // }
      //  else if (val != "" && selectcat == 0
      // //  && prixmin != 0 && prixmax != 0
      //  ) {
      //   setpostfiltre(
      //     maison_apparte.filter(
      //       (t) =>
      //         t.nom.toLowerCase().includes(val)
      //         // parseInt(t.categorie) == parseInt(selectcat) &&
      //         // parseInt(t.loyer) >= prixmin &&
      //         // parseInt(t.loyer) <= prixmax
      //     )
      //   );
      // }
      else if (
        val != "" &&
        selectcat == 0
        //  && prixmin == 0 && prixmax == 0
      ) {
        setpostfiltre(
          maison_apparte.filter((t) => t.nom.toLowerCase().includes(val))
        );
      }
    } else if (ident == "categorie") {
      console.log("je suis dans la recherche cote categorie");
      console.log(val, "valeur de la categorie");
      // setselectcat(val);
      if (
        search == "" &&
        val == 1
        //  && prixmin == 0 && prixmax == 0
      ) {
        console.log("la1");
        setpostfiltre(maison_apparte);
      } else if (
        search != "" &&
        val != 0
        //  && prixmin != 0 && prixmax != 0
      ) {
        console.log("la2");

        setpostfiltre(
          maison_apparte.filter(
            (t) =>
              t.nom.toLowerCase().includes(search) &&
              parseInt(t.categorie) == parseInt(val)
            // parseInt(t.loyer) >= parseInt(prixmin) &&
            // parseInt(t.loyer) <= parseInt(prixmax)
          )
        );
      } else if (
        search == "" &&
        val != 0
        // && prixmin != 0 && prixmax != 0
      ) {
        console.log("la3");
        // console.log(parseInt(prixmin));
        // console.log(parseInt(prixmax));

        setpostfiltre(
          maison_apparte.filter(
            (t) => parseInt(t.categorie) == parseInt(val)
            // parseInt(t.loyer) >= parseInt(prixmin) &&
            // parseInt(t.loyer) <= parseInt(prixmax)
          )
        );
      }
      // else if (search != "" && val != 0
      // //  && prixmin == 0 && prixmax == 0
      //  ) {
      //   console.log("la4");

      //   setpostfiltre(
      //     maison_apparte.filter(
      //       (t) =>
      //         t.nom.toLowerCase().includes(search) &&
      //         parseInt(t.categorie) == parseInt(val)
      //     )
      //   );
      // }
      //  else if (search != "" && val == 0
      // //  && prixmin != 0 && prixmax != 0
      //  ) {
      //   console.log("la5");

      //   setpostfiltre(
      //     maison_apparte.filter(
      //       (t) =>
      //         t.nom.toLowerCase().includes(search)
      //         // parseInt(t.categorie) == parseInt(val) &&
      //         // parseInt(t.loyer) >= parseInt(prixmin) &&
      //         // parseInt(t.loyer) <= parseInt(prixmax)
      //     )
      //   );
      // }
      else if (
        search != "" &&
        val == 0
        //  && prixmin == 0 && prixmax == 0
      ) {
        console.log("la6");

        setpostfiltre(
          maison_apparte.filter((t) => t.nom.toLowerCase().includes(search))
        );
      }
    }
  };
  const recherche3 = (prixmin, prixmax, categorie) => {
    console.log("price");
    console.log(categorie, "categorie");
    console.log(prixmin, "prixmin");
    console.log(prixmax, "prixmax");
    setpostfiltre(
      maison_apparte.filter(
        (t) =>
          // parseInt(t.categorie) == parseInt(categorie) &&
          // parseInt(t.loyer) >= prixmin ||
          parseInt(t.loyer) <= prixmax
      )
    );
  };

  //fonction de sélection d'une des categorie suggérer et appel de la fonction de recherche du post
  const CategorieSelect = (e) => {
    setselectcat(e);
    recherche2(e, "categorie");
  };
  //fonction de sélection d'une des categorie suggérer et appel de la fonction de recherche du post
  const Searchmode = (e) => {
    setsearch(e);
    recherche2(e, "search");
  };

  //fonction de sélection des prix suggérer et appel de la fonction de recherche du post
  const searchbyprice = () => {
    recherche3(prixmin, prixmax, selectcat);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    get_all_maison_apparte();
    get_category();
  }, []);

  useEffect(() => {
    recherche1();
  }, []);

  window.addEventListener("resize", updateScreen);
  return (
    <div>
      <Nav />
      {/* {width < 500 && (
      <div
        className="cursor-pointer shadow my-4 mx-2 w-14 h-14 bg-gray-100 flex justify-center items-center rounded-full"
        onClick={() => dispatch(setouvre(true))}
      >
        <HiMenuAlt1 className="" />
      </div>
    )} */}
      <div className="bg-[#F7F9FB] w-full px-4 py-8 flex flex-col md:flex-row md:justify-around gap-10">
        <div className="w-full flex justify-between items-center gap-8 text-[rgb(40,71,109)]">
          <div className="relative w-full flex">
            <input
              type="text"
              className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Entrez une ville ou code postale"
              value={search}
              onChange={(e) => {
                Searchmode(e.target.value);
              }}
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
            onChange={(e) => CategorieSelect(e.target.value)}
            value={selectcat}
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
                      value={prixmin}
                      onChange={(e) => {
                        setprixmin(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-full flex flex-col space-y-2 justify-center items-start">
                    <span>Maximum (FCFA)</span>
                    <input
                      type="number"
                      className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="0"
                      value={prixmax}
                      onChange={(e) => {
                        setprixmax(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-full flex items-center justify-end mt-4"
                onClick={() => {
                  setclose(!close);
                  searchbyprice();
                }}
              >
                <Button color="green">Valider</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-full px-4 flex flex-col">
        <div className="w-full md:px-32 flex justify-center items-start flex-col space-y-4 mt-4">
          <span className="text-[#1C3452] text-3xl font-semibold capitalize">
            Appartement{" "}
            {String(pathname).split("/")[3] == "A_lOUER"
              ? "à louer"
              : "à vendre"}
          </span>
          <hr className="w-full fit" />
        </div>
        <div className="w-full mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:px-32 family">
            {postfiltre[0] ? (
              displayUser
            ) : (
              <>
                <div className="flex justify-center items-center w-full mb-8 mt-8">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img src="gs.png" alt="" />
                    <span>Auncun resultat</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
