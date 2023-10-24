/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { FiChevronLeft } from "react-icons/fi";
import { Footer } from "../components/Footer";
import Card from "../components/Card";
import { Categotydata, data2 } from "./Home";

export default function Details_agence() {
  const id = useSelector((state) => state.trigger.id);
  let { ide } = useParams();
  return (
    <div>
      <Nav />
      <div className="lg:px-60 bg-[#F7F9FB] w-full flex flex-col md:flex-row justify-between items-start md:items-center py-4">
        <div className="flex justify-center items-start space-x-4 m-2">
          <div className="h-40 w-40">
            <img
              src={
                "https://images.unsplash.com/photo-1618381801643-3d253a63a386?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFnZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
              }
              alt="R"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-start space-y-14">
            <Link className="flex justify-center items-center space-y-0 cacher">
              <FiChevronLeft className="mt-1" />
              <span className="">retour</span>
            </Link>
            <span className="text-[#1C3452] text-3xl font-semibold">
              Agence Name
            </span>
          </div>
        </div>
        <div className="flex justify-center items-start space-x-6 m-2">
          <div className="px-3 cursor-pointer py-2 no-underline rounded-xl border-1 bg-[rgb(61,108,169)] flex justify-center items-center space-x-3">
            <span className="text-[#ffffff]">Contacter</span>
          </div>
          <div className="px-3 cursor-pointer py-2 no-underline rounded-xl border-1 border-[rgb(61,108,169)] flex justify-center items-center space-x-3">
            <span className="text-[#3d6ca9]">Appeller</span>
          </div>
        </div>
      </div>
      <div className="lg:px-60 justify-center items-start flex flex-col my-4 mx-3">
        <div className="w-full flex flex-col justify-center items-start wrapper">
          {/* <div className="w-full md:w-96 h-72"></div> */}
          <div className="textbox">
            <h2 className="">À propos de cette Agence</h2>
            <img
              src="https://images.unsplash.com/photo-1559125148-869baf508c95?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="fn5"
              className="w-full md:w-96 h-72 float-right mb-2 md:m-4 object-cover rounded-md"
            />
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              aliquam praesentium numquam molestiae ab, nulla, possimus autem
              velit dolorum, vel dicta rem veritatis minus ullam ipsum eligendi
              hic debitis vero quaerat! Ea exercitationem blanditiis
              voluptatibus odit iusto ducimus aperiam doloremque labore corrupti
              tenetur dolore cupiditate explicabo quidem omnis aliquid modi
              distinctio deleniti, esse possimus suscipit repellendus quia. Quis
              itaque, minima enim voluptate iste reprehenderit iure pariatur
              veniam facilis eaque. A tempora minus quam magni ad voluptates,
              quia aliquid voluptatum atque nobis ea culpa impedit amet iure
              totam aspernatur. Quaerat totam laudantium laborum temporibus
              voluptatibus dolorum non suscipit sint soluta nam! hic debitis
              vero quaerat! Ea exercitationem blanditiis voluptatibus odit iusto
              ducimus aperiam doloremque labore corrupti tenetur dolore
              cupiditate explicabo quidem omnis aliquid modi distinctio
              deleniti, esse possimus suscipit repellendus quia. Quis itaque,
              minima enim voluptate iste reprehenderit iure pariatur veniam
              facilis eaque. A tempora minus quam magni ad voluptates, quia
              aliquid voluptatum atque nobis ea culpa impedit amet iure totam
              aspernatur. Quaerat totam laudantium laborum temporibus
              voluptatibus dolorum non suscipit sint soluta nam! hic debitis
              vero quaerat! Ea exercitationem blanditiis voluptatibus odit iusto
              ducimus aperiam doloremque labore corrupti tenetur dolore
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-[#F7F9FB] rounded-md mb-2 space-y-2 w-full px-2 py-2 flex flex-col justify-center items-start">
            <span className="text-gray-500">
              <span className="text-[#1C3452] text-xl font-semibold">Adresse : </span>Boulevard d'Avroy 206 4000 Liége
            </span>
            <span className="text-gray-500">
              <span className="text-[#1C3452] text-xl font-semibold">N° IPI : </span>507.022
            </span>
          </div>
          <div className="position-relative rounded overflow-hidden h-[250px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.824963730526!2d2.3947506957338534!3d6.368233316016728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023557610355d47%3A0xfb109b989b41250!2sPLANETECH%20Sarl!5e0!3m2!1sfr!2sbj!4v1698143500540!5m2!1sfr!2sbj"
              className="position-relative w-full h-full"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="lg:px-60 justify-center items-start flex flex-col my-4 mx-3">
        <h2 className="text-2xl font-bold text-start text-gray-800 dark:text-gray-400">
          Biens à vendre !
        </h2>
        <div className="w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 family">
            {data2.map((data, i) => {
              return <Card key={i} />;
            })}
          </div>
        </div>
      </div>
      <div className="lg:px-60 justify-center items-start flex flex-col my-4 mx-3">
        <h2 className="text-2xl font-bold text-start text-gray-800 dark:text-gray-400">
          Biens à louer !
        </h2>
        <div className="w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 family">
            {data2.map((data, i) => {
              return <Card key={i} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
