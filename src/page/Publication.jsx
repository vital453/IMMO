/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useMemo, useState } from "react";
import Nav from "../components/Nav";
import { appartment, building, home, land, meeting } from "../../public";
import { Button } from "@material-tailwind/react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Typography from "@mui/material/Typography";
// import Etape1 from "../components/post/Etape1";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setclickk } from "../feature/TriggerSlice";

export const categorieproduct = [
  {
    id: 0,
    title: "maison et appartement",
    image: home,
  },
  {
    id: 1,
    title: "boutique, bureau et magasin",
    image: appartment,
  },
  {
    id: 2,
    title: "Hôtels etrestaurants et etc..",
    image: building,
  },
  {
    id: 3,
    title: "Salles de conférence et de fête",
    image: meeting,
  },
  {
    id: 4,
    title: "Parcelles",
    image: land,
  },
];

const steps = ["Informations de base", "Titre et description", "Coordonnées"];

export default function Publication() {
  const [change, setchange] = useState("À lOUER");
  const [change1, setchange1] = useState(false);
  const clickk = useSelector((state) => state.trigger.clickk);
  const dispatch = useDispatch();
  // const [clickk, setclickk] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [selection1, setselection1] = useState(change);
  const [selection2, setselection2] = useState("Maison");
  const [selection3, setselection3] = useState("Eau");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  // ************************************************************* stepper exemple fonction **************
  // const [activeStep, setActiveStep] = useState(0);
  // console.log(clickk, "clique");
  // const [skipped, setSkipped] = useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  // ************************************************************************************

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);
  return (
    <div className="family">
      <Nav />
      {change1 ? (
        // <div className="w-full">
        //   <Box sx={{ width: "100%", padding: "0 10px", margin: "30px 0" }}>
        //     <Stepper activeStep={activeStep}>
        //       {steps.map((label, index) => {
        //         const stepProps = {};
        //         const labelProps = {};
        //         if (isStepOptional(index)) {
        //           labelProps.optional = (
        //             <Typography variant="caption">Optional</Typography>
        //           );
        //         }
        //         if (isStepSkipped(index)) {
        //           stepProps.completed = false;
        //         }
        //         return (
        //           <Step key={label} {...stepProps}>
        //             <StepLabel {...labelProps}>{label}</StepLabel>
        //           </Step>
        //         );
        //       })}
        //     </Stepper>
        //     {activeStep === steps.length ? (
        //       <div>
        //         <Typography sx={{ mt: 2, mb: 1 }}>
        //           All steps completed - you&apos;re finished
        //         </Typography>
        //         <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        //           <Box sx={{ flex: "1 1 auto" }} />
        //           <Button onClick={handleReset}>Reset</Button>
        //         </Box>
        //       </div>
        //     ) : (
        //       <div className="w-full px-3">
        //         <div className="w-full">
        //           {activeStep === 0 && (
        //             <div className="w-full mt-8 space-y-4">
        //               <select
        //                 className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
        //                 name="country-selector"
        //                 // onChange={(e) => setdiscount_type(e.target.value)}
        //                 id=""
        //               >
        //                 <option selected="" value="0">
        //                   Sélectionné le Département
        //                 </option>
        //                 <option value="Pourcentage">Appartement</option>
        //                 <option value="Espece">Bureau</option>
        //                 <option value="Espece">Commerce</option>
        //               </select>
        //               <select
        //                 className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
        //                 name="country-selector"
        //                 // onChange={(e) => setdiscount_type(e.target.value)}
        //                 id=""
        //               >
        //                 <option selected="" value="0">
        //                   Sélectionné la Commune
        //                 </option>
        //                 <option value="Pourcentage">Appartement</option>
        //                 <option value="Espece">Bureau</option>
        //                 <option value="Espece">Commerce</option>
        //               </select>
        //               <select
        //                 className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
        //                 name="country-selector"
        //                 // onChange={(e) => setdiscount_type(e.target.value)}
        //                 id=""
        //               >
        //                 <option selected="" value="0">
        //                   Sélectionné l'Arrondissement
        //                 </option>
        //                 <option value="Pourcentage">Appartement</option>
        //                 <option value="Espece">Bureau</option>
        //                 <option value="Espece">Commerce</option>
        //               </select>
        //               <input
        //                 type="text"
        //                 className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        //                 placeholder="Entrez le nom de l'appartement"
        //                 //   value={nom}
        //                 //   onChange={(e) => {
        //                 //     setnom(e.target.value);
        //                 //   }}
        //               />
        //             </div>
        //           )}
        //           {activeStep === 1 && (
        //             <div className="w-full mt-8 space-y-4 flex flex-col">
        //               <div className=" bg-graycolors2 mb-4 radio-inputs w-full">
        //                 <label
        //                   className={`radio ${
        //                     selection1 === "À lOUER" &&
        //                     "bg-white font-semibold rounded-md"
        //                   }`}
        //                   onClick={() => setselection1("À lOUER")}
        //                 >
        //                   <input type="radio" name="radio" />
        //                   <span className="name">À lOUER</span>
        //                 </label>

        //                 <label
        //                   className={`radio ${
        //                     selection1 === "À Vendre" &&
        //                     "bg-white font-semibold rounded-md"
        //                   }`}
        //                   onClick={() => setselection1("À Vendre")}
        //                 >
        //                   <input type="radio" name="radio" />
        //                   <span className="name">À Vendre</span>
        //                 </label>
        //               </div>
        //               <div className=" bg-graycolors2 mb-4 radio-inputs w-full">
        //                 <label
        //                   className={`radio ${
        //                     selection2 === "Appartement" &&
        //                     "bg-white font-semibold rounded-md"
        //                   }`}
        //                   onClick={() => setselection2("Appartement")}
        //                 >
        //                   <input type="radio" name="radio" />
        //                   <span className="name">Appartement</span>
        //                 </label>

        //                 <label
        //                   className={`radio ${
        //                     selection2 === "Maison" &&
        //                     "bg-white font-semibold rounded-md"
        //                   }`}
        //                   onClick={() => setselection2("Maison")}
        //                 >
        //                   <input type="radio" name="radio" />
        //                   <span className="name">Maison</span>
        //                 </label>
        //               </div>
        //               <div className="bg-ground4 w-full mb-4 py-4 flex justify-start items-start px-4">
        //                 {selection2 === "Maison" ? (
        //                   <div>
        //                     <div className="flex items-center justify-center radio-buttons-container">
        //                       <div className="radio-button">
        //                         <input
        //                           name="radio-group1"
        //                           id="radio2a"
        //                           className="radio-button__input"
        //                           type="radio"
        //                         />
        //                         <label
        //                           htmlFor="radio2a"
        //                           className="radio-button__label"
        //                         >
        //                           <span className="radio-button__custom"></span>
        //                           Sanitaire
        //                         </label>
        //                       </div>
        //                       <div className="radio-button">
        //                         <input
        //                           name="radio-group1"
        //                           id="radio1a"
        //                           className="radio-button__input"
        //                           type="radio"
        //                         />
        //                         <label
        //                           htmlFor="radio1a"
        //                           className="radio-button__label"
        //                         >
        //                           <span className="radio-button__custom"></span>
        //                           Ordinaire
        //                         </label>
        //                       </div>
        //                     </div>
        //                   </div>
        //                 ) : (
        //                   <div className="flex items-center justify-center radio-buttons-container">
        //                     <div className="radio-button">
        //                       <input
        //                         name="radio-group2"
        //                         id="radio2b"
        //                         className="radio-button__input"
        //                         type="radio"
        //                       />
        //                       <label
        //                         htmlFor="radio2b"
        //                         className="radio-button__label"
        //                       >
        //                         <span className="radio-button__custom"></span>
        //                         Appartement unique
        //                       </label>
        //                     </div>
        //                     <div className="radio-button">
        //                       <input
        //                         name="radio-group2"
        //                         id="radio1b"
        //                         className="radio-button__input"
        //                         type="radio"
        //                       />
        //                       <label
        //                         htmlFor="radio1b"
        //                         className="radio-button__label"
        //                       >
        //                         <span className="radio-button__custom"></span>
        //                         Guest house
        //                       </label>
        //                     </div>
        //                   </div>
        //                 )}
        //               </div>
        //             </div>
        //           )}
        //           {activeStep === 2 && <div>etape 3</div>}
        //         </div>
        //         {/* <Typography sx={{ mt: 2, mb: 1 }}>
        //           Step {activeStep + 1}
        //         </Typography> */}
        //         <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        //           <Button
        //             color="inherit"
        //             disabled={activeStep === 0}
        //             onClick={handleBack}
        //             sx={{ mr: 1 }}
        //           >
        //             Back
        //           </Button>
        //           <Box sx={{ flex: "1 1 auto" }} />
        //           {isStepOptional(activeStep) && (
        //             <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
        //               Skip
        //             </Button>
        //           )}

        //           <Button onClick={handleNext}>
        //             {activeStep === steps.length - 1 ? "Finish" : "Next"}
        //           </Button>
        //         </Box>
        //       </div>
        //     )}
        //   </Box>
        // </div>
        <>
          <div
            className={`w-full h-full p-3  flex justify-center items-center bg-transparent`}
          >
            <div className="mt-2 mb-8 w-full select-none">
              <h4 className="px-2 text-xl font-bold mb-10 text-navy-700 dark:text-white">
                Enregistrement d'un post
              </h4>

              <div className="flex flex-col justify-center items-center w-full space-y-4">
                <select
                  className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
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
                  className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
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
                  className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
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
                  className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  type="text"
                  placeholder="Entrez le nom de votre quartier"
                />
                <input
                  className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  type="text"
                  placeholder="Entrez le nom de l'appartement"
                />
                <div className=" bg-graycolors2 mb-4 radio-inputs w-full">
                  <label
                    className={`radio ${
                      selection1 === "À lOUER" &&
                      "bg-white font-semibold rounded-md"
                    }`}
                    onClick={() => setselection1("À lOUER")}
                  >
                    <input type="radio" name="radio" />
                    <span className="name">À lOUER</span>
                  </label>

                  <label
                    className={`radio ${
                      selection1 === "À Vendre" &&
                      "bg-white font-semibold rounded-md"
                    }`}
                    onClick={() => setselection1("À Vendre")}
                  >
                    <input type="radio" name="radio" />
                    <span className="name">À Vendre</span>
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
                      selection2 === "Maison" &&
                      "bg-white font-semibold rounded-md"
                    }`}
                    onClick={() => setselection2("Maison")}
                  >
                    <input type="radio" name="radio" />
                    <span className="name">Maison</span>
                  </label>
                </div>
                <div className="bg-ground4 w-full mb-4 py-4 flex justify-start items-start px-4">
                  {selection2 === "Maison" ? (
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
                  className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  type="number"
                  placeholder="Entrez le nombre de chambre salon"
                />
                <input
                  className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  type="text"
                  placeholder="Entrez les dimenssions"
                />
                <input
                  className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  type="number"
                  placeholder="Entrez le nombre de mois d'avance"
                />
                <input
                  className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  type="number"
                  placeholder="Entrez le nombre de mois de caution"
                />
                <input
                  className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  type="number"
                  placeholder="Entrez le montant du loyer"
                />
                <div className=" bg-graycolors2 mb-4 radio-inputs w-full">
                  <label
                    className={`radio ${
                      selection3 === "Eau" &&
                      "bg-white font-semibold rounded-md"
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
                <div className="w-full flex flex-wrap justify-center items-center gap-4">
                  <div className="w-[48%] cursor-pointer md:w-40 containerr">
                    <div className="headerr">
                      <label
                        htmlFor="file1"
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
                    <input id="file1" type="file" />
                  </div>
                  <div className="w-[45%] cursor-pointer md:w-40 containerr">
                    <div className="headerr">
                      <label
                        htmlFor="file2"
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
                    <input id="file2" type="file" />
                  </div>
                  <div className="w-[45%] cursor-pointer md:w-40 containerr">
                    <div className="headerr">
                      <label
                        htmlFor="file3"
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
                    <input id="file3" type="file" />
                  </div>
                  <div className="w-[45%] cursor-pointer md:w-40 containerr">
                    <div className="headerr">
                      <label
                        htmlFor="file4"
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
                    <input id="file4" type="file" />
                  </div>
                  <div className="w-[45%] cursor-pointer md:w-40 containerr">
                    <div className="headerr">
                      <label
                        htmlFor="file5"
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
                    <input id="file5" type="file" />
                  </div>
                  <div className="w-[45%] cursor-pointer md:w-40 containerr">
                    <div className="headerr">
                      <label
                        htmlFor="file6"
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
                    <input id="file6" type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full flex justify-center items-center px-4"
            onClick={() => setchange1(!change1)}
          >
            <button
              href=" "
              className="w-full md:w-72 linear mt-4  flex items-center justify-center rounded-xl bg-yellow-400/75  py-2 text-base font-medium text-white transition duration-200 hover:bg-yellow-400/75 active:bg-yellow-400/75 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Sauvegarder
            </button>
          </div>
          <div className="h-20"></div>
        </>
      ) : (
        <div className="w-full justify-center items-center flex flex-col space-y-4 mt-20">
          <div className="w-full flex justify-center items-center">
            <span className="text-[#1C3452] text-2xl text-bg-neutral-900 font-bold">
              Publication de votre annonce
            </span>
          </div>
          <div className="w-full flex justify-center items-center px-4">
            <p className="text-center">
              Rédigez votre description, téléchargez quelques photos et touchez
              un maximum d'acheteurs et locataires
            </p>
          </div>
          <div className="w-full px-4 md:w-[400px]">
            <div className="bg-transparent border-2 border-[rgb(40,71,109)] px-1 py-1 w-full flex justify-center items-center rounded-md shadow">
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
          </div>
          <div className="w-full flex justify-center items-center text-center px-4">
            <span className="text-[#1C3452] text-base font-semibold">
              Sélectionnez le type de bien et commencez à rédiger votre annonce
            </span>
          </div>
          <div className="w-full flex flex-wrap gap-3 justify-center items-center">
            {categorieproduct.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`w-[45%] h-48 cursor-pointer md:w-40 flex justify-center items-center px-2 py-2 flex-col space-y-4 border-2 border-[#C2D1E7] ${
                    data.id === clickk && "border-2 border-[#1C3452]"
                  }`}
                  onClick={() => {
                    dispatch(setclickk(i));
                    console.log(clickk, "clique");
                    console.log(i, "i sur clique");
                    console.log(change, "change");
                  }}
                >
                  <img
                    src={data.image}
                    alt=""
                    className="w-20 h-20 object-cover"
                  />
                  <span className="text-center">{data.title}</span>
                </div>
              );
            })}
          </div>
          <div
            className="w-full md:w-72 flex items-center justify-center px-4 mb-4"
            onClick={() => setchange1(true)}
          >
            <Button color="green" className="w-full">
              Commencer
            </Button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
