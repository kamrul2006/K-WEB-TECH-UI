import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPageLayOuts from "./Layouts/AboutPageLayouts";
import HomePageLayOuts from "./Layouts/HomePageLayOuts";
import MainLayOuts from "./Layouts/MainLayOuts";
import NotFound from "./Components/FixedComponents/NotFound";
import ContactPageLayouts from "./Layouts/ContactPageLayouts";
import LoginPage from "./Auth/Users/Loginpage";
import AuthProvider from "./Auth/Providers/AuthProvider";
import SignupPage from "./Auth/Users/SignupPage";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />


        <Route element={<MainLayOuts />}>

          <Route path="/" element={<HomePageLayOuts />} />

          <Route path="/about" element={<AboutPageLayOuts />} />

          <Route path="/contact" element={<ContactPageLayouts />} />

        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
);