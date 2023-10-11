/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Panel from "../Panel";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
// import Checkbox from "@mui/material/Checkbox";
import { Select, initTE } from "tw-elements";

export default function Etape1() {
  const [selection1, setselection1] = useState("Location");
  const [selection2, setselection2] = useState("À louer");
  const [selection3, setselection3] = useState("Eau");
  useEffect(() => {
    initTE({ Select });
  }, []);
  return (
    <>
      <Panel extra={"w-full h-full p-3 flex justify-center items-center "}>
        <div className="mt-2 mb-8 w-full select-none">
          <h4 className="px-2 text-xl font-bold mb-10 text-navy-700 dark:text-white">
            Enregistrement d'un post
          </h4>
          {/* <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div> */}
          <div className="flex flex-col justify-center items-center w-full">
            <select
              className="p-[12px]  bg-graycolors2 rounded-lg w-full outline-none mb-4"
              name="country-selector"
              id=""
            >
              <option selected="" value="0">
                Sélectionné le Département
              </option>
              <option value="1">India</option>
              <option value="2">Australia</option>
            </select>
            <select
              className="p-[12px]  bg-graycolors2 rounded-lg w-full outline-none mb-4"
              name="country-selector"
              id=""
            >
              <option selected="" value="0">
                Sélectionné la Commune
              </option>
              <option value="1">India</option>
              <option value="2">Australia</option>
            </select>
            <select
              className="p-[12px]  bg-graycolors2 rounded-lg w-full outline-none mb-4"
              name="country-selector"
              id=""
            >
              <option selected="" value="0">
                Sélectionné l'Arrondissement
              </option>
              <option value="1">India</option>
              <option value="2">Australia</option>
            </select>
            <input
              className="p-[12px] rounded-lg bg-graycolors2 w-full mb-4 text-neutralcolors outline-none"
              type="text"
              placeholder="Entrez le nom de votre quartier"
            />
            <input
              className="p-[12px] rounded-lg bg-graycolors2 w-full mb-4 text-neutralcolors outline-none"
              type="text"
              placeholder="Entrez le nom de l'appartement"
            />
            <div className=" bg-graycolors2 mb-4 radio-inputs w-full">
              <label
                className={`radio ${
                  selection1 === "Location" &&
                  "bg-white font-semibold rounded-md"
                }`}
                onClick={() => setselection1("Location")}
              >
                <input type="radio" name="radio" />
                <span className="name">Location</span>
              </label>

              <label
                className={`radio ${
                  selection1 === "Vente" && "bg-white font-semibold rounded-md"
                }`}
                onClick={() => setselection1("Vente")}
              >
                <input type="radio" name="radio" />
                <span className="name">Vente</span>
              </label>
            </div>
            <div className=" bg-graycolors2 mb-4 radio-inputs w-full">
              <label
                className={`radio ${
                  selection2 === "Appartement" &&
                  "bg-white font-semibold rounded-md"
                }`}
                onClick={() => setselection2("Appartement")}
              >
                <input type="radio" name="radio" />
                <span className="name">Appartement</span>
              </label>

              <label
                className={`radio ${
                  selection2 === "À louer" &&
                  "bg-white font-semibold rounded-md"
                }`}
                onClick={() => setselection2("À louer")}
              >
                <input type="radio" name="radio" />
                <span className="name">À louer</span>
              </label>
            </div>
            <div className="bg-ground4 w-full mb-4 py-4 flex justify-start items-start px-4">
              {selection2 === "À louer" ? (
                <div>
                  <div className="flex items-center justify-center radio-buttons-container">
                    <div className="radio-button">
                      <input
                        name="radio-group1"
                        id="radio2a"
                        className="radio-button__input"
                        type="radio"
                      />
                      <label for="radio2a" className="radio-button__label">
                        <span className="radio-button__custom"></span>
                        Sanitaire
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        name="radio-group1"
                        id="radio1a"
                        className="radio-button__input"
                        type="radio"
                      />
                      <label for="radio1a" className="radio-button__label">
                        <span className="radio-button__custom"></span>
                        Ordinaire
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center radio-buttons-container">
                  <div className="radio-button">
                    <input
                      name="radio-group2"
                      id="radio2b"
                      className="radio-button__input"
                      type="radio"
                    />
                    <label for="radio2b" className="radio-button__label">
                      <span className="radio-button__custom"></span>
                      Appartement unique
                    </label>
                  </div>
                  <div className="radio-button">
                    <input
                      name="radio-group2"
                      id="radio1b"
                      className="radio-button__input"
                      type="radio"
                    />
                    <label for="radio1b" className="radio-button__label">
                      <span className="radio-button__custom"></span>
                      Guest house
                    </label>
                  </div>
                </div>
              )}
            </div>
            <input
              className="p-[12px] rounded-lg bg-graycolors2 w-full mb-4 text-neutralcolors outline-none"
              type="number"
              placeholder="Entrez le nombre de chambre salon"
            />
            <input
              className="p-[12px] rounded-lg bg-graycolors2 w-full mb-4 text-neutralcolors outline-none"
              type="text"
              placeholder="Entrez les dimenssions"
            />
            <input
              className="p-[12px] rounded-lg bg-graycolors2 w-full mb-4 text-neutralcolors outline-none"
              type="number"
              placeholder="Entrez le nombre de mois d'avance"
            />
            <input
              className="p-[12px] rounded-lg bg-graycolors2 w-full mb-4 text-neutralcolors outline-none"
              type="number"
              placeholder="Entrez le nombre de mois de caution"
            />
            <input
              className="p-[12px] rounded-lg bg-graycolors2 w-full mb-4 text-neutralcolors outline-none"
              type="number"
              placeholder="Entrez le montant du loyer"
            />
            <div className=" bg-graycolors2 mb-4 radio-inputs w-full">
              <label
                className={`radio ${
                  selection3 === "Eau" && "bg-white font-semibold rounded-md"
                }`}
                onClick={() => setselection3("Eau")}
              >
                <input type="radio" name="radio" />
                <span className="name">Eau</span>
              </label>

              <label
                className={`radio ${
                  selection3 === "Electricite" &&
                  "bg-white font-semibold rounded-md"
                }`}
                onClick={() => setselection3("Electricite")}
              >
                <input type="radio" name="radio" />
                <span className="name">Electricite</span>
              </label>
            </div>
            <div className="bg-ground4 w-full mb-4 py-4 flex justify-start items-start px-4">
              {selection3 === "Eau" ? (
                <div>
                  <div className="flex items-center justify-center radio-buttons-container">
                    <div className="radio-button">
                      <input
                        name="radio-group3"
                        id="radio2c"
                        className="radio-button__input"
                        type="radio"
                      />
                      <label for="radio2c" className="radio-button__label">
                        <span className="radio-button__custom"></span>
                        Compteur Personnel
                      </label>
                    </div>
                    <div className="radio-button">
                      <input
                        name="radio-group3"
                        id="radio1c"
                        className="radio-button__input"
                        type="radio"
                      />
                      <label for="radio1c" className="radio-button__label">
                        <span className="radio-button__custom"></span>
                        Compteur Commun
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center radio-buttons-container">
                  <div className="radio-button">
                    <input
                      name="radio-group"
                      id="radio2"
                      className="radio-button__input"
                      type="radio"
                    />
                    <label for="radio2" className="radio-button__label">
                      <span className="radio-button__custom"></span>
                      Compteur Personnel
                    </label>
                  </div>
                  <div className="radio-button">
                    <input
                      name="radio-group"
                      id="radio1"
                      className="radio-button__input"
                      type="radio"
                    />
                    <label for="radio1" className="radio-button__label">
                      <span className="radio-button__custom"></span>
                      Compteur Commun
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full containerr ">
              <div className="headerr">
                <label
                  htmlFor="file"
                  className="flex justify-center items-center flex-col"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>{" "}
                  <p>Fichier à Téléverser</p>
                </label>
              </div>
              <input id="file" type="file" />
            </div>
          </div>
        </div>
      </Panel>
      <button
          href=" "
          className=" w-full linear mt-4 flex items-center justify-center rounded-xl bg-yellow-400/75 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-yellow-400/75 active:bg-yellow-400/75 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Sauvegarder
        </button>
      <div className="h-20"></div>
    </>
  );
}
