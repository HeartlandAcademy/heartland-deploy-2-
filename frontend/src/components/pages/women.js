import styled from "styled-components";

import ImageHeader from ".././contents/ImageHeader";
import test from "../../assets/imageheaderphotos/test.JPG";
import Meta from ".././contents/Meta";

import mainImage from "../../assets/others/main-carousel.jpg";

const Section1 = styled.div`
  color: #111;
  line-height: 28px;
  text-align: justify;
  font-weight: 400;
  font-size: 18px;
  h3 {
    margin: 50px 0 20px 0;
    color: #222222;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
  }
  ul {
    margin-bottom: 20px;
  }
`;

const Women = () => {
  return (
    <>
      <Meta title="Women's Centre" />
      <ImageHeader
        mtitle="Women's Centre"
        title="Women's Centre"
        image={test}
      />
      <Section1 className="container">
        <div>
          <h3>Women's Centre</h3>
          <h5>Who are we:</h5>
          <p>
            Heartland Academy’s Centre for Women (HCW) is a pioneer women’s only
            college, offering the best, specifically designed educational
            opportunities at college level to young women across the country. We
            value a student-centred approach, blended with high levels of
            learning support by excellent professional educators. We have strong
            links to Australia and experts in the education and leadership
            fields, including business, logistics, legal studies and university
            management, that we utlise to maximise the impact and
            professionalism of our education centre.
          </p>

          <div style={{ margin: "3rem 0" }}>
            <img
              src={mainImage}
              alt="img"
              height="500px"
              width={"100%"}
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />
          </div>

          <h5>Aim and Vision:</h5>
          <p>
            To be a model college in the country, providing the best educational
            opportunities to set you up with maximum opportunities throughout
            your college experience with us and prepare you for the immediate
            and long-term future in your chosen field. Furthermore, be a strong,
            champion for scholarship provision for young females in an effort to
            support as many women attain college level education qualifications
            and skills to enhance their future.
          </p>

          <p>Facilities</p>
          <ul>
            <li>
              Scholarship program for students of low caste group (Dalit) and
              those who apply will be considered on a case-by-case basis.
            </li>
            <li>
              Startup leadership program: learn project management through this
              specifically designed leadership program. Bid for finance, run
              your own project, and gain valuable leadership and management
              experience in partnership with global experts from Australia.
            </li>
            <li>
              Barista Training program: first class, Australian based Café, and
              barista training facilities.
            </li>
            <li>Peaceful, learning friendly environment.</li>
          </ul>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
            alignItems: "center",
          }}
        >
          <h4 style={{ margin: 0 }}>For more information please visit:</h4>
          <a
            href="https://www.womenscentre.heartlandacademy.edu.np"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ margin: 0 }}>Women's Centre </p>
          </a>
        </div>
      </Section1>
    </>
  );
};

export default Women;
