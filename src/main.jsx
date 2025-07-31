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
import BlogPageLayouts from "./Layouts/BlogPageLayouts";
import BlogDetails from "./Components/BlogPageComponents/BlogDetails";
import UnderConstruction from "./OtherComponents/UnderConstruction";
import LoginRequired from "./OtherComponents/LoginRequired";
import PrivetRout from "./Auth/Privet/Privetrought";
import CustomLoader from "./OtherComponents/CustomLoader";
import AllProjectsPage from "./Layouts/ProjectsPageLayouts";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/a" element={<UnderConstruction />} />
        <Route path="/b" element={< LoginRequired />} />


        <Route element={<MainLayOuts />}>

          <Route path="/" element={<HomePageLayOuts />} />

          <Route path="/about" element={<AboutPageLayOuts />} />

          <Route path="/contact" element={<ContactPageLayouts />} />

          <Route path="/blogs"
            element={
              <PrivetRout>
                <BlogPageLayouts />
              </PrivetRout>}
          />

          <Route path="/blogs/:id"
            element={
              <PrivetRout>
                <BlogDetails />
              </PrivetRout>}
          />

          <Route path="/projects"
            element={
              <PrivetRout>
                <AllProjectsPage />
              </PrivetRout>}
          />

          <Route path="/team" element={<CustomLoader />} />


        </Route>
      </Routes>

    </AuthProvider>
  </BrowserRouter>,
);