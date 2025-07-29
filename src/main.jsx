import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPageLayOuts from "./Layouts/AboutPageLayouts";
import HomePageLayOuts from "./Layouts/HomePageLayOuts";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePageLayOuts />} />
    </Routes>


    <Routes>
      <Route path="/about" element={<AboutPageLayOuts />} />
    </Routes>


  </BrowserRouter>,
);