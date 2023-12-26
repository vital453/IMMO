/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useMemo, useState } from "react";
import Nav from "../components/Nav";
import { appartment, building, home, land, meeting } from "../../public";
// import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import * as imageConversion from "image-conversion";
import Swal from "sweetalert2";
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
import Axios from "axios";
import {
  recuparrondissement,
  recupcategory,
  recupcommune,
  recupdepartement,
  recuppays,
} from "../feature/categorySlice";

export const categorieproduct = [
  {
    id: 1,
    title: "maison et appartement",
    image: home,
  },
  {
    id: 2,
    title: "boutique, bureau et magasin",
    image: appartment,
  },
  {
    id: 3,
    title: "Hôtels etrestaurants et etc..",
    image: building,
  },
  {
    id: 4,
    title: "Salles de conférence et de fête",
    image: meeting,
  },
  {
    id: 5,
    title: "Parcelles",
    image: land,
  },
];
export const etat = [
  {
    id: 0,
    title: "Bon",
  },
  {
    id: 1,
    title: "Exellent état",
  },
  {
    id: 2,
    title: "A restaurer",
  },
  {
    id: 3,
    title: "Fraichement rénové",
  },
  {
    id: 4,
    title: "A rafraichir",
  },
  {
    id: 5,
    title: "A rénové",
  },
];

const steps = ["Informations de base", "Titre et description", "Coordonnées"];

