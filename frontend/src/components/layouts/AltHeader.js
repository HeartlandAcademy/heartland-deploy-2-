/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import styled from "styled-components";

import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/others/Logo1.png";
import Extra from "../contents/Extra";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TopNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 2.8rem;
  align-items: center;
  height: 43px;
  --tw-bg-opacity: 1;
  background-color: rgb(247 247 247 / var(--tw-bg-opacity));
  border-bottom: 1px solid #dee2e6 !important;
  @media (max-width: 522px) {
    font-size: 14px;
    padding: 0px 1px;
  }
`;

const Number = styled.span`
  @media (max-width: 766px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavLinks = styled.div`
  a {
    font-size: 13.5px;
    text-transform: uppercase;
    font-weight: 600;
  }
  @media (max-width: 1047px) {
    display: none;
  }
`;

const Bar = styled.div`
  color: #111;
  font-size: 34px;
  display: none;
  cursor: pointer;
  @media (max-width: 1047px) {
    display: flex;
    margin-left: auto;
    padding-right: 20px;
  }
`;

const NavDropDown = styled.div`
  flex-direction: column;
  background-color: #fff;
  width: 310px;
  height: 100vh;
  position: fixed;
  top: 0;
  color: red;
  z-index: 99999;
  -webkit-transition: 0.8s ease all;
  transition: 0.8s ease all;
  left: -500px;
  transform: ${(props) => (props.sideBar ? "translateX(500px)" : "")};
  box-shadow: ${(props) =>
    props.sideBar ? "0 0 0 10000px rgba(0, 0, 0, 0.5)" : "0"};
  overflow-x: auto;
  @media (min-width: 1047px) {
    display: none;
  }
`;

const NavDropDownMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: #3459e6;
  align-items: center;
  color: #fff;
  i {
    font-size: 24px;
  }
  h3 {
    color: #fff;
  }
`;

const NavDropDownItems = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

const NavDropDownItem = styled.li`
  line-height: 45px;
  border-bottom: 1.8px solid #111;
  a {
    color: #111;
    position: relative;
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    display: block;
    padding-left: 8px;
    &:hover {
    }
  }
  span {
    font-size: 18px;
    margin-left: 2px;
  }
`;

const AltHeader = () => {
  const [sideBar, setSideBar] = useState(false);
  const [hafam, setHafam] = useState(false);

  useEffect(() => {
    document.onclick = function (e) {
      if (sideBar && e.target.id !== "sideMenu") {
        setSideBar(false);
      }
      if (sideBar && e.target.id === "sideMenu2") {
        setSideBar(true);
      }
    };
  });
  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  const router = useHistory();

  return (
    <>
      <TopNav>
        <span style={{ display: "flex", gap: "1.8rem" }}>
          <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/heartlandcentreforwomen"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=9843445346"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          {/* <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/heartlandcentreforwomen"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a> */}

          <a href="viber://add?number=9843445346">
            <i className="fab fa-viber"></i>
          </a>
        </span>
        <span>
          {" "}
          <span
            style={{
              marginRight: "20px",
              borderLeft: "1px solid #dee2e6",
              padding: "15px 18px",
              fontSize: "13px",
            }}
          >
            <i className="fas fa-phone-alt mr-2"></i> 01-5906017
          </span>
          <Number
            style={{
              borderLeft: "1px solid #dee2e6",
              padding: "15px 18px",
              fontSize: "13px",
            }}
          >
            <i className="fas fa-map-marker-alt mr-2"></i> Bafal-13, Kathmandu
          </Number>
          <Number
            onClick={() => router.push("/admin/login")}
            style={{
              borderLeft: "1px solid #dee2e6",
              padding: "15px 0 15px 18px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Login
          </Number>
        </span>
      </TopNav>
      <nav
        className="navbar navbar-expand-lg text-primary bg-light sticky-top py-1"
        style={{ padding: "0 2.8rem" }}
      >
        <a className="navbar-brand pt-0 pb-0" href="/">
          <img src={Logo} alt="logo" style={{ height: "70px" }} />{" "}
        </a>
        <NavLinks className="ms-auto" id="navbarNavDropdown">
          <ul className="navbar-nav navbarNav">
            <StyledLink exact activeClassName="altSelected" to="/">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#232323" }}>
                  Home
                </a>
              </li>
            </StyledLink>

            <StyledLink exact activeClassName="altSelected" to="/about">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#232323" }}>
                  About
                </a>
              </li>
            </StyledLink>

            <StyledLink exact activeClassName="altSelected" to="/clinic">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#232323" }}>
                  HCW Clinic
                </a>
              </li>
            </StyledLink>

            <StyledLink exact activeClassName="altSelected" to="/gallery">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#232323" }}>
                  Gallery
                </a>
              </li>
            </StyledLink>

            <StyledLink exact activeClassName="altSelected" to="/contact">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#232323" }}>
                  Contact
                </a>
              </li>
            </StyledLink>
          </ul>
        </NavLinks>
        <Bar>
          <i className="fas fa-bars" onClick={showSideBar}></i>
        </Bar>
      </nav>
      <NavDropDown sideBar={sideBar} id="sideMenu">
        <NavDropDownMenu id="sideMenu">
          <h3>Menu</h3>
          <i className="fas fa-times" onClick={closeSideBar}></i>
        </NavDropDownMenu>
        <NavDropDownItems>
          <NavDropDownItem>
            <StyledLink exact activeClassName="drop-active" to="/">
              <a>Home</a>
            </StyledLink>
          </NavDropDownItem>
          <NavDropDownItem>
            <StyledLink exact activeClassName="drop-active" to="/about">
              <a>About</a>
            </StyledLink>
          </NavDropDownItem>

          <NavDropDownItem>
            <StyledLink exact activeClassName="drop-active" to="/clinic">
              <a>HCW Clinic</a>
            </StyledLink>
          </NavDropDownItem>

          <NavDropDownItem>
            <StyledLink exact activeClassName="drop-active" to="/gallery">
              <a>Gallery</a>
            </StyledLink>
          </NavDropDownItem>

          <NavDropDownItem>
            <StyledLink exact activeClassName="drop-active" to="/contact">
              <a>Contact</a>
            </StyledLink>
          </NavDropDownItem>
        </NavDropDownItems>
      </NavDropDown>
    </>
  );
};

export default AltHeader;
