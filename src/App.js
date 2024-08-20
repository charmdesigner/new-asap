import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Form/Register";
import "./assets/css/styles.scss";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new-asap" exact element={<Home />} />
        <Route path="/new-asap/register" exact element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
