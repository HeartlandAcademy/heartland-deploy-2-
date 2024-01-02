import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Ava1 from "../../../assets/others/user.JPG";
import { Modal } from "react-bootstrap";

import { listWModal } from "../../../actions/modalActions";
import PhotoCarousel from "../../contents/AltCarousel";
import WPartners from "../../layouts/WPartners";
import Meta from "../../contents/Meta";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LuGoal } from "react-icons/lu";
import { FaBinoculars } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { LuSchool } from "react-icons/lu";
import styled from "styled-components";
import Loader from "../../contents/Loader";
import defaultLoading from "../../../assets/default/default-loading.png";
import useProgressiveImg from "../../../hooks/useProgressiveImg";

const MainTextWrapper = styled.div`
  h4 {
    font-size: 36px;
    line-height: 1.3;
    color: #141517;
    font-weight: 700;
    transition: all .3s ease-out 0s;
    font-family: "Urbanist", sans-serif;
    @media (max-width: 560px) {
      font-size: 30px; 
    }
  }
  h6 {
    font-size: 16px;
    font-weight: 400;
    color: #575757;
    line-height: 26px;
    @media (max-width: 560px) {
      font-size: 14px; 
    }
  }
  p {
    font-size: 15px;
    color: rgb(150, 150, 150);
    line-height: 25px;
    margin-bottom: 40px;
    @media (max-width: 560px) {
      font-size: 13px; 
    }
  }
}
`;

const TextWrapper = styled.div`
  h4 {
    color: #1a1729;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 15px;
    transition: all .3s;
    font-family: "Urbanist", sans-serif;
    @media (max-width: 560px) {
      font-size: 23px; 
    }

  }
  span {
    color: #625f71;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 0;
    transition: all .3s;
    @media (max-width: 560px) {
      font-size: 14px; 
    }
  }
}
`;

const MsgWrapper = styled.div`
  h4 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 8px;
    color: #21a7d0;
    @media (max-width: 560px) {
      font-size: 16px;
    }
  }
  p {
    font-size: 18px;
    line-height: 30px;
    color: #505050;
    text-align: justify;
    @media (max-width: 560px) {
      font-size: 15px;
      line-height: 25px;
    }
  }
`;

const MsgInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media (max-width: 560px) {
    align-items: center;
    margin-top: 20px;
  }
  h5 {
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #505050;
    margin-top: 13px;
  }
  h6 {
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    color: #505050;
  }
`;

const Home = () => {
  const addedWModal = useSelector((state) => state.addedWModal);
  const { loading, wModal: modal } = addedWModal;

  const dispatch = useDispatch();

  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  useEffect(() => {
    dispatch(listWModal());
  }, [dispatch]);

  // useEffect(() => {
  //   if (modal && modal[0]?.thumbnail) {
  //     setModalShow(true);
  //   }
  // }, [modal]);

  useEffect(() => {
    if (modal && modal[0]?.thumbnail) {
      const img = new Image();
      img.src = modal[0]?.thumbnail;
      img.onload = () => {
        setThumbnailLoaded(true);
      };
    }
  }, [modal]);

  const [src, { blur }] = useProgressiveImg(
    modal && modal[0]?.thumbnail,
    modal && modal[0]?.image
  );

  const aboutData = [
    {
      id: 1,
      icon: <LuGoal size={70} color="#111" />,
      title: "Our Goals",
      desc: "To build the future female leaders of Nepal and provide as many educational opportunities to young women across the country as possible.",
    },
    {
      id: 1,
      icon: <FaBinoculars size={70} color="#111" />,
      title: "OUR VISION",
      desc: `
      To be a leading college, offering top-notch education and championing scholarships for young women to enhance their future prospects in various fields.
     `,
    },
    {
      id: 1,
      icon: <HiAcademicCap size={70} color="#111" />,
      title: "Academic Excellence",
      desc: "Deliver exceptional education, fostering critical thinking and strong foundations in various disciplines.",
    },
    {
      id: 1,
      icon: <LuSchool size={70} color="#111" />,
      title: "Inclusive Environment",
      desc: "Promote diversity, creating a welcoming, supportive space for students from all backgrounds.",
    },
  ];

  return (
    <>
      <Meta title={"Heartland Academy | Center For Women"} />

      <PhotoCarousel />
      <Container>
        <Row style={{ padding: "5rem 0" }}>
          <Col md={12} lg={4}>
            <MainTextWrapper>
              <h4>Welcome to the Heartland Centre for Women’s College...</h4>
              <h6>
                where empowerment meets education. Join us on a journey of
                growth and skill-building with courses in Law, Culinary Arts,
                and Medical Studies. Our commitment is to mold the next
                generation of female leaders, offering 100% scholarships and a
                vibrant learning environment.{" "}
              </h6>
              <p>
                "Explore your potential with us, where innovation and excellence
                thrive!"
              </p>
            </MainTextWrapper>
          </Col>
          <Col md={12} lg={8}>
            <Row>
              {aboutData?.map((list) => (
                <Col sm={6} className="pb-4">
                  <div className="d-flex gap-4 pb-4">
                    <div>{list?.icon}</div>
                    <TextWrapper>
                      <h4>{list?.title}</h4>
                      <span className="mt-2">{list?.desc}</span>
                    </TextWrapper>
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
          <MsgWrapper>
            <h4>About Us</h4>
            <p>
              I am pleased to welcome you to Heartland Academy! We are committed
              to providing you with the best possible practical education. We
              have a dedicated faculty who are passionate about teaching and
              learning. We also offer a wide range of academic and
              extracurricular opportunities, so you can find your passion and
              make lifelong friends. In addition to your academic studies, we
              also want you to focus on your physical and social potentiality in
              a supporting and stimulating learning environment. We believe that
              it is important to be well-rounded individuals, so we offer a
              variety of vocational training and projects that will help you
              develop your idea and leadership. We are also committed to
              creating a safe and inclusive environment for all girls. We
              believe that everyone deserves to feel respected and valued,
              regardless of their background or beliefs. I am confident that you
              will have a wonderful experience at Heartland Academy. I am here
              to support you in any way that I can. Welcome to the Heartland
              Academy family!
            </p>
          </MsgWrapper>
          <MsgInfo>
            <img
              src={Ava1}
              alt="img"
              style={{
                height: "110px",
                width: "110px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h5>Head of College Studies,</h5>
            <h6>Chanda Koirala</h6>
          </MsgInfo>
        </Container>
      </div>

      {/* <div
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
      </div> */}
      <WPartners />

      <Modal
        show={thumbnailLoaded && !loading}
        onHide={() => setThumbnailLoaded(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          {loading ? (
            <img className="d-block w-100" src={defaultLoading} alt="default" />
          ) : (
            <>
              {modal && modal.length === 0 ? (
                ""
              ) : (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  className="d-block w-100"
                  alt="Modal Image"
                  src={src}
                  style={{
                    filter: blur ? "blur(20px)" : "none",
                    transition: blur ? "none" : "filter 0.3s ease-out",
                  }}
                />
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
