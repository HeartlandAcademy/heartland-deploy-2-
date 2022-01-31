import React, { useEffect } from "react";
import styled from "styled-components";
import { Table, Placeholder } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import ImageHeader from "../../contents/ImageHeader";
import test from "../../../assets/imageheaderphotos/test.JPG";
import { listStaffs } from "../../../actions/staffsActions";
import Message from "../../contents/Message";
import Meta from "../../contents/Meta";

const Section1 = styled.div`
  margin-bottom: 80px;
  h3 {
    font-weight: 700;
    color: rgb(1, 34, 55);
    position: relative;
    font-size: 50px;
    text-align: center;
    margin: 50px;
  }
`;

const Staffs = () => {
  const availableStaffs = useSelector((state) => state.availableStaffs);
  const { loading, staffs, error } = availableStaffs;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listStaffs());
  }, [dispatch]);

  const TableLoader = () => {
    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={9} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={9} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={9} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </td>
          </tr>
          <tr>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={9} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <Meta title="HA Family | Staffs" />
      <ImageHeader mtitle="HA Family" title="Staffs" image={test} />
      <Section1 className="container">
        <h3>STAFFS</h3>
        {loading ? (
          <TableLoader />
        ) : error ? (
          <Message varaint="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {staffs.map((staff) => (
                <tr key={staff._id}>
                  <td>{staff.fullName}</td>
                  <td>{staff.email}</td>
                  <td>{staff.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Section1>
    </>
  );
};

export default Staffs;
