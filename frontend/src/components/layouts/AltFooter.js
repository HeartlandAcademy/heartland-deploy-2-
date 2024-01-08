import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const SocialMedia = styled.div`
  a {
    color: #fff;
  }
`;

const AltFooter = () => {
  const getYear = () => {
    const d = new Date();
    let year = d.getFullYear();
    return year;
  };

  return (
    <footer
      className="text-center"
      style={{
        opacity: 1,
        color: "rgb(136 144 164)",
        backgroundColor: "rgb(38 43 53)",
      }}
    >
      <div className="container p-4">
        <section className="mt-3">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">HA (Womens Center)</h5>
              <p>
                Heartland Academy(HA) is a democratic school practicing quality
                and non-violent education which provides co-educational
                education from nursery all the way through to Plus Two.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">Quick Links</h5>

              <ul className="list-unstyled mb-0">
                <StyledLink to="/">
                  <li>
                    <a className="text-white">Home</a>
                  </li>
                </StyledLink>

                <StyledLink to="/about">
                  <li>
                    <a className="text-white">About Us</a>
                  </li>
                </StyledLink>

                <StyledLink to="/contact">
                  <li>
                    <a className="text-white">Contact</a>
                  </li>
                </StyledLink>

                <StyledLink to="/gallery/albums">
                  <li>
                    <a className="text-white">Gallery</a>
                  </li>
                </StyledLink>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">Helpful Links</h5>

              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a
                    href="https://www.forchildrights.org"
                    target="_blank"
                    className="text-white"
                  >
                    Introduction To CLCR
                  </a>
                </li>

                <li className="mb-2">
                  <a
                    href="https://www.forchildrights.org"
                    target="_blank"
                    className="text-white"
                  >
                    Learn more about CLCR
                  </a>
                </li>

                <li className="mb-2">
                  <a
                    href="https://www.heartlandacademy.edu.np/about"
                    target="_blank"
                    className="text-white"
                  >
                    Introduction to Heartland
                  </a>
                </li>

                <li className="mb-2">
                  <a href="/clinic" target="_blank" className="text-white">
                    HWC Clinic
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">Follow Us</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="https://www.facebook.com/heartlandcentreforwomen"
                    target="_blank"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-facebook-f mt-3 mr-2"></i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/heartland_info"
                    target="_blank"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-twitter mt-3 mr-2"></i>Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Copyright © {`${getYear()}`}, Heartland Academy, Centre for Women
      </div>
    </footer>
  );
};

export default AltFooter;
