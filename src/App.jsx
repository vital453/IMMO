/* eslint-disable no-unused-vars */
import { useState } from "react";
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
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/a_louer" element={<Alouer />} />
          <Route path="/a_vendre" element={<Avendre />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/detail" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<Post />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/societe" element={<Societe />} />
          {/* <Route path='*' exact={true} component={<Notfoud />} /> */}
          <Route path="notfound" element={<Notfoud />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
