/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import InputField from "../components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function Register() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password_confirm, setpassword_confirm] = useState("");
  const [progress, setprogress] = useState(false);
  const [louer_vendre, setlouer_vendre] = useState("Profil");
  const dispatch = useDispatch();

  const reg = () => {
    if (!email) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez renseigner l'email",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    if (!password) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez renseigner le mot de passe",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    if (!password_confirm) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez renseigner le mot de passe de confirmation",
        showConfirmButton: false,
        timer: 2000,
      });
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      if (email && password && password_confirm) {
        if (password === password_confirm) {
          setprogress(true);
          // const parraincode = makeid(5) + username + makeid(5);
          // console.log(parraincode);
          console.log("premiere etape");
          console.log(louer_vendre, "valeur du type etape");
          console.log(email, "valeur du mail etape");
          console.log(password, "valeur du password etape");
          Axios.post(`${import.meta.env.VITE_BASE_URL}register`, {
            email: email,
            password: password,
            // code_parrain: parraincode,
            type: louer_vendre,
          }).then((res) => {
            console.log("deuxieme etape");

            if (res.data.regist === false) {
              if (res.data.message === "Ce nom d'utilisateur existe déjà !") {
                // if(response.data.error === "L'utilisateur n'existe pas"){
                Swal.fire({
                  position: "top-end",
                  icon: "error",
                  title: "Ce mail existe déjà !",
                  showConfirmButton: false,
                  timer: 2000,
                });
                setprogress(false);
              }
              if (res.data.message === "Ce code de parrainage existe déjà !") {
                // if(response.data.error === "L'utilisateur n'existe pas"){
                Swal.fire({
                  position: "top-end",
                  icon: "error",
                  title: "Ce mail existe déjà !",
                  showConfirmButton: false,
                  timer: 2000,
                });
                setprogress(false);
              }
            } else {
              console.log("troisieme etape");

              setpassword("");
              setpassword_confirm("");
              setemail("");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Compte créer avec success",
                showConfirmButton: false,
                timer: 2000,
              });

              setTimeout(() => {
                navigate("/login");
              }, 2000);
            }
            setprogress(false);
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Non conformiter des mot de passes",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez renseigner un mail au bon format",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    // }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-10 md:mx-0 md:max-w-[400px] md:flex md:flex-row  lg:mb-10 md:items-center md:justify-center family">
        {/* Sign in section */}
        <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="text-4xl font-bold text-center mb-6 text-navy-700 dark:text-white">
            Inscription
          </h4>
          {/* <p className="mb-9 ml-1 text-base text-gray-600">
        Enter your email and password to sign in!
      </p> */}
          <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
            <div className="rounded-full text-xl">
              <FcGoogle />
            </div>
            <h5 className="text-sm font-medium text-navy-700 dark:text-white">
              Inscription avec Google
            </h5>
          </div>
          <div className="mb-6 flex items-center  gap-3">
            <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
            <p className="text-base text-gray-600 dark:text-white"> or </p>
            <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          </div>
          <div className="w-full mb-6">
            <div className="bg-transparent border-2 border-[rgb(40,71,109)] px-1 py-1 w-full flex justify-center items-center rounded-md shadow">
              <div
                className={`w-1/2 justify-center items-center px-2 py-2 ${
                  louer_vendre === "Profil" && "bg-[rgb(40,71,109)] text-white"
                } rounded-md text-center cursor-pointer`}
                onClick={() => setlouer_vendre("Profil")}
              >
                {" "}
                Profil
              </div>
              <div
                className={`w-1/2 justify-center items-center px-2 py-2 ${
                  louer_vendre === "Agence" && "bg-[rgb(40,71,109)] text-white"
                } rounded-md text-center cursor-pointer`}
                onClick={() => setlouer_vendre("Agence")}
              >
                {" "}
                Agence
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="mb-3"> 
            <label
              htmlFor={"email"}
              className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium
        `}
            >
              {"Email"} <span className="text-red-600">*</span>
            </label>
            <input
              // disabled={"disabled"}
              type={"email"}
              id={"email"}
              placeholder={"mail@simmmple.com"}
              className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                // disabled === true
                //   ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                //   : state === "error"
                //   ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                //   : state === "success"
                //   ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                //   : "border-gray-200 dark:!border-white/10 dark:text-white"
              }`}
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>
          {/* <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        /> */}

          {/* Password */}
          <div className="mb-3">
            <label
              htmlFor={"password"}
              className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium
        `}
            >
              {"Mot de passe"} <span className="text-red-600">*</span>
            </label>
            <input
              // disabled={"disabled"}
              type={"password"}
              id={"password"}
              placeholder={"Min. 8 characters"}
              className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                // disabled === true
                //   ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                //   : state === "error"
                //   ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                //   : state === "success"
                //   ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                //   : "border-gray-200 dark:!border-white/10 dark:text-white"
              }`}
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor={"password"}
              className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium
        `}
            >
              {"Mot de passe de confirmation"}{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              // disabled={"disabled"}
              type={"password"}
              id={"password"}
              placeholder={"Min. 8 characters"}
              className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                // disabled === true
                //   ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                //   : state === "error"
                //   ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                //   : state === "success"
                //   ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                //   : "border-gray-200 dark:!border-white/10 dark:text-white"
              }`}
              onChange={(e) => setpassword_confirm(e.target.value)}
              value={password_confirm}
            />
          </div>
          {/* <InputField
          variant="auth"
          extra="mb-3"
          label="Mot de passe*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />

        <InputField
          variant="auth"
          extra="mb-3"
          label="Mot de passe de confirmation*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        /> */}
          {/* Checkbox */}
          {progress ? (
            <div className="w-full flex justify-center items-center mt-24 ml-10 flex-col">
              <div className="containerner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="flex w-full justify-center items-center -ml-24">
                Chargement
              </span>
            </div>
          ) : (
            <button
              onClick={() => reg()}
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              S'enregister
            </button>
          )}

          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Vous avez déjà un compte ?
            </span>
            <Link
              to="/login"
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Connectez vous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
