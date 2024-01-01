import { useEffect, useState } from "react";
import styled from "styled-components";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Message from "../../contents/Message";
import Loader from "../../contents/Loader";
import WomenModal from "../../contents/WomenModal";

import { TESTIMONIALS_WOMEN_CREATE_RESET } from "../../../actions/types";
import {
  deleteWTestimonials,
  listWTestimonials,
} from "../../../actions/testimonialsActions";

const Section = styled.div`
  padding: 30px 40px;
  min-height: 100vh;
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

const NoContent = styled.div`
  margin: 20px 0;
  h5 {
    text-align: center;
    font-size: 27px;
    color: ${(props) => (props.darkmode ? "#fff" : "#111")};
  }
`;

const MessageCard = styled.div`
  margin: 30px;
  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f16101;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  color: #fff;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -5px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: 1px solid #f16101;
  }
`;

const Msg = styled.div`
  font-size: 16px;
  line-height: 34px;
  font-weight: 500;
  padding-bottom: 30px;
  margin: 0 0 40px;
  border-bottom: 1px solid #f1f1f1;
  text-align: center;
`;

const Profile = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`;

const ImageCard = styled.div`
  img {
    margin-bottom: 20px;
    width: 55px;
    height: 54px;
    border-radius: 50%;
    vertical-align: middle;
  }
`;

const Name = styled.div`
  font-size: 18px;
  color: ${(props) => (props.darkmode ? "#fff" : "#012237")};
  font-weight: 600;
  line-height: 1em;
  margin: 0 0 10px;
`;

const Desc = styled.div`
  margin: 0;
  line-height: 1em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #81868a;
`;

const WTestimonialCreate = ({ history }) => {
  const [womenModalShow, setWomenModalShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const settings = useSelector((state) => state.settings);
  const { darkMode } = settings;

  const addedWomenTestimonials = useSelector(
    (state) => state.addedWomenTestimonials
  );
  const {
    loading: womenLoading,
    error: womenError,
    womenTestimonials,
  } = addedWomenTestimonials;

  const womenTestimonialsCreate = useSelector(
    (state) => state.womenTestimonialsCreate
  );
  const { success: womenCreateSuccess, error: womenCreateError } =
    womenTestimonialsCreate;

  const womenTestimonialsDelete = useSelector(
    (state) => state.womenTestimonialsDelete
  );
  const { success: womenDeleteSuccess, error: womenDeleteError } =
    womenTestimonialsDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      dispatch(listWTestimonials());

      if (womenDeleteSuccess) {
        dispatch(listWTestimonials());
      }

      if (womenCreateSuccess) {
        dispatch(listWTestimonials());
        dispatch({ type: TESTIMONIALS_WOMEN_CREATE_RESET });
        setWomenModalShow(false);
      }
    } else {
      history.push("/admin/login");
    }
  }, [dispatch, history, userInfo, womenDeleteSuccess, womenCreateSuccess]);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      console.log(id);
      dispatch(deleteWTestimonials(id));
      toast.success("Testimonial Deleted Successfully");
    }
  };

  return (
    <Section className="container">
      <Title darkmode={darkMode}>
        <h3>Testimonials</h3>
        <ButtonContent>
          <Button
            onClick={() => setWomenModalShow(true)}
            className={darkMode ? "btn-dark" : "btn-primary"}
          >
            <i className="fas fa-plus"></i> New
          </Button>
        </ButtonContent>
        <WomenModal
          show={womenModalShow}
          onHide={() => setWomenModalShow(false)}
        />
      </Title>

      {womenCreateError && (
        <Message variant="danger">{womenCreateError}</Message>
      )}
      {womenDeleteError && (
        <Message variant="danger">{womenDeleteError}</Message>
      )}
      {womenLoading ? (
        <Loader />
      ) : womenError ? (
        <Message variant="danger">{womenError}</Message>
      ) : (
        <>
          {womenTestimonials && womenTestimonials?.length === 0 && (
            <NoContent darkmode={darkMode}>
              <h5>Testimonial is Empty......</h5>
            </NoContent>
          )}

          <AliceCarousel
            mouseTracking
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls
          >
            {womenTestimonials &&
              womenTestimonials?.map((testimonial) => (
                <MessageCard key={testimonial._id}>
                  <Top>
                    <i className="fas fa-quote-left"></i>
                  </Top>
                  <Msg>{testimonial.message}</Msg>
                  <Profile>
                    <ImageCard>
                      <img src={testimonial.image} alt="testimonial" />
                    </ImageCard>
                    <Name darkmode={darkMode}>{testimonial.fullName}</Name>
                    <Desc>{testimonial.desc}</Desc>
                  </Profile>
                  <span onClick={() => deleteHandler(testimonial._id)}>
                    <i class="fas fa-trash"></i>
                  </span>
                </MessageCard>
              ))}
          </AliceCarousel>
        </>
      )}
    </Section>
  );
};

export default WTestimonialCreate;