export default function Publication() {
  const [change1, setchange1] = useState(false);
  const clickk = useSelector((state) => state.trigger.clickk);
  const dispatch = useDispatch();
  // const [clickk, setclickk] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const { pathname } = useLocation();
  // const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const [paysid, setpaysid] = useState(0);
  const [departeid, setdeparteid] = useState(0);
  const [commuid, setcommuid] = useState(0);
  const [arrondiid, setarrondiid] = useState(0);
  // const { name, flags, countryCallingCode } = countries[country];
  const [showToast4, setShowToast4] = useState(false);
  const [progress, setprogress] = useState(false);
  const [message, setmessage] = useState("");
  const [nom, setnom] = useState("");
  const [quartier, setquartier] = useState("");
  const [nombre_chambre, setnombre_chambre] = useState("");
  const [dimmenssion, setdimmenssion] = useState("");
  const [nombre_avance, setnombre_avance] = useState("");
  const [caution, setcaution] = useState("");
  const [loyer, setloyer] = useState("");
  const [compteur_eau, setcompteur_eau] = useState("Compteur Personnel");
  const [compteur_electricite, setcompteur_electricite] =
    useState("Compteur Personnel");
  const [categorie, setcategorie] = useState(clickk);
  const [louer_vendre, setlouer_vendre] = useState("À lOUER");
  const [appart_maison, setappart_maison] = useState("Maison");
  const [libeller_choix, setlibeller_choix] = useState("Sanitaire");
  const [selection1, setselection1] = useState(louer_vendre);
  const [status_apparte, setstatus_apparte] = useState("");
  const [adresse_location, setadresse_location] = useState("");
  const [condition_dengagement, setcondition_dengagement] = useState("");
  const [description, setdescription] = useState("");
  const [contacte_demarcheur, setcontacte_demarcheur] = useState("");

  const categories = useSelector((state) => state.category.categories);
  const pays = useSelector((state) => state.category.pays);
  const departement = useSelector((state) => state.category.departement);
  const commune = useSelector((state) => state.category.commune);
  const arrondissement = useSelector((state) => state.category.arrondissement);
  const userid = useSelector((state) => state.auth.user);
  console.log(userid.userId, "val de lid");

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const totalSteps = 10;
  const [currentStep, setCurrentStep] = useState(0);
  // Calculer la largeur de la barre de progression en pourcentage
  const [progressWidth, setprogressWidth] = useState(
    (currentStep / totalSteps) * 100
  );

  useEffect(() => {
    setprogressWidth((currentStep / totalSteps) * 100);
  }, [currentStep]);
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

  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const [userInfo2, setuserInfo2] = useState({
    file: [],
    filepreview: null,
  });

  const [userInfo3, setuserInfo3] = useState({
    file: [],
    filepreview: null,
  });
  const [userInfo4, setuserInfo4] = useState({
    file: [],
    filepreview: null,
  });
  const [userInfo5, setuserInfo5] = useState({
    file: [],
    filepreview: null,
  });
  const [userInfo6, setuserInfo6] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = async (event) => {
    if (
      event.target.files[0].type !== "image/jpg" &&
      event.target.files[0].type !== "image/png" &&
      event.target.files[0].type !== "image/jpeg"
    ) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez insérer des images au format png ou jpg",
        showConfirmButton: false,
        timer: 1500,
      });
      setmessage("Veuillez insérer des images au format png ou jpg");
      setShowToast4(true);
    } else {
      if (parseInt(event.target.files[0].size) > 7000000) {
        setShowToast4(true);
        setmessage("La taille des images doit être inférieure à 7Mo");
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "La taille des images doit être inférieure à 7Mo",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        const res = await imageConversion.compressAccurately(
          event.target.files[0],
          500
        );
        const myFile = new File([res], event.target.files[0].name, {
          type: res.type,
        });
        setuserInfo({
          ...userInfo,
          file: myFile,
          filepreview: URL.createObjectURL(myFile),
        });
      }
    }
  };
  const handleInputChange2 = async (event) => {
    if (
      event.target.files[0].type !== "image/jpg" &&
      event.target.files[0].type !== "image/png" &&
      event.target.files[0].type !== "image/jpeg"
    ) {
      setmessage("Veuillez insérer des images au format png ou jpg");
      setShowToast4(true);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez insérer des images au format png ou jpg",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (parseInt(event.target.files[0].size) > 7000000) {
        setShowToast4(true);
        setmessage("La taille des images doit être inférieure à 7Mo");
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "La taille des images doit être inférieure à 7Mo",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        const res = await imageConversion.compressAccurately(
          event.target.files[0],
          500
        );
        const myFile = new File([res], event.target.files[0].name, {
          type: res.type,
        });
        setuserInfo2({
          ...userInfo2,
          file: myFile,
          filepreview: URL.createObjectURL(myFile),
        });
      }
    }
  };
  const handleInputChange3 = async (event) => {
    if (
      event.target.files[0].type !== "image/jpg" &&
      event.target.files[0].type !== "image/png" &&
      event.target.files[0].type !== "image/jpeg"
    ) {
      setmessage("Veuillez insérer des images au format png ou jpg");
      setShowToast4(true);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez insérer des images au format png ou jpg",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (parseInt(event.target.files[0].size) > 7000000) {
        setShowToast4(true);
        setmessage("La taille des images doit être inférieure à 7Mo");
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "La taille des images doit être inférieure à 7Mo",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        const res = await imageConversion.compressAccurately(
          event.target.files[0],
          500
        );
        const myFile = new File([res], event.target.files[0].name, {
          type: res.type,
        });
        setuserInfo3({
          ...userInfo3,
          file: myFile,
          filepreview: URL.createObjectURL(myFile),
        });
      }
    }
  };
  const handleInputChange4 = async (event) => {
    if (
      event.target.files[0].type !== "image/jpg" &&
      event.target.files[0].type !== "image/png" &&
      event.target.files[0].type !== "image/jpeg"
    ) {
      setmessage("Veuillez insérer des images au format png ou jpg");
      setShowToast4(true);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez insérer des images au format png ou jpg",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (parseInt(event.target.files[0].size) > 7000000) {
        setShowToast4(true);
        setmessage("La taille des images doit être inférieure à 7Mo");
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "La taille des images doit être inférieure à 7Mo",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        const res = await imageConversion.compressAccurately(
          event.target.files[0],
          500
        );
        const myFile = new File([res], event.target.files[0].name, {
          type: res.type,
        });
        setuserInfo4({
          ...userInfo4,
          file: myFile,
          filepreview: URL.createObjectURL(myFile),
        });
      }
    }
  };
  const handleInputChange5 = async (event) => {
    if (
      event.target.files[0].type !== "image/jpg" &&
      event.target.files[0].type !== "image/png" &&
      event.target.files[0].type !== "image/jpeg"
    ) {
      setmessage("Veuillez insérer des images au format png ou jpg");
      setShowToast4(true);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez insérer des images au format png ou jpg",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (parseInt(event.target.files[0].size) > 7000000) {
        setShowToast4(true);
        setmessage("La taille des images doit être inférieure à 7Mo");
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "La taille des images doit être inférieure à 7Mo",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        const res = await imageConversion.compressAccurately(
          event.target.files[0],
          500
        );
        const myFile = new File([res], event.target.files[0].name, {
          type: res.type,
        });
        setuserInfo5({
          ...userInfo5,
          file: myFile,
          filepreview: URL.createObjectURL(myFile),
        });
      }
    }
  };
  const handleInputChange6 = async (event) => {
    if (
      event.target.files[0].type !== "image/jpg" &&
      event.target.files[0].type !== "image/png" &&
      event.target.files[0].type !== "image/jpeg"
    ) {
      setmessage("Veuillez insérer des images au format png ou jpg");
      setShowToast4(true);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez insérer des images au format png ou jpg",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      if (parseInt(event.target.files[0].size) > 7000000) {
        setShowToast4(true);
        setmessage("La taille des images doit être inférieure à 7Mo");
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "La taille des images doit être inférieure à 7Mo",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        const res = await imageConversion.compressAccurately(
          event.target.files[0],
          500
        );
        const myFile = new File([res], event.target.files[0].name, {
          type: res.type,
        });
        setuserInfo6({
          ...userInfo6,
          file: myFile,
          filepreview: URL.createObjectURL(myFile),
        });
      }
    }
  };
  const submit = async (id, numberpic, obj) => {
    const formdata = new FormData();
    formdata.append("avatar", obj);
    await Axios.put(
      `${
        import.meta.env.VITE_BASE_URL
      }updatepic/${id}/${numberpic}/${"maison_apparte"}`,
      formdata,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
      .then((res) => {
        // then print response status
        console.warn(res);
        if (res.data.success === 1) {
          console.log("image send");
          // setbienpasse(true);
          if (numberpic == 1) {
            setTimeout(() => {
              setCurrentStep(4);
            }, 1000);
          } else if (numberpic == 2) {
            setTimeout(() => {
              setCurrentStep(5);
            }, 1000);
          } else if (numberpic == 3) {
            setTimeout(() => {
              setCurrentStep(6);
            }, 1000);
          } else if (numberpic == 4) {
            setTimeout(() => {
              setCurrentStep(7);
            }, 1000);
          } else if (numberpic == 5) {
            setTimeout(() => {
              setCurrentStep(8);
            }, 1000);
          } else if (numberpic == 6) {
            setTimeout(() => {
              setCurrentStep(9);
            }, 1000);
          }
        } else {
          // setbienpasse(false);
          console.log("false");
        }
      })
      .catch((error) => {});
  };
  const envoi = async () => {
    console.log(louer_vendre);
    console.log(paysid[0] && pays.filter((e) => e.id == paysid)[0].name);
    if (
      (paysid,
      departeid,
      commuid,
      arrondiid,
      quartier,
      nom,
      nombre_chambre,
      dimmenssion,
      nombre_avance,
      caution,
      loyer,
      compteur_eau,
      compteur_electricite,
      categorie,
      louer_vendre,
      appart_maison,
      libeller_choix,
      status_apparte,
      adresse_location,
      condition_dengagement,
      description)
    ) {
      setprogress(true);

      setTimeout(() => {
        setCurrentStep(1);
      }, 500);
      setTimeout(() => {
        setCurrentStep(2);
      }, 1000);
      // setTimeout(() => {
      //   setCurrentStep(3);
      // }, 1000);
      console.log("premiere etape");
      await Axios.post(`${import.meta.env.VITE_BASE_URL}add_maison_apparte`, {
        pays: pays.filter((e) => e.id == paysid)[0].name,
        id_creator: userid.userId,
        departement: departement.filter((e) => e.id == departeid)[0].name,
        commune: commune.filter((e) => e.id == commuid)[0].name,
        arrondissement: arrondissement.filter((e) => e.id == arrondiid)[0].name,
        quartier: quartier,
        nom: nom,
        nombre_chambre: nombre_chambre,
        dimmenssion: dimmenssion,
        nombre_avance: nombre_avance,
        caution: caution,
        loyer: loyer,
        compteur_eau: compteur_eau,
        compteur_electricite: compteur_electricite,
        categorie: categorie,
        louer_vendre: louer_vendre,
        appart_maison: appart_maison,
        libeller_choix: libeller_choix,
        status_apparte: status_apparte,
        adresse_location: adresse_location,
        condition_dengagement: condition_dengagement,
        description: description,
        contacte_demarcheur: "+22961940010",
      }).then((ret) => {
        console.log("deuxieme etape");

        if (ret.data) {
          setTimeout(() => {
            setCurrentStep(3);
          }, 1000);
          console.log("troisieme etape");
          console.log(ret.data[0].id, "id recus apres insertion");
          // setId(ret.data[0].tota);
          if (userInfo.file.name) {
            submit(ret.data[0].id, 1, userInfo.file);
          } else {
            setTimeout(() => {
              setCurrentStep(4);
            }, 1000);
          }
          if (userInfo2.file.name) {
            submit(ret.data[0].id, 2, userInfo2.file);
          } else {
            setTimeout(() => {
              setCurrentStep(5);
            }, 1000);
          }

          if (userInfo3.file.name) {
            submit(ret.data[0].id, 3, userInfo3.file);
          } else {
            setTimeout(() => {
              setCurrentStep(6);
            }, 1000);
          }
          if (userInfo4.file.name) {
            submit(ret.data[0].id, 4, userInfo4.file);
          } else {
            setTimeout(() => {
              setCurrentStep(7);
            }, 1000);
          }
          if (userInfo5.file.name) {
            submit(ret.data[0].id, 5, userInfo5.file);
          } else {
            setTimeout(() => {
              setCurrentStep(8);
            }, 1000);
          }
          if (userInfo6.file.name) {
            submit(ret.data[0].id, 6, userInfo6.file);
          } else {
            setTimeout(() => {
              setCurrentStep(9);
            }, 1000);
          }
          setTimeout(() => {
            setCurrentStep(10);
          }, 1000);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Post enregistrer avec succes",
            showConfirmButton: false,
            timer: 1500,
          });
          setprogress(false);
          // Axios.post("https://backend-shopp.versatileskills.space/afficheart", {
          //   // id_boutique: userid.BoutiqueId,
          // }).then((ret) => {
          //   // dispatch(recupProduct(ret.data));
          //   // if (bienpasse) {
          //   setTimeout(() => {
          //     setCurrentStep(10);
          //   }, 1000);
          //   setTimeout(() => {
          //     setprogress(false);
          //   }, 2000);
          // });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Element non enrégistré",
            showConfirmButton: false,
            timer: 1500,
          });
          //  alert('Element non enrégistré');
        }
      });
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
  const get_pays = () => {
    // console.log(`${process.env.baseurl}` + "valuer enviro");
    Axios.get(`${import.meta.env.VITE_BASE_URL}get_pays`, {}).then(
      (response) => {
        if (response.data[0]) {
          console.log(response.data);
          dispatch(recuppays(response.data));
          // localStorage.setItem("change_version", "non");
        }
      }
    );
  };
  const get_departement = () => {
    // console.log(`${process.env.baseurl}` + "valuer enviro");
    Axios.get(`${import.meta.env.VITE_BASE_URL}get_departement`, {}).then(
      (response) => {
        if (response.data[0]) {
          console.log(response.data);
          dispatch(recupdepartement(response.data));
          // localStorage.setItem("change_version", "non");
        }
      }
    );
  };
  const get_commune = () => {
    // console.log(`${process.env.baseurl}` + "valuer enviro");
    Axios.get(`${import.meta.env.VITE_BASE_URL}get_commune`, {}).then(
      (response) => {
        if (response.data[0]) {
          console.log(response.data);
          dispatch(recupcommune(response.data));
          // localStorage.setItem("change_version", "non");
        }
      }
    );
  };
  const get_arrondissement = () => {
    // console.log(`${process.env.baseurl}` + "valuer enviro");
    Axios.get(`${import.meta.env.VITE_BASE_URL}get_arrondissement`, {}).then(
      (response) => {
        if (response.data[0]) {
          console.log(response.data);
          dispatch(recuparrondissement(response.data));
          // localStorage.setItem("change_version", "non");
        }
      }
    );
  };
  useEffect(() => {
    get_pays();
    get_departement();
    get_commune();
    get_arrondissement();
    get_category();
  }, []);

  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);
  return (
    <div className="select-none w-full family">
      <Nav />
      <div className=" w-full flex flex-col">
        {change1 ? (
          <div className="flex flex-col w-full ">
            {clickk === 1 && (
              <>
                <div
                  className={`w-full h-full p-3  flex justify-center select-none items-center bg-transparent`}
                >
                  <div className="mt-2 mb-8 w-full select-none">
                    <h4 className="px-2 text-xl font-bold mb-10 text-navy-700 dark:text-white">
                      Enregistrement d'un post
                    </h4>

                    <div className="flex flex-col md:flex-row justify-center items-start w-full gap-4">
                      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
                        <select
                          className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
                          name="country-selector"
                          onChange={(e) => setpaysid(e.target.value)}
                          id=""
                        >
                          <option selected="" value={0}>
                            Sélectionné le pays
                          </option>
                          {pays[0] &&
                            pays.map((data, i) => {
                              return (
                                <option value={data.id} key={i}>
                                  {/* <option selected="" value={data.id}> */}
                                  {data.name}
                                </option>
                              );
                            })}
                        </select>
                        <select
                          className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
                          name="country-selector"
                          onChange={(e) => setdeparteid(e.target.value)}
                          id=""
                        >
                          <option selected="" value={0}>
                            Sélectionné le Département
                          </option>
                          {departement[0] &&
                            departement
                              .filter((t) => t.id_pays == paysid)
                              .map((data, i) => {
                                return (
                                  <option value={data.id} key={i}>
                                    {/* <option selected="" value={data.id}> */}
                                    {data.name}
                                  </option>
                                );
                              })}
                        </select>
                        <select
                          className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
                          name="country-selector"
                          onChange={(e) => setcommuid(e.target.value)}
                          id=""
                        >
                          <option selected="" value={0}>
                            Sélectionné la Commune
                          </option>
                          {commune[0] &&
                            commune
                              .filter(
                                (t) =>
                                  t.id_pays == paysid &&
                                  t.id_departement == departeid
                              )
                              .map((data, i) => {
                                return (
                                  <option
                                    value={data.id}
                                    key={i}
                                    onClick={console.log(data.id)}
                                  >
                                    {/* <option selected="" value={data.id}> */}
                                    {data.name}
                                  </option>
                                );
                              })}
                        </select>
                        <select
                          className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
                          name="country-selector"
                          onChange={(e) => setarrondiid(e.target.value)}
                          id=""
                        >
                          <option
                            selected=""
                            value={0}
                            onClick={console.log(paysid, departeid, commuid)}
                          >
                            Sélectionné l'Arrondissement
                          </option>
                          {arrondissement[0] &&
                            arrondissement
                              // .filter(
                              //   (t) =>
                              //     t.id_pays == paysid &&
                              //     t.id_departement == departeid &&
                              //     t.id_commune == commuid
                              // )
                              .map((data, i) => {
                                return (
                                  <option value={data.id} key={i}>
                                    {/* <option selected="" value={data.id}> */}
                                    {data.name}
                                  </option>
                                );
                              })}
                        </select>
                        <input
                          className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          type="text"
                          placeholder="Entrez le nom de votre quartier"
                          onChange={(e) => setquartier(e.target.value)}
                          value={quartier}
                        />
                        <input
                          className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          type="text"
                          placeholder="Entrez le nom de l'appartement"
                          onChange={(e) => setnom(e.target.value)}
                          value={nom}
                        />
                        <div className=" bg-graycolors2 mb-4 radio-inputs w-full">
                          <label
                            className={`radio ${
                              louer_vendre === "À lOUER" &&
                              "bg-white font-semibold rounded-md"
                            }`}
                            onClick={() => setlouer_vendre("À lOUER")}
                          >
                            <input type="radio" name="radio" />
                            <span className="name">À lOUER</span>
                          </label>

                          <label
                            className={`radio ${
                              louer_vendre === "À Vendre" &&
                              "bg-white font-semibold rounded-md"
                            }`}
                            onClick={() => setlouer_vendre("À Vendre")}
                          >
                            <input type="radio" name="radio" />
                            <span className="name">À Vendre</span>
                          </label>
                        </div>
                        <div className=" bg-graycolors2 mb-4 radio-inputs w-full">
                          <label
                            className={`radio ${
                              appart_maison === "Appartement" &&
                              "bg-white font-semibold rounded-md"
                            }`}
                            onClick={() => setappart_maison("Appartement")}
                          >
                            <input type="radio" name="radio" />
                            <span className="name">Appartement</span>
                          </label>

                          <label
                            className={`radio ${
                              appart_maison === "Maison" &&
                              "bg-white font-semibold rounded-md"
                            }`}
                            onClick={() => setappart_maison("Maison")}
                          >
                            <input type="radio" name="radio" />
                            <span className="name">Maison</span>
                          </label>
                        </div>
                        <div className="bg-ground4 w-full mb-4 py-4 flex justify-start items-start px-4">
                          {appart_maison === "Maison" ? (
                            <div>
                              <div className="flex items-center justify-center radio-buttons-container">
                                <div className="radio-button">
                                  <input
                                    name="radio-group1"
                                    id="radio2a"
                                    className="radio-button__input"
                                    type="radio"
                                    value="Sanitaire"
                                    checked={libeller_choix === "Sanitaire"}
                                    onChange={(e) =>
                                      setlibeller_choix(e.target.value)
                                    }
                                  />
                                  <label
                                    for="radio2a"
                                    className="radio-button__label"
                                  >
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
                                    value="Ordinaire"
                                    checked={libeller_choix === "Ordinaire"}
                                    onChange={(e) =>
                                      setlibeller_choix(e.target.value)
                                    }
                                  />
                                  <label
                                    for="radio1a"
                                    className="radio-button__label"
                                  >
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
                                  value="Appartement unique"
                                  checked={
                                    libeller_choix === "Appartement unique"
                                  }
                                  onChange={(e) =>
                                    setlibeller_choix(e.target.value)
                                  }
                                />
                                <label
                                  for="radio2b"
                                  className="radio-button__label"
                                >
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
                                  value="Guest house"
                                  checked={libeller_choix === "Guest house"}
                                  onChange={(e) =>
                                    setlibeller_choix(e.target.value)
                                  }
                                />
                                <label
                                  for="radio1b"
                                  className="radio-button__label"
                                >
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
                          onChange={(e) => setnombre_chambre(e.target.value)}
                          value={nombre_chambre}
                        />
                        <input
                          className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          type="text"
                          placeholder="Entrez les dimenssions"
                          onChange={(e) => setdimmenssion(e.target.value)}
                          value={dimmenssion}
                        />
                        <textarea
                          className="border-1 bg-transparent px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          type="text"
                          placeholder="Condition d'engagement"
                          onChange={(e) =>
                            setcondition_dengagement(e.target.value)
                          }
                          value={condition_dengagement}
                        />
                        <textarea
                          className="border-1 bg-transparent px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          type="text"
                          placeholder="Decrivez brievement l'appartement"
                          onChange={(e) => setdescription(e.target.value)}
                          value={description}
                        />
                        <input
                          className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          type="text"
                          placeholder="Adresse de l'apparte (Rue, Maison ...)"
                          onChange={(e) => setadresse_location(e.target.value)}
                          value={adresse_location}
                        />
                        <select
                          className="h-12 px-1 py-2 text-[rgb(40,71,109)] border-1 bg-transparent rounded-md w-full shadow-sm border-[rgb(40,71,109)] border-1 placeholder-slate-400"
                          name="country-selector"
                          onChange={(e) => setstatus_apparte(e.target.value)}
                          id=""
                        >
                          <option selected="" value={""}>
                            Sélectionné l'état de l'appartement
                          </option>
                          {etat[0] &&
                            etat.map((data, i) => {
                              return (
                                <option value={data.title} key={i}>
                                  {/* <option selected="" value={data.id}> */}
                                  {data.title}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
                        <input
                          className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          type="number"
                          placeholder="Entrez le nombre de mois d'avance"
                          onChange={(e) => setnombre_avance(e.target.value)}
                          value={nombre_avance}
                        />
                        <input
                          className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          type="number"
                          placeholder="Entrez le nombre de mois de caution"
                          onChange={(e) => setcaution(e.target.value)}
                          value={caution}
                        />
                        <input
                          className="border-1 bg-transparent h-12 px-1 py-2 shadow-sm border-[rgb(40,71,109)] placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          type="number"
                          placeholder="Entrez le montant du loyer"
                          onChange={(e) => setloyer(e.target.value)}
                          value={loyer}
                        />
                        <div className=" bg-graycolors2 radio-inputs w-full">
                          <label
                            className="radio border-r-2 border-r-neutralcolors"
                            // className={`radio ${
                            //   selection3 === "Eau" &&
                            //   "bg-white font-semibold rounded-md"
                            // }`}
                            // onClick={() => setselection3("Eau")}
                          >
                            {/* <input type="radio" name="radio" /> */}
                            <span className="name">Eau</span>
                          </label>

                          <label
                            className="radio"

                            // className={`radio ${
                            //   selection3 === "Electricite" &&
                            //   "bg-white font-semibold rounded-md"
                            // }`}
                            // onClick={() => setselection3("Electricite")}
                          >
                            {/* <input type="radio" name="radio" /> */}
                            <span className="name">Electricite</span>
                          </label>
                        </div>
                        <div className="w-full mb-4 py-4 flex justify-start items-start gap-4">
                          <div className="bg-ground4 w-1/2 flex flex-col items-center justify-center radio-buttons-container py-3">
                            <div className="radio-button">
                              <input
                                name="radio-group3"
                                id="radio2c"
                                className="radio-button__input"
                                type="radio"
                                value="Compteur Personnel"
                                checked={compteur_eau === "Compteur Personnel"}
                                onChange={(e) =>
                                  setcompteur_eau(e.target.value)
                                }
                              />
                              <label
                                for="radio2c"
                                className="radio-button__label"
                              >
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
                                value="Compteur Commun"
                                checked={compteur_eau === "Compteur Commun"}
                                onChange={(e) =>
                                  setcompteur_eau(e.target.value)
                                }
                              />
                              <label
                                for="radio1c"
                                className="radio-button__label"
                              >
                                <span className="radio-button__custom"></span>
                                Compteur Commun
                              </label>
                            </div>
                          </div>
                          <div className="bg-ground4 w-1/2 flex items-center flex-col justify-center radio-buttons-container py-3">
                            <div className="radio-button">
                              <input
                                name="radio-group"
                                id="radio2"
                                className="radio-button__input"
                                type="radio"
                                value="Compteur Personnel"
                                checked={
                                  compteur_electricite === "Compteur Personnel"
                                }
                                onChange={(e) =>
                                  setcompteur_electricite(e.target.value)
                                }
                              />
                              <label
                                for="radio2"
                                className="radio-button__label"
                              >
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
                                value="Compteur Commun"
                                checked={
                                  compteur_electricite === "Compteur Commun"
                                }
                                onChange={(e) =>
                                  setcompteur_electricite(e.target.value)
                                }
                              />
                              <label
                                for="radio1"
                                className="radio-button__label"
                              >
                                <span className="radio-button__custom"></span>
                                Compteur Commun
                              </label>
                            </div>
                          </div>
                          {/* {selection3 === "Eau" ? (
                            <div>
                              
                            </div>
                          ) : ( 
                          )} */}
                        </div>
                        <div className="w-full flex flex-wrap justify-center items-center gap-4">
                          <div className="w-[48%] cursor-pointer md:w-40 containerr">
                            <div
                              className={`headerr ${
                                userInfo.filepreview == null && "bord"
                              }`}
                            >
                              <label
                                htmlFor="file1"
                                className="w-full h-full flex justify-center items-center flex-col"
                              >
                                {userInfo.filepreview != null ? (
                                  <img
                                    src={userInfo.filepreview}
                                    alt="UploadImage"
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                ) : (
                                  <>
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
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
                                    </svg>
                                    <p>Fichier à Téléverser</p>
                                  </>
                                )}
                              </label>
                            </div>
                            <input
                              id="file1"
                              type="file"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="w-[45%] cursor-pointer md:w-40 containerr">
                            <div
                              className={`headerr ${
                                userInfo2.filepreview == null && "bord"
                              }`}
                            >
                              <label
                                htmlFor="file2"
                                className="w-full h-full flex justify-center items-center flex-col"
                              >
                                {userInfo2.filepreview != null ? (
                                  <img
                                    src={userInfo2.filepreview}
                                    alt="UploadImage"
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                ) : (
                                  <>
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
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
                                  </>
                                )}
                              </label>
                            </div>
                            <input
                              id="file2"
                              type="file"
                              onChange={handleInputChange2}
                            />
                          </div>
                          <div className="w-[45%] cursor-pointer md:w-40 containerr">
                            <div
                              className={`headerr ${
                                userInfo3.filepreview == null && "bord"
                              }`}
                            >
                              <label
                                htmlFor="file3"
                                className="flex justify-center items-center flex-col"
                              >
                                {" "}
                                {userInfo3.filepreview != null ? (
                                  <img
                                    src={userInfo3.filepreview}
                                    alt="UploadImage"
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                ) : (
                                  <>
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
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
                                  </>
                                )}
                              </label>
                            </div>
                            <input
                              id="file3"
                              type="file"
                              onChange={handleInputChange3}
                            />
                          </div>
                          <div className="w-[45%] cursor-pointer md:w-40 containerr">
                            <div
                              className={`headerr ${
                                userInfo4.filepreview == null && "bord"
                              }`}
                            >
                              <label
                                htmlFor="file4"
                                className="flex justify-center items-center flex-col"
                              >
                                {userInfo4.filepreview != null ? (
                                  <img
                                    src={userInfo4.filepreview}
                                    alt="UploadImage"
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                ) : (
                                  <>
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
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
                                  </>
                                )}
                              </label>
                            </div>
                            <input
                              id="file4"
                              type="file"
                              onChange={handleInputChange4}
                            />
                          </div>
                          <div className="w-[45%] cursor-pointer md:w-40 containerr">
                            <div
                              className={`headerr ${
                                userInfo5.filepreview == null && "bord"
                              }`}
                            >
                              <label
                                htmlFor="file5"
                                className="flex justify-center items-center flex-col"
                              >
                                {userInfo5.filepreview != null ? (
                                  <img
                                    src={userInfo5.filepreview}
                                    alt="UploadImage"
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                ) : (
                                  <>
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
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
                                  </>
                                )}
                              </label>
                            </div>
                            <input
                              id="file5"
                              type="file"
                              onChange={handleInputChange5}
                            />
                          </div>
                          <div className="w-[45%] cursor-pointer md:w-40 containerr">
                            <div
                              className={`headerr ${
                                userInfo6.filepreview == null && "bord"
                              }`}
                            >
                              <label
                                htmlFor="file6"
                                className="flex justify-center items-center flex-col"
                              >
                                {userInfo6.filepreview != null ? (
                                  <img
                                    src={userInfo6.filepreview}
                                    alt="UploadImage"
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                ) : (
                                  <>
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g>
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
                                  </>
                                )}
                              </label>
                            </div>
                            <input
                              id="file6"
                              type="file"
                              onChange={handleInputChange6}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {progress ? (
                  <>
                    {/* <div className="mb-3"></div>
                  <IonProgressBar type="indeterminate"></IonProgressBar> */}
                    <div>
                      <div className="progress-container">
                        <div
                          className="progress-barrrs"
                          style={{ width: `${progressWidth}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-center text-xl text-neutral-800 mt-4">
                        <span className="ml-0">Chargement des données</span>
                        <div class="ml-3 dot-spinner">
                          <div class="dot-spinner__dot"></div>
                          <div class="dot-spinner__dot"></div>
                          <div class="dot-spinner__dot"></div>
                          <div class="dot-spinner__dot"></div>
                          <div class="dot-spinner__dot"></div>
                          <div class="dot-spinner__dot"></div>
                          <div class="dot-spinner__dot"></div>
                          <div class="dot-spinner__dot"></div>
                        </div>
                      </div>
                      {/* <div className="step-container">
                      <div
                        className={`step ${currentStep <= 5 ? "active" : ""}`}
                      >
                        Étape 1
                      </div>
                      <div
                        className={`step ${currentStep >= 6 ? "active" : ""}`}
                      >
                        Étape 2
                      </div>
                    </div> */}
                    </div>
                  </>
                ) : (
                  <div
                    className="w-full flex justify-center items-center px-4"
                    // onClick={() => setchange1(!change1)}
                  >
                    <button
                      href=" "
                      className="w-full md:w-72 linear mt-4  flex items-center justify-center rounded-xl bg-yellow-400/75  py-2 text-base font-medium text-white transition duration-200 hover:bg-yellow-400/75 active:bg-yellow-400/75 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                      onClick={() => envoi()}
                    >
                      Sauvegarder
                    </button>
                  </div>
                )}
                <div className="h-20"></div>
              </>
            )}
          </div>
        ) : (
          <div className="w-full justify-center items-center flex flex-col space-y-4 mt-20">
            <div className="w-full flex justify-center items-center">
              <span className="text-[#1C3452] text-2xl text-bg-neutral-900 font-bold">
                Publication de votre annonce
              </span>
            </div>
            <div className="w-full flex justify-center items-center px-4">
              <p className="text-center">
                Rédigez votre description, téléchargez quelques photos et
                touchez un maximum d'acheteurs et locataires
              </p>
            </div>
            <div className="w-full px-4 md:w-[400px]">
              <div className="bg-transparent border-2 border-[rgb(40,71,109)] px-1 py-1 w-full flex justify-center items-center rounded-md shadow">
                <div
                  className={`w-1/2 justify-center items-center px-2 py-2 ${
                    louer_vendre === "À lOUER" &&
                    "bg-[rgb(40,71,109)] text-white"
                  } rounded-md text-center cursor-pointer`}
                  onClick={() => setlouer_vendre("À lOUER")}
                >
                  {" "}
                  À lOUER
                </div>
                <div
                  className={`w-1/2 justify-center items-center px-2 py-2 ${
                    louer_vendre === "À Vendre" &&
                    "bg-[rgb(40,71,109)] text-white"
                  } rounded-md text-center cursor-pointer`}
                  onClick={() => setlouer_vendre("À Vendre")}
                >
                  {" "}
                  À Vendre
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center text-center px-4">
              <span className="text-[#1C3452] text-base font-semibold">
                Sélectionnez le type de bien et commencez à rédiger votre
                annonce
              </span>
            </div>
            <div className="w-full flex flex-wrap gap-3 justify-center items-center">
              {categories.map((data, i) => {
                return categorieproduct
                  .filter((e) => data.id == e.id)
                  .map((deta, i) => {
                    return (
                      <div
                        key={i}
                        className={`w-[45%] h-48 cursor-pointer md:w-40 flex justify-center items-center px-2 py-2 flex-col space-y-4 border-2 border-[#C2D1E7] ${
                          data.id === clickk && "border-2 border-[#db8d44]"
                        }`}
                        onClick={() => {
                          dispatch(setclickk(data.id));
                          console.log(clickk, "clique");
                          console.log(i, "i sur clique");
                          console.log(louer_vendre, "change");
                        }}
                      >
                        <img
                          src={deta.image}
                          alt=""
                          className="w-20 h-20 object-cover"
                        />
                        <span className="text-center">{data.nom}</span>
                      </div>
                    );
                  });
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
      </div>
      <Footer />
    </div>
  );
}
