/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { recupmaison_apparte } from "../feature/postSlice";
import { useEffect } from "react";
import Card from "../components/Card";

export default function Mes_publication() {
  const dispatch = useDispatch();
  const maison_apparte = useSelector((state) => state.post.maison_apparte);
  const userid = useSelector((state) => state.auth.user);
  console.log(userid.userId, "val de lid");
  const get_all_maison_apparte = () => {
    // console.log(`${process.env.baseurl}` + "valuer enviro");
    Axios.get(
      `${import.meta.env.VITE_BASE_URL}get_all_maison_apparte1`,
      {}
    ).then((response) => {
      if (response.data[0]) {
        console.log(response.data);
        dispatch(recupmaison_apparte(response.data));
        // localStorage.setItem("change_version", "non");
      }
    });
  };
  useEffect(() => {
    get_all_maison_apparte();
  }, []);
  return (
    <div className="w-full">
      <Nav />
      {userid.userId}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-4 md:px-32 family">
        {maison_apparte[0] ? (
          maison_apparte
            .filter((t) => parseInt(t.id_creator) == parseInt(userid.userId))
            .map((data, index) => {
              return <Card key={index} data={data} />;
            })
        ) : (
          <>
            <div className="flex justify-center items-center w-full mb-8 mt-8">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <img src={`${import.meta.env.VITE_BASE_URL}uploads/gs.png`} alt="" />
                <span>Auncun resultat</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
