/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Categotydata } from "./Home";
import { fn5 } from "../../public";
import {
  BsFileRuledFill,
  BsBookmark,
  BsArrowsAngleExpand,
  BsTelephoneFill,
} from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { ImPower } from "react-icons/im";
import { GiWaterDrop } from "react-icons/gi";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import { MdAssuredWorkload } from "react-icons/md";
import Detailhome from "../components/Detailhome";
export default function Details() {
  console.log(Categotydata);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [image, setimage] = useState("fn5.jpg");
  const updateScreen = () => {
    const width = window.innerWidth;
    setWidth(width);
  };
  window.addEventListener("resize", updateScreen);
  if (width < 500) {
    return (
      // <div className="w-full h-full  family">
      //   <div className="h-[350px] w-full relative">
      //     <img
      //       src="fn5.jpg"
      //       alt="phot"
      //       className="h-full w-full object-cover"
      //     />
      //     <div className="absolute top-1 p-4 flex justify-between items-center w-full ">
      //       <div className="h-10 w-10  backdrop-blur-xl flex justify-center items-center rounded-full space-x-1 got">
      //         <div
      //           className="text-xl text-yellow-400/75"
      //           onClick={() => navigate("/home")}
      //         >
      //           <FiArrowLeft />
      //         </div>
      //       </div>
      //       <div className="h-10 w-10  backdrop-blur-xl flex justify-center items-center rounded-full space-x-1 got">
      //         <div className="text-xl text-yellow-400/75">
      //           <BsBookmark />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="bg-[rgb(32,46,56)] hori">
      //     {Categotydata.map(
      //       (data, i) => (
      //         //  {return
      //         <div key={i} className="horicontent">
      //           {/* <span>dfd</span> */}
      //           <img
      //             src={data.image}
      //             alt="phot"
      //             className="h-full w-full object-cover rounded-xl"
      //           />
      //         </div>
      //       )
      //       // }
      //     )}
      //   </div>
      //   <div className="bg-white h-[100px] w-full rounded-t-[40px] -mt-8 px-4 py-6">
      //     <div className="w-full flex justify-between items-center">
      //       <div className="">
      //         <span className="text-neutral-800/75 text-xl font-bold">
      //           {" "}
      //           Nom de votre appartement{" "}
      //         </span>
      //       </div>
      //       <div className="px-4 py-4  flex  justify-center items-center rounded-lg border-[rgba(43,43,43,0.71)] border">
      //         <span className="text-[16px] font-bold text-neutral-800">
      //           1.500.000 FCFA
      //         </span>
      //         <span className="text-[14px] text-gray-400">/mois</span>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="bg-white w-full px-4 py-6">
      //     <div className="w-full flex justify-between items-center gap-3 mt-4">
      //       <div className="w-1/2 flex justify-center items-center space-x-2">
      //         <div className="px-4 py-2 bg-[rgba(248,247,188,0.47)] rounded-xl">
      //           <BsArrowsAngleExpand className="text-xl text-yellow-400/75" />
      //         </div>
      //         <div className="flex flex-col justify-start items-start">
      //           <span className="text-gray-400 font-semibold text-sm">
      //             Dimenssion
      //           </span>
      //           <span className="text-neutral-900 font-bold text-sm">
      //             1OO m²
      //           </span>
      //         </div>
      //       </div>
      //       <div className="w-1/2 flex justify-center items-center space-x-2">
      //         <div className="px-4 py-2 bg-[rgba(248,247,188,0.47)] rounded-xl">
      //           <BiSolidHomeAlt2 className="text-xl text-yellow-400/75" />
      //         </div>
      //         <div className="flex flex-col justify-start items-start">
      //           <span className="text-gray-400 font-semibold text-sm">
      //             Chambre
      //           </span>
      //           <span className="text-neutral-900 font-bold text-sm">5</span>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="w-full flex justify-between items-center gap-3 mt-4">
      //       <div className="w-1/2 flex justify-center items-center space-x-3">
      //         <div className="px-4 py-2 bg-[rgba(248,247,188,0.47)] rounded-xl">
      //           <ImPower className="text-xl text-yellow-400/75" />
      //         </div>
      //         <div className="w-1/2 flex flex-col justify-start items-start">
      //           <span className="text-gray-400 font-semibold text-sm">
      //             Electricité
      //           </span>
      //           <span className="text-neutral-900 font-bold text-sm">
      //             Compteur personnel
      //           </span>
      //         </div>
      //       </div>
      //       <div className="flex justify-center items-center space-x-2">
      //         <div className="px-4 py-2 bg-[rgba(248,247,188,0.47)] rounded-xl">
      //           <GiWaterDrop className="text-xl text-yellow-400/75" />
      //         </div>
      //         <div className="flex flex-col justify-start items-start">
      //           <span className="text-gray-400 font-semibold text-sm">Eau</span>
      //           <span className="text-neutral-900 font-bold text-sm">
      //             compteur communs
      //           </span>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="w-full flex justify-start items-center gap-3 mt-4">
      //       <div className="flex justify-center items-center space-x-2">
      //         <div className="px-4 py-2 bg-[rgba(248,247,188,0.47)] rounded-xl">
      //           <BsFileRuledFill className="text-xl text-yellow-400/75" />
      //         </div>
      //         <div className="flex flex-col justify-start items-start">
      //           <span className="text-gray-400 font-semibold text-sm">
      //             Condition
      //           </span>
      //           <span className="text-neutral-900 font-bold text-sm">
      //             4 mois d'Avances et 3 mois de cautions
      //           </span>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="w-full mt-10">
      //       <span className="text-neutral-800/75 text-xl font-bold">
      //         {" "}
      //         Localisation{" "}
      //       </span>
      //     </div>
      //     <div className="flex justify-start items-center w-full space-x-2">
      //       <div className="text-4xl text-yellow-400/75 font-bold">
      //         <CiLocationOn />
      //       </div>
      //       <div className="flex justify-center items-start">
      //         <span className="text-gray-400 text-xl">Parakou </span>
      //         <span className="text-gray-400 text-xl">- Sinangourou</span>
      //       </div>
      //     </div>
      //     <div
      //       className="w-full fadeIn mt-3"
      //       data-wow-delay="0.5s"
      //       //   style={{ minHeight: "450px" }}
      //     >
      //       <div className="position-relative rounded overflow-hidden h-72 w-full">
      //         <iframe
      //           className="position-relative w-full h-full"
      //           style={{ minHeight: "450px", border: "0px" }}
      //           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15748.110755043213!2d2.6384076!3d9.3308138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10321b8d61029ea7%3A0xb81bfeee4635ccff!2sPharmacie%20du%20Campus!5e0!3m2!1sfr!2sbj!4v1694621000046!5m2!1sfr!2sbj"
      //           width="600"
      //           height="450"
      //           allowfullscreen=""
      //           loading="lazy"
      //           referrerpolicy="no-referrer-when-downgrade"
      //         ></iframe>
      //       </div>
      //     </div>
      //     <div className="w-full mt-10">
      //       <span className="text-neutral-800/75 text-xl font-bold">
      //         {" "}
      //         A propos de la chambre{" "}
      //       </span>
      //     </div>
      //     <div className="w-full pp">
      //       <p className="text-gray-700 text-base text-justify mt-2 ppp">
      //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ut
      //         dolor animi dolore, magni a ratione eveniet officiis inventore
      //         itaque repellat. Nostrum, nulla eligendi exercitationem quis
      //         molestiae animi dolorem impedit beatae eius, fugit voluptatem.
      //         Dolorem aliquid quidem non, incidunt, quaerat ipsam laboriosam
      //         porro, fuga itaque assumenda commodi quas doloribus adipisci ipsa
      //         sed nesciunt repudiandae quos molestias temporibus. Exercitationem
      //         dolor earum veniam eius beatae est voluptatem quidem eligendi vel
      //         sapiente facilis, optio fugit velit enim? Velit molestias sed
      //         rerum excepturi alias? Nostrum ullam cum tempora accusantium
      //         possimus distinctio iusto debitis suscipit quam libero!
      //         Accusantium quas ducimus beatae? Temporibus aliquid eaque dolorem
      //         nobis soluta nam distinctio, unde blanditiis saepe laboriosam
      //         voluptate iste possimus quas beatae id reiciendis velit voluptas
      //         veniam iusto? Vel?
      //       </p>
      //     </div>
      //     <div className="w-full flex justify-start items-center gap-3 mt-4">
      //       <div className="flex justify-center items-center space-x-2">
      //         <div className="px-4 py-2 bg-[rgba(248,247,188,0.47)] rounded-xl">
      //           <BsTelephoneFill className="text-xl text-yellow-400/75" />
      //         </div>
      //         <div className="flex flex-col justify-start items-start">
      //           <span className="text-gray-400 font-semibold text-sm">
      //             Contacter le démarcheur
      //           </span>
      //           <span className="text-neutral-900 font-bold text-sm">
      //             +229 61940010 - +229 40879198
      //           </span>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center family">
          <div className="h-[350px] w-full relative">
            <img
              src={image}
              alt="phot"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-1 p-4 flex justify-between items-center w-full ">
              <div className="h-10 w-10  backdrop-blur-xl flex justify-center items-center rounded-full space-x-1 got">
                <div
                  className="text-xl text-yellow-400/75"
                  onClick={() => navigate("/home")}
                >
                  <FiArrowLeft />
                </div>
              </div>
              <div className="h-10 w-10  backdrop-blur-xl flex justify-center items-center rounded-full space-x-1 got">
                <div className="text-xl text-yellow-400/75">
                  <BsBookmark />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white horiz">
            <div
              className="horicontent rounded-md"
              onClick={() =>
                setimage(
                  "fn5.jpg"
                )
              }
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src="fn5.jpg"
                alt=""
              />
            </div>
            <div
              className="horicontent rounded-md"
              onClick={() =>
                setimage(
                  "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                )
              }
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
              />
            </div>
            <div
              className="horicontent rounded-md"
              onClick={() =>
                setimage(
                  "https://images.unsplash.com/photo-1630699375895-fe5996d163ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                )
              }
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1630699375895-fe5996d163ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div
              className="horicontent rounded-md"
              onClick={() =>
                setimage(
                  "https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFwcGFydGVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                )
              }
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFwcGFydGVtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div
              className="horicontent rounded-md"
              onClick={() =>
                setimage(
                  "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                )
              }
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div
              className="horicontent rounded-md"
              onClick={() =>
                setimage(
                  "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                )
              }
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
              />
            </div>
            <div
              className="horicontent rounded-md"
              onClick={() =>
                setimage(
                  "https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
                )
              }
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
                alt=""
              />
            </div>
            <div
              className="horicontent rounded-md"
              onClick={() =>
                setimage(
                  "https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                )
              }
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div
              className="horicontent rounded-md"
              onClick={() =>
                setimage(
                  "https://plus.unsplash.com/premium_photo-1675615949585-36aaf4cb778d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
                )
              }
            >
              <img
                className="object-cover w-full h-full rounded-md"
                src="https://plus.unsplash.com/premium_photo-1675615949585-36aaf4cb778d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
                alt=""
              />
            </div>
          </div>
          <Detailhome choose={false} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <Nav />
        <div className="w-full flex flex-col justify-center items-center family">
          <div className="bg-[#F7F7FB] w-full flex justify-between items-center px-6 py-3">
            <div className="flex flex-col justify-center items-start space-y-3">
              <div className="">
                <span className="text-[#1C3452] text-3xl font-semibold">
                  Nom de l'appartement
                </span>
              </div>
              <div className="">
                <span className="text-gray-400">2 chambres </span>
                <span className="text-gray-400">| 120 m²</span>
              </div>
              <div className="">
                <span className="text-[#263d58] text-xl">localisation</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="">
                <span className="text-[#1C3452] text-3xl font-semibold">
                  1.500.000 FCFA
                </span>
              </div>
              <div className="px-3 cursor-pointer py-2 no-underline rounded-xl border-1 border-[rgb(61,108,169)] flex justify-center items-center space-x-3">
                <MdAssuredWorkload className="text-xl" />
                <span>Assurer ce bien pour 150.000 FCFA</span>
              </div>
            </div>
          </div>
          <Detailhome choose={true} />
        </div>
      </div>
    );
  }
}
