/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import InputField from "../components/fields/InputField";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setCredentials } from "../feature/AuthSlice";

// import { Checkbox, Typography } from "@material-tailwind/react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [progress, setprogress] = useState(false);
  const [louer_vendre, setlouer_vendre] = useState("Profil");
  const dispatch = useDispatch();

  const login = () => {
    if (!email) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez renseigner l'email",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (!password) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Veuillez renseigner le mot de passe",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (email && password) {
      // setShowLoading(true)
      setprogress(true);

      Axios.post(`${import.meta.env.VITE_BASE_URL}login`, {
        email: email,
        password: password,
        type: louer_vendre,
      }).then((response) => {
        // console.log(response);
        if (!response.data.auth) {
          // setloginStatus(false);
          // console.log(response.data);
          if (response.data.message === "L'utilisateur n'existe pas") {
            // if(response.data.error === "L'utilisateur n'existe pas"){
            // setUserExist(true);
            setprogress(false);
            // setTimeout(() => {
            //   setUserExist(false);
            // }, [5000]);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "L'utilisateur n'existe pas",
              showConfirmButton: false,
              timer: 1500,
            });
          } else if (response.data.message === "Mauvaise combinaison") {
            // }else if(response.data.error === "Mauvaise combinaison"){
            setpassword("");
            setprogress(false);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Mauvaise combinaison",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          // console.log(response.data);
          setprogress(false);

          dispatch(
            setCredentials({
              userId: response.data.idconnect,
              email: response.data.result[0].email,
              // token: response.data.token,    
              auth: response.data.auth,
            })
          );
          localStorage.setItem("authentificator", String(response.data.auth));
          setTimeout(() => {
            navigate("/home");
          }, 2000);
          // localStorage.setItem("email", String(response.data.result[0].email));

          // verifhash1(response.data.result[0].id);
        }
      });
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-10 md:mx-0 lg:mb-10 lg:items-center lg:justify-center family">
        {/* Sign in section */}
        <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="text-4xl font-bold text-center mb-6 text-navy-700 dark:text-white">
            Connexion
          </h4>
          {/* <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p> */}
          <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
            <div className="rounded-full text-xl">
              <FcGoogle />
            </div>
            <h5 className="text-sm font-medium text-navy-700 dark:text-white">
              Connexion avec Google
            </h5>
          </div>
          <div className="mb-6 flex items-center gap-3">
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
          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-end ">
            {/* <div className="flex items-center justify-center space-x-2">
            <Checkbox />
            <p className="text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div> */}
            {/* <Checkbox
            label={
              <Typography color="blue-gray" className="flex font-medium">
                I agree with the
                <Typography
                  as="a"
                  href="#"
                  color="blue"
                  className="font-medium transition-colors hover:text-blue-700"
                >
                  &nbsp;terms and conditions
                </Typography>
                .
              </Typography>
            }
          /> */}
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Mot de passe oublié ?
            </a>
          </div>
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
              onClick={() => login()}
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Connexion
            </button>
          )}

          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Vous n'avez pas de compte ?
            </span>
            <Link
              to="/register"
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Inscrivez vous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
