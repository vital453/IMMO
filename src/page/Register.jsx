/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import InputField from "../components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-10 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start family">
      {/* Sign in section */}
      <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="text-4xl font-bold text-center mb-6 text-navy-700 dark:text-white">
          Inscrption
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
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
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
        />
        {/* Checkbox */}

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          S'enregister
        </button>
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
  );
}
