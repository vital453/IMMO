/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Onboarding from "./page/Onboarding";
import Profile from "./page/Profile";
import Details from "./page/Details";
import Login from "./page/Login";
import Register from "./page/Register";
import Service from "./page/Service";
import Historique from "./page/Historique";
import Post from "./page/Post";
import Alouer from "./page/Alouer";
import Avendre from "./page/Avendre";
import Publication from "./page/Publication";
import Societe from "./page/Societe";
import Notfoud from "./page/Notfoud";
import Agence from "./page/Agence";
import Details_agence from "./page/Details_agence";
import Search1 from "./page/Search1";
import Nav from "./components/Nav";
import { useDispatch } from "react-redux";
import { recupUser } from "./feature/AuthSlice";
import Mes_publication from "./page/Mes_publication";
function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user") + "")) {
      dispatch(recupUser(JSON.parse(localStorage.getItem("user") + "")));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}

        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/a_louer" element={<Alouer />} />
          <Route path="/a_vendre" element={<Avendre />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/mes_publication" element={<Mes_publication />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route
            path="/search/:search/:louer_vendre/:categorie/:prixmin/:prixmax"
            element={<Search1 />}
          />
          {/* <Route path="/produit/:id" element={<ProductInfos />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<Post />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/societe" element={<Societe />} />
          <Route path="/agencies" element={<Agence />} />
          <Route path="/agence/:id" element={<Details_agence />} />
          {/* <Route path='*' exact={true} component={<Notfoud />} /> */}
          <Route path="notfound" element={<Notfoud />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
