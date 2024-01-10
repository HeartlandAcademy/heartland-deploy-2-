import styled from "styled-components";

import AltImageHeader from "../../contents/AltImageHeader";
import Meta from "../../contents/Meta";
import AboutImg from "../../../assets/others/about1.jpg";
import { IoMdCheckmark } from "react-icons/io";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import defaultImg from "../../../assets/default/default.png";
import TestimonialCard from "../../contents/TestimonialCard";

import ScienceImg from "../../../assets/others/science.jpeg";
import LawImg from "../../../assets/others/law.png";
import HMImg from "../../../assets/others/hm.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listWTestimonials } from "../../../actions/testimonialsActions";

const handleDragStart = (e) => e.preventDefault();

const AimSection = styled.div`
  h4 {
    color: rgb(1, 34, 55);
  }
  @media (max-width: 577px) {
    margin-top: 40px;
  }
`;

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    flex: 5%;
  }
  h5 {
    flex: 95%;
    color: #494057;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    padding-left: 1px;
    @media (max-width: 577px) {
      font-size: 16px;
    }
  }
`;

const TestimonialSection = styled.div`
  background: #fcf9ef;
  margin: 50px 0;
  padding: 80px 0;
  .alice-carousel__wrapper {
    padding-top: 60px;
  }
`;

const TestimonialHeader = styled.h2`
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: 75px;
  margin: 10px 0 80px 0;
  text-align: center;
  font-family: "Urbanist", sans-serif;
  @media (max-width: 577px) {
    font-size: 40px;
  }
`;

const MainAboutWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 50px 0;
  @media (max-width: 1200px) {
    gap: 30px;
  }
  @media (max-width: 1017px) {
    align-items: center;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
  }
  @media (max-width: 577px) {
    padding: 0 10px;
  }
`;

const AbtContent = styled.div`
  padding-top: 20px;
  flex: 60%;
  @media (max-width: 1000px) {
    flex: 100%;
  }
  h4 {
    font-size: 14px;
    line-height: 1.1em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #00c7c4;
  }
  h2 {
    font-size: 36px;
    line-height: normal;
    font-weight: 700;
    margin: 10px 0;
    font-family: "Urbanist", sans-serif;
    @media (max-width: 1200px) {
      font-size: 30px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    text-align: justify;
    @media (max-width: 1200px) {
      font-size: 14px;
    }
    @media (max-width: 1017px) {
      font-size: 13px;
    }
  }
`;

const AbtImgWrapper = styled.div`
  flex: 40%;
  img {
    object-fit: cover;
    border-radius: 12px;
  }
  @media (max-width: 1000px) {
    flex: 100%;
  }
`;

const CoursesSection = styled.div`
  padding: 40px 0;
  margin-bottom: 50px;
  h3 {
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: 75px;
    margin: 10px 0 0;
    text-align: center;
    @media (max-width: 727px) {
      font-size: 40px;
      padding: 0;
    }
    @media (max-width: 527px) {
      font-size: 36px;
    }
  }
`;

const CoursesGrid = styled.div`
  display: flex;
  padding: 20px 0;
  border-top: 1px solid #edeef2;
  border-bottom: 1px solid #edeef2;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  @media (max-width: 769px) {
    justify-content: center;
  }
`;

const CourseCard = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  position: relative;
  gap: 20px;
  &:not(:last-child)::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 60px;
    background: #edeef2;
    right: -45px;
    top: 10px;
  }
  @media (max-width: 1205px) {
    width: 250px;
  }
  @media (max-width: 997px) {
    width: 200px;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    &:not(:last-child)::before {
      width: 0px;
    }
  }
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  flex: 30%;
  img {
    object-fit: contain;
    @media (max-width: 769px) {
      height: 90px;
    }
  }
`;

const CourseTxt = styled.div`
  flex: 70%;
  h4 {
    font-family: "Urbanist", sans-serif;
    font-weight: 600;
    @media (max-width: 769px) {
      text-align: center;
    }
  }
