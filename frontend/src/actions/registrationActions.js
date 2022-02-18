import axios from "axios";
import {
  REGISTRATION_CREATE_FAIL,
  REGISTRATION_CREATE_REQUEST,
  REGISTRATION_CREATE_SUCCESS,
  SUBMITTED_REGISTRATION_FAIL,
  SUBMITTED_REGISTRATION_REQUEST,
  SUBMITTED_REGISTRATION_SUCCESS,
} from "./types";

export const listRegistrations = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SUBMITTED_REGISTRATION_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/registrations`, config);

    dispatch({
      type: SUBMITTED_REGISTRATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUBMITTED_REGISTRATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNewRegistrations =
  (firstName, lastName, email, phone, queries, token) => async (dispatch) => {
    try {
      dispatch({ type: REGISTRATION_CREATE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/registrations",
        { firstName, lastName, email, phone, queries, token },
        config
      );

      dispatch({
        type: REGISTRATION_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: REGISTRATION_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
