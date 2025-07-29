import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPageLayOuts from "./Layouts/AboutPageLayouts";
import HomePageLayOuts from "./Layouts/HomePageLayOuts";
import MainLayOuts from "./Layouts/MainLayOuts";
import NotFound from "./Components/FixedComponents/NotFound";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />


      <Route element={<MainLayOuts />}>

        <Route path="/" element={<HomePageLayOuts />} />

        <Route path="/about" element={<AboutPageLayOuts />} />

      </Route>
    </Routes>

  </BrowserRouter>,
);