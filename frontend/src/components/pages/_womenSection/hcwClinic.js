import React from "react";
import AltImageHeader from "../../contents/AltImageHeader";
import styled from "styled-components";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import BrochureEng from "../../../assets/others/brochure-eng.pdf";
import BrochureNep from "../../../assets/others/brochure-nep.jpg";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useState } from "react";

const ClinicWrapper = styled.div`
  padding-top: 30px;
  h4 {
    font-size: 14px;
    line-height: 1.1em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #00c7c4;
    margin-bottom: 10px;
  }
  ,
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

const MainTabWrapper = styled.div`
  @media (max-width: 822px) {
    display: none;
  }
`;

const HWCClinic = () => {
  const [scale, setScale] = useState(1.0);

  return (
    <div>
      <AltImageHeader mainTitle={"HCW Clinic"} title={"HCW Clinic"} />

      <div className="container">
        <ClinicWrapper>
          <h4>HCW Clinic</h4>
          <p>
            HCW Cervical Cancer and Menstrual health clinic. Not only serving as
            a centre for educational tertiary excellence, HCW operates a high
            impact, low cost health care centre/ clinic. HCW’s clinic offers and
            coordinate the following services to women and families of all ages,
            castes and circumstances across Nepal:
          </p>

          <ul>
            <li>
              Cervical cancer assessment, screening and examination procedures,
              as well initial treatment of cervical cancer.
            </li>
            <li>
              Consultation services specific to maternal health and
              menstruation.
            </li>
            <li>
              Counselling services for the clinic’s patients, specific to
              trauma, loss, mental health issues and outcomes of clinics
              services/ treatment.
            </li>
            <li>
              The centre will also look to periodically undertake outreach
              education tours to remote parts of Nepal to support awareness,
              knowledge and understanding regarding services/ prevention of
              cervical cancer as well as menstrual and maternal health.
            </li>
          </ul>
          <p>
            The HCW clinic has been established to serve the community of Nepal,
            servicing specifically women of all ages and circumstances from any
            region of the country. Aiming to provide high quality, safe and
            supportive medical care within the areas of treatment mentioned
            above. Our contact details are available below if at any stage you
            would like to book an appointment, speak to a specialist or
            undertake a clinic visit.
          </p>
        </ClinicWrapper>

        <MainTabWrapper>
          <Tabs
            defaultActiveKey="eng"
            id="brochure"
            className="mb-3 tabWrapper"
            justify
          >
            <Tab eventKey="eng" title="Cervical Cancer Brochure in English">
              <div>
                <section className="d-flex flex-column align-items-center">
                  <Document file={BrochureEng}>
                    <Page pageNumber={1} scale={scale} />
                    <Page pageNumber={2} scale={scale} />
                  </Document>
                </section>
              </div>
            </Tab>
            <Tab eventKey="nep" title="नेपालीमा सर्वाइकल क्यान्सर ब्रोशर">
              <section className="d-flex flex-column align-items-center">
                <img
                  src={BrochureNep}
                  alt="nepali"
                  style={{
                    width: "792px",
                  }}
                />
              </section>
            </Tab>
          </Tabs>
        </MainTabWrapper>
      </div>
    </div>
  );
};

export default HWCClinic;
