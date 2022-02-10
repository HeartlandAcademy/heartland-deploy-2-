import axios from "axios";
import {
  ADDED_TESTIMONIALS_STUDENTS_FAIL,
  ADDED_TESTIMONIALS_STUDENTS_REQUEST,
  ADDED_TESTIMONIALS_STUDENTS_SUCCESS,
  ADDED_TESTIMONIALS_VISITORS_FAIL,
  ADDED_TESTIMONIALS_VISITORS_REQUEST,
  ADDED_TESTIMONIALS_VISITORS_SUCCESS,
  TESTIMONIALS_STUDENTS_CREATE_FAIL,
  TESTIMONIALS_STUDENTS_CREATE_REQUEST,
  TESTIMONIALS_STUDENTS_CREATE_SUCCESS,
  TESTIMONIALS_STUDENTS_DELETE_FAIL,
  TESTIMONIALS_STUDENTS_DELETE_REQUEST,
  TESTIMONIALS_STUDENTS_DELETE_SUCCESS,
  TESTIMONIALS_VISITORS_CREATE_FAIL,
  TESTIMONIALS_VISITORS_CREATE_REQUEST,
  TESTIMONIALS_VISITORS_CREATE_SUCCESS,
  TESTIMONIALS_VISITORS_DELETE_FAIL,
  TESTIMONIALS_VISITORS_DELETE_REQUEST,
  TESTIMONIALS_VISITORS_DELETE_SUCCESS,
} from "./types";

export const listStudentsTestimonails = () => async (dispatch) => {
  try {
    dispatch({ type: ADDED_TESTIMONIALS_STUDENTS_REQUEST });

    const { data } = await axios.get("/api/testimonials/students");

    dispatch({
      type: ADDED_TESTIMONIALS_STUDENTS_SUCCESS,
      payload: data[0],
    });
  } catch (error) {
    dispatch({
      type: ADDED_TESTIMONIALS_STUDENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createStudentsTestimonails =
  (fullName, desc, image, message) => async (dispatch, getState) => {
    try {
      dispatch({ type: TESTIMONIALS_STUDENTS_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "/api/testimonials/students",
        { fullName, desc, image, message },
        config
      );

      dispatch({
        type: TESTIMONIALS_STUDENTS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TESTIMONIALS_STUDENTS_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteStudentsTestimonails =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: TESTIMONIALS_STUDENTS_DELETE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.delete(`/api/testimonials/students/${id}`, config);

      dispatch({ type: TESTIMONIALS_STUDENTS_DELETE_SUCCESS });
    } catch (error) {
      dispatch({
        type: TESTIMONIALS_STUDENTS_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listVisitorsTestimonails = () => async (dispatch) => {
  try {
    dispatch({ type: ADDED_TESTIMONIALS_VISITORS_REQUEST });

    const { data } = await axios.get("/api/testimonials/visitors");

    dispatch({
      type: ADDED_TESTIMONIALS_VISITORS_SUCCESS,
      payload: data[0],
    });
  } catch (error) {
    dispatch({
      type: ADDED_TESTIMONIALS_VISITORS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createVisitorsTestimonails =
  (fullName, desc, image, message) => async (dispatch, getState) => {
    try {
      dispatch({ type: TESTIMONIALS_VISITORS_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "/api/testimonials/visitors",
        { fullName, desc, image, message },
        config
      );

      dispatch({
        type: TESTIMONIALS_VISITORS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TESTIMONIALS_VISITORS_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteVisitorsTestimonails =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: TESTIMONIALS_VISITORS_DELETE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.delete(`/api/testimonials/visitors/${id}`, config);

      dispatch({ type: TESTIMONIALS_VISITORS_DELETE_SUCCESS });
    } catch (error) {
      dispatch({
        type: TESTIMONIALS_VISITORS_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
