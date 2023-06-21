import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { listModal } from "../../../actions/modalActions";
import PhotoCarousel from "../../contents/AltCarousel";
import Details from "../../layouts/Details";
import Teams from "../../layouts/Teams";
import NewsAndEvents from "../../layouts/NewsAndEvents";
import Partners from "../../layouts/Partners";
import PopupModal from "../../contents/PopupModal";
import Meta from "../../contents/Meta";
import { Button, Col, Container, Row } from "react-bootstrap";

import Heartland from "../../../assets/carousel/heartland.jpg";
import CLCR from "../../../assets/Partners/clcr.png";
import chatswood from "../../../assets/Partners/chatswood.jpg";
import GDG from "../../../assets/Partners/gdg.png";
import ravenswood from "../../../assets/Partners/ravenswood.png";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);

  const addedModal = useSelector((state) => state.addedModal);
  const { modal } = addedModal;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listModal());
  }, [dispatch]);

  useEffect(() => {
    if (modal && modal.length !== 0) {
      setModalShow(true);
    }
  }, [modal]);

  const aboutData = [
    {
      id: 1,
      icon: "TestIcon",
      title: "Effective strategy",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
    },
    {
      id: 1,
      icon: "TestIcon",
      title: "Effective strategy",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
    },
    {
      id: 1,
      title: "Effective strategy",
      icon: "TestIcon",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
    },
    {
      id: 1,
      icon: "TestIcon",
      title: "Effective strategy",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
    },
  ];

  return (
    <>
      <Meta />
      {/* <PopupModal show={modalShow} onHide={() => setModalShow(false)} /> */}

      <PhotoCarousel />
      <Container>
        <Row style={{ padding: "10rem 0" }}>
          <Col md={4}>
            <h4>ABOUT COMPANY</h4>
            <h2>We combine design, thinking and technical</h2>

            <Button variant="outlined">DISCOVER</Button>
          </Col>
          <Col md={8}>
            <Row>
              {aboutData?.map((list) => (
                <Col sm={6} className="pb-4">
                  <div className="d-flex gap-4 pb-4">
                    <h5>{list?.icon}</h5>
                    <div>
                      <h4>{list?.title}</h4>
                      <span className="mt-2">{list?.desc}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <div
        style={{
          background: "rgb(247 248 252)",
          padding: "70px 0",
        }}
      >
        <Container>
          <h4>our premium services</h4>
          <h2>
            Litho specializes in creativity design and innovative technology
          </h2>
          <div className="col-lg-12 col-md-9 col-12">
            <div className="row-cols-1 row-cols-lg-2 gap-y-10 justify-center md:justify-center row">
              <div className="col" style={{ padding: "15px" }}>
                <div
                  className="col"
                  style={{
                    boxShadow: "0 0 15px rgba(0,0,0,.08)",
                    padding: "56px",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="d-flex gap-4">
                    <h4>Icon</h4>
                    <div>
                      <h4>Powerfull About</h4>
                      <h5 className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        do eiusmod tempor incididunt ut labore et dolore.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col" style={{ padding: "15px" }}>
                <div
                  className="col"
                  style={{
                    boxShadow: "0 0 15px rgba(0,0,0,.08)",
                    padding: "56px",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="d-flex gap-4">
                    <h4>Icon</h4>
                    <div>
                      <h4>Powerfull About</h4>
                      <h5 className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        do eiusmod tempor incididunt ut labore et dolore.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{ padding: "15px" }}>
                <div
                  className="col"
                  style={{
                    boxShadow: "0 0 15px rgba(0,0,0,.08)",
                    padding: "56px",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="d-flex gap-4">
                    <h4>Icon</h4>
                    <div>
                      <h4>Powerfull About</h4>
                      <h5 className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        do eiusmod tempor incididunt ut labore et dolore.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{ padding: "15px" }}>
                <div
                  className="col"
                  style={{
                    boxShadow: "0 0 15px rgba(0,0,0,.08)",
                    padding: "56px",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="d-flex gap-4">
                    <h4>Icon</h4>
                    <div>
                      <h4>Powerfull About</h4>
                      <h5 className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        do eiusmod tempor incididunt ut labore et dolore.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div></div>

      <NewsAndEvents />
      <Teams />
      <Partners />
      {/* <section
        style={{
          position: "relative",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          padding: "100px 0",
          opacity: 1,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: { Heartland },
            backgroundSize: "cover",
            width: "100%",
          }}
        />
        <div
          style={{
            opacity: 0.75,
            backgroundColor: "rgb(55 65 98)",
          }}
        />
        <div className="container">

        </div>
      </section> */}
      <section
        style={{
          opacity: 1,
          padding: "90px 0",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "fixed",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${Heartland})`,
            willChange: "transform",
            position: "absolute",
            top: "0px",
            left: "0",
            width: "100%",
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0",
            width: "100%",
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.75,
            backgroundColor: "rgb(55 65 98)",
          }}
        />
        <div className="container">
          <div
            className="d-flex"
            style={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="relative text-left sm:mb-[30px] sm:text-center col-xl-7 col-md-8 col-sm-10">
              <h2
                className="heading-4 font-serif font-semibold text-white mb-0"
                style={{
                  fontSize: "2.85rem",
                  lineHeight: "3.4rem",
                  textAlign: "left",
                }}
              >
                Gearing your company through an innovative strategy
              </h2>
            </div>
            <div
              className="col-xl-5 col-md-4"
              style={{
                textAlign: "right",
                padding: "18px 0",
                marginTop: "23px",
                fontWeight: 600,
              }}
            >
              <a
                aria-label="link for company"
                style={{ color: "#fff", textDecoration: "none" }}
                href="/"
              >
                DISCOVER HA
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
