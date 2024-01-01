import { useEffect } from "react";
import styled from "styled-components";

import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import {
  deleteWCarousel,
  listWCarousel,
} from "../../../actions/carouselActions";
import Loader from "../../contents/Loader";
import Message from "../../contents/Message";

const Whole = styled.div`
  margin: 30px 50px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  @media (max-width: 479px) {
    flex-direction: column;
  }
  h2 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }
`;

const ButtonContent = styled.div`
  margin: 15px 40px;
`;

const Available = styled.div`
  background: ${(props) => (props.darkmode ? "#202124" : "#fff")};
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  align-items: center;
  margin-top: 30px;
  border-radius: 30px;
  h5 {
    color: #fff;
    font-style: italic;
  }
  p {
    font-size: 5px;
  }
`;

const NoCarousel = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 200px;
  text-align: center;
`;

const CarouselDetails = styled.div`
  h4 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }
  h5 {
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }

  p {
    font-weight: 500;
    font-size: 17px;
  }
`;

const CarouselButton = styled.div`
  i {
    font-size: 30px;
    margin-left: 20px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

const AllDownloads = styled.div`
  min-height: 100vh;
`;

const AdminAllWCarousel = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const settings = useSelector((state) => state.settings);
  const { darkMode } = settings;

  const availableWCarousel = useSelector((state) => state.availableWCarousel);
  const { loading, wCarousel, error } = availableWCarousel;

  const carouselWDelete = useSelector((state) => state.carouselWDelete);
  const { success: deleteSuccess, error: deleteError } = carouselWDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(listWCarousel());
    } else {
      history.push("/admin/login");
    }
    if (deleteSuccess) {
      dispatch(listWCarousel());
    }
  }, [dispatch, history, userInfo, deleteSuccess]);

  const CarouselDeleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteWCarousel(id));
      toast.success("Carousel Deleted Successfully");
    }
  };

  return (
    <Whole>
      <Title darkmode={darkMode}>
        <h2>Added Carousel</h2>

        <ButtonContent>
          <LinkContainer to={"/admin/carousel"}>
            <Button
              className={darkMode ? "btn-dark btn-lg" : "btn-primary btn-lg"}
            >
              <i className="fas fa-arrow-left "></i>
            </Button>
          </LinkContainer>
        </ButtonContent>
      </Title>
      <AllDownloads>
        {deleteError ? <Message variant="danger">{deleteError}</Message> : ""}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            {wCarousel && wCarousel?.length === 0 ? (
              <NoCarousel>
                Sorry we couldn't find any added Carousel. Please stay updated.
                <div>
                  <LinkContainer to={`/admin/carousel`}>
                    <button
                      className={
                        darkMode ? "btn btn-dark mt-4" : "btn btn-primary mt-4"
                      }
                    >
                      Add Some
                    </button>
                  </LinkContainer>
                </div>
              </NoCarousel>
            ) : (
              ""
            )}
            {wCarousel?.map((c) => (
              <Available darkmode={darkMode} key={c._id}>
                <CarouselDetails
                  darkmode={darkMode}
                  style={{ overflow: "hidden", wordWrap: "break-word" }}
                >
                  <h4>{c.title}</h4>
                  <h5>{c.description}</h5>
                </CarouselDetails>
                <CarouselButton>
                  <i
                    className="fas fa-trash"
                    onClick={() => CarouselDeleteHandler(c._id)}
                  ></i>
                </CarouselButton>
              </Available>
            ))}
          </>
        )}
      </AllDownloads>
    </Whole>
  );
};

export default AdminAllWCarousel;
