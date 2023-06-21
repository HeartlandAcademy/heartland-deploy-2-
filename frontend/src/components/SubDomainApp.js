import React from "react";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AltHeader from "./layouts/AltHeader";
import Home from "./pages/_womenSection/home";
import School from "./pages/School";
import Contact from "./pages/Contact";
import Footer from "./layouts/AltFooter";
import BOD from "./pages/HAFamily/BOD";
import Honorary from "./pages/HAFamily/Honorary";
import Staffs from "./pages/HAFamily/Staffs";
import News from "./pages/News";
import DetailedNews from "./pages/News/DetailedNews";
import Login from "./pages/Login";
import HeartlandGallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import TestimonailCreate from "./pages/TestimonialCreate";
import SingleGallery from "./pages/Gallery/SingleGallery";
import Notice from "./pages/Notice";
import Downloads from "./pages/Downloads";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import Alumni from "./pages/Alumni";
import Scholarship from "./pages/Scholarship";
import Events from "./pages/Events";
import College from "./pages/College";
import NotFoundPage from "./contents/404";
import Careers from "./pages/Careers";
import CareersInfo from "./pages/CareersInfo";

const Menu = styled.div`
  display: flex;
`;

const Whole = styled.div`
  background: ${(props) => (props.darkmode ? "#303134" : "#fff")};
  color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  width: 100%;
  margin-left: ${(props) => (props.sidebar ? "280px" : "80px")};
  transition: 0.3s;
  margin-top: 60px;
  overflow: hidden;
`;

const SubDomainApp = () => {
  return (
    <Router>
      <AltHeader />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutUs} exact />
        <Route path="/registration" component={Registration} exact />
        <Route path="/school" component={School} exact />
        <Route path="/college" component={College} exact />
        <Route path="/gallery/albums" component={HeartlandGallery} exact />
        <Route path="/gallery/albums/:id" component={SingleGallery} exact />
        <Route path="/gallery/videos" component={Videos} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/hafamily/bod" component={BOD} exact />
        <Route path="/hafamily/honorary" component={Honorary} exact />

        <Route path="/hafamily/staffs" component={Staffs} exact />
        <Route path="/alumni" component={Alumni} exact />
        <Route path="/scholarship" component={Scholarship} exact />
        <Route path="/news" component={News} exact />
        <Route path="/events" component={Events} exact />
        <Route path="/news/:id" component={DetailedNews} exact />
        <Route path="/notice" component={Notice} exact />
        <Route path="/downloads" component={Downloads} exact />
        <Route path="/careers" component={Careers} exact />
        <Route path="/careers/:id" component={CareersInfo} exact />

        {/* Admin */}
        <Route path="/admin/login" component={Login} exact />

        <Route path="/" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default SubDomainApp;