`;

const items = [
  {
    id: 1,
    fullName: "New Name",
    image: `${defaultImg}`,
    desc: "New Manager",
    msg: "This is msg",
  },
  {
    id: 2,
    fullName: "New Name 2",
    image: `${defaultImg}`,

    desc: "New Manager",
    msg: "This is msg",
  },
  {
    id: 3,
    fullName: "New Name 33",
    image: `${defaultImg}`,

    desc: "New Manager",
    msg: "This is msg",
  },
  {
    id: 4,
    fullName: "New Name 44",
    image: `${defaultImg}`,

    desc: "New Manager",
    msg: "This is msg",
  },
  {
    id: 5,
    fullName: "New Name 55",
    image: `${defaultImg}`,

    desc: "New Manager",
    msg: "This is msg",
  },
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const coursesInfo = [
  {
    id: 1,
    title: "Health Science",
    image: `${ScienceImg}`,
  },
  {
    id: 2,
    title: "Hotel Management",
    image: `${HMImg}`,
  },
  {
    id: 3,
    title: "Law",
    image: `${LawImg}`,
  },
];

const AboutUs = () => {
  const dispatch = useDispatch();
  const addedWomenTestimonials = useSelector(
    (state) => state.addedWomenTestimonials
  );
  const { loading, womenTestimonials, error } = addedWomenTestimonials;

  useEffect(() => {
    dispatch(listWTestimonials());
  }, []);

  return (
    <>
      <Meta title="About Us" />
      <AltImageHeader mainTitle={"About Us"} title={"About"} />

      <MainAboutWrapper className="container">
        <AbtContent>
          <h4>About Us</h4>
          <h2>Welcome to Hearland Academy Women Section</h2>
          <p>
            It is with immense pleasure that we welcome you to our Heartland
            Centre for Women’s (HCW) college and tertiary education webpage.
            This page and subsequent links below serve as your online resource
            and one stop shop providing you with all the relevant information
            about our women’s college, courses we offer, enrolment procedures,
            scholarship opportunities and leadership programs available to you
            as part of this Heartland tertiary wing. We hope that as you peruse
            through the content links accessible below and get a sense of the
            rich flavor of different activities on offer at this Heartland
            educational facility. Please note that this facility offers
            enrollment to women only. At our women’s college all aspects of our
            educational processes are based on the NEB curriculum, with
            educational curricular oversight provided by our international
            partner in CLCR Australia, our streams of study include, Law,
            Culinary arts and Medical studies with the finest educators across
            Nepal, with frequent guest lecturers from Australia, New Zealand and
            global leaders of industry from across the globe. For selected
            student groups HA offers 100% scholarship as well as incomparable
            educational experiences and practical opportunities that will set
            you up for strong employment prospects post college graduation. We
            foster student creativity, individual choices, teamwork, mutual
            respect, and leadership of our female demographic, looking to create
            the next generation of female leadership in Nepal and abroad. It is
            our commitment to mold young women to be innovative in their
            thinking, passionate about change and educating themselves for a
            better future. In essence, we promote a culture of high standards in
            an environment for our students to thrive.
          </p>
        </AbtContent>
        <AbtImgWrapper>
          <img src={AboutImg} alt="about" height="100%" width={"100%"} />
        </AbtImgWrapper>
      </MainAboutWrapper>

      <AimSection className="container">
        <h4>HA Aims at . . . .</h4>

        <List>
          <IoMdCheckmark color="#2467ec" />
          <h5>Encompassing extensive &amp; interactive environment.</h5>
        </List>
        <List>
          <IoMdCheckmark color="#2467ec" />
          <h5>
            Child Centred Curriculum to develop their motor skills – cognitive,
            physical, social, emotional and sensorial.
          </h5>
        </List>
        <List>
          <IoMdCheckmark color="#2467ec" />
          <h5>Ensuring a harmonious, purposeful and secure environment.</h5>
        </List>
        <List>
          <IoMdCheckmark color="#2467ec" />
          <h5>
            Providing quality education to the children which develops them as
            stars to illuminate the society.
          </h5>
        </List>
      </AimSection>

      {!loading && womenTestimonials?.length > 0 && (
        <TestimonialSection>
          <TestimonialHeader>What Our Visitor Says About Us</TestimonialHeader>

          <AliceCarousel
            responsive={responsive}
            mouseTracking
            controlsStrategy="alternate"
            animationDuration={200}
            animationType="fadeout"
            disableButtonsControls
            infinite
          >
            {womenTestimonials &&
              womenTestimonials?.map((item) => (
                <TestimonialCard testimonial={item} key={item?.id} />
              ))}
          </AliceCarousel>
        </TestimonialSection>
      )}

      <CoursesSection className="container">
        <h3>Courses We Offer</h3>
        <CoursesGrid>
          {coursesInfo.map((course) => (
            <CourseCard key={course.id}>
              <ImgWrapper>
                <img
                  src={course.image}
                  alt="health"
                  height={"100%"}
                  width={"100%"}
                />
              </ImgWrapper>
              <CourseTxt>
                <h4>{course.title}</h4>
              </CourseTxt>
            </CourseCard>
          ))}
        </CoursesGrid>
      </CoursesSection>
    </>
  );
};

export default AboutUs;
