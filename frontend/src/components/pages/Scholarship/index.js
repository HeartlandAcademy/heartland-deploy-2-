import styled from "styled-components";

import ImageHeader from "../../contents/ImageHeader";
import test from "../../../assets/imageheaderphotos/test.JPG";
import Meta from "../../contents/Meta";

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
    margin-bottom: 80px;
  }
`;

const Scholarship = () => {
  return (
    <>
      <Meta title="Scholarship" />
      <ImageHeader mtitle="Scholarship" title="Scholarship" image={test} />
      <Section1 className="container">
        <div>
          <h3>Scholarship Provision</h3>
          <p>
            Heartland is a not-for-profit school with a service orientation, 
            providing scholarship opportunities to the underprivileged families 
            across the country from Nursery to grade 12 (tertiary sector). The 
            process is one in which, existing Heartland families are informed 
            throughout the academic session regarding application dates for scholarship. 
            Upon application they must submit documentation specified by the school along 
            with their local government recommendation letter. The collected documents are 
            verified with the school’s scholarship committee at Heartland and then sent onto
            CLCR Australia/ Nepal for consideration. The selected students are given 100% 
            scholarship to study at Heartland up to year 12. Also, those students are supported 
            with 2 pairs of the schools uniform each year along with stationery materials and funding 
            for educational tours throughout the year as part of extra-curricular activities.

              We provide several different scholarships based on the following criteria.
          </p>
          
          <p>
            We provide a number of scholarships based on the following criteria.
            All the scholarships are 100% and covers the both academic sessions.
          </p>
          <ul>
            <li>Scholarship based on merit</li>
            <li>Scholarship for Dalit /Marginalized people</li>
            <li>Scholarship for students from remote region</li>
            <li>
              Scholarship for orphans ( if one of the parents is deceased)
            </li>
            <li>Scholarship for the children of disabled parents</li>
          </ul>
          <p>
          For all enquiries regarding this process, please contact the school on the email and contact details below: <br/> 
(Email: info@heartlandacademy.edu.np,)
(Contact No: 977 - 01-523 7058, 977 - 01-523 7283)
          </p>
        </div>
      </Section1>
    </>
  );
};

export default Scholarship;
