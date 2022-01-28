import {
  REGISTRATION_CREATE_FAIL,
  REGISTRATION_CREATE_REQUEST,
  REGISTRATION_CREATE_SUCCESS,
  SUBMITTED_REGISTRATION_FAIL,
  SUBMITTED_REGISTRATION_REQUEST,
  SUBMITTED_REGISTRATION_SUCCESS,
} from "../actions/types";

export const submittedRegistrationsReducer = (
  state = { registrations: [] },
  action
) => {
  switch (action.type) {
    case SUBMITTED_REGISTRATION_REQUEST:
      return {
        loading: true,
      };
    case SUBMITTED_REGISTRATION_SUCCESS:
      return {
        loading: false,
        registrations: action.payload,
      };
    case SUBMITTED_REGISTRATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createRegistrationsReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTRATION_CREATE_REQUEST:
      return { loading: true };
    case REGISTRATION_CREATE_SUCCESS:
      return { loading: false, success: true, registrations: action.payload };
    case REGISTRATION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
