import React, { useState, useEffect } from "react";

import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteStaffs, listStaffs } from "../../../actions/staffsActions";
import Loader from "../../contents/Loader";
import Message from "../../contents/Message";
import StaffsModal from "../../contents/StaffModal";
import { toast } from "react-toastify";
import { STAFFS_CREATE_RESET } from "../../../actions/types";

const StaffContainer = styled.div`
  padding: 30px 40px;
  height: 100vh;
  i {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 479px) {
    flex-direction: column;
  }
  h3 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
    margin-top: 10px;
  }
  h4 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }
`;

const ButtonContent = styled.div`
  margin-top: 10px;
`;

const TableSection = styled.div``;

const AdminStaffs = ({ history }) => {
  const [modalShow, setModalShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const settings = useSelector((state) => state.settings);
  const { darkMode } = settings;

  const availableStaffs = useSelector((state) => state.availableStaffs);
  const { loading, staffs, error } = availableStaffs;

  const staffsDelete = useSelector((state) => state.staffsDelete);
  const { success, error: deleteError } = staffsDelete;

  const staffsCreate = useSelector((state) => state.staffsCreate);
  const { success: createSuccess, error: createError } = staffsCreate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      dispatch(listStaffs());
      if (success) {
        dispatch(listStaffs());
      }
      if (createSuccess) {
        dispatch(listStaffs());
        dispatch({ type: STAFFS_CREATE_RESET });
        setModalShow(false);
      }
    } else {
      history.push("/admin/login");
    }
  }, [dispatch, history, userInfo, success, createSuccess]);

  const staffDeleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteStaffs(id));
      toast.success("Staff Deleted Successfully");
    }
  };

  return (
    <StaffContainer>
      <Title darkmode={darkMode}>
        <h3>Staffs</h3>
        <ButtonContent>
          <Button
            onClick={() => setModalShow(true)}
            className={darkMode ? "btn-dark" : "btn-primary"}
          >
            <i className="fas fa-plus"></i> New
          </Button>
        </ButtonContent>
        <StaffsModal show={modalShow} onHide={() => setModalShow(false)} />
      </Title>
      <TableSection>
        {deleteError ? <Message variant="danger">{deleteError}</Message> : ""}
        {createError ? <Message variant="danger">{deleteError}</Message> : ""}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table
            responsive
            striped
            bordered
            hover
            variant={darkMode ? "dark" : "white"}
          >
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Phone Number</th>
                <th>Email Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {staffs.map((staff) => (
                <tr key={staff._id}>
                  <td>{staff.fullName}</td>
                  <td>{staff.email}</td>
                  <td>{staff.phone}</td>

                  <td style={{ textAlign: "center" }}>
                    <i
                      className="fas fa-trash"
                      onClick={() => staffDeleteHandler(staff._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </TableSection>
    </StaffContainer>
  );
};

export default AdminStaffs;
