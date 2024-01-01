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
import WLogin from "./pages/_womenSection/login";

import AltHeader from "./layouts/AltHeader";
import Home from "./pages/_womenSection/home";
import Footer from "./layouts/AltFooter";
import AboutUs from "./pages/_womenSection/about";
import NotFoundPage from "./contents/404";
import WomenGallery from "./pages/_womenSection/Gallery/index";
import WomenSingleGallery from "./pages/_womenSection/Gallery/SingleGallery";
import WContact from "./pages/Contact/WomenContact";

import AdminWModal from "./pages/ModalCreate/WModalCreate";
import WAdminImages from "./pages/GalleryCreate/WGalleryCreate";
import AdminTopNav from "./layouts/AdminTopNav";
import AdminWomenNav from "./layouts/AdminWomenNav";
import AdminWCarousel from "./pages/CarouselCreate/WCarouselCreate";
import AdminAllWCarousel from "./pages/Carousel/WCarousel";
import AdminGallery from "./pages/_womenSection/Gallery/AdminGallery";
import AdminSingleGallery from "./pages/_womenSection/Gallery/AdminSingleGallery";
import Admin404 from "./contents/Admin404";
import WTestimonialCreate from "./pages/TestimonialCreate/WTestimonialCreate";

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
  const settings = useSelector((state) => state.settings);
  const { adminMode, darkMode, sidebarToggle } = settings;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Router>
      {adminMode && adminMode && userInfo && userInfo ? (
        <>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            theme={darkMode ? "dark" : "light"}
            limit={3}
          />
          <AdminTopNav />
          <Menu style={{ background: darkMode ? "#303134" : "#fff" }}>
            <AdminWomenNav />
            <Whole darkmode={darkMode} sidebar={sidebarToggle}>
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/admin/carousel" />
                </Route>
                <Route path="/admin/home" exact>
                  <Redirect to="/admin/carousel" />
                </Route>

                <Route path="/admin/modal" component={AdminWModal} exact />
                <Route
                  path="/admin/carousel"
                  component={AdminWCarousel}
                  exact
                />
                <Route
                  path="/admin/carousel/all"
                  component={AdminAllWCarousel}
                  exact
                />

                <Route path="/admin/albums" component={WAdminImages} exact />
                <Route
                  path="/admin/albums/all"
                  component={AdminGallery}
                  exact
                />
                <Route
                  path="/admin/albums/all/:id"
                  component={AdminSingleGallery}
                  exact
                />

                <Route
                  path="/admin/testimonials"
                  component={WTestimonialCreate}
                  exact
                />

                <Route exact component={Admin404} />
              </Switch>
            </Whole>
          </Menu>
        </>
      ) : (
        <>
          <AltHeader />
          <>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={AboutUs} exact />
              <Route path="/gallery" component={WomenGallery} exact />
              <Route path="/gallery/:id" component={WomenSingleGallery} exact />
              <Route path="/contact" component={WContact} exact />

              <Route path="/admin/login" component={WLogin} exact />

              <Route path="/" component={NotFoundPage} />
            </Switch>
          </>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default SubDomainApp;
