import {
  ALL_ADMIN_EVENTS_FAIL,
  ALL_ADMIN_EVENTS_REQUEST,
  ALL_ADMIN_EVENTS_SUCCESS,
  EVENTS_CREATE_FAIL,
  EVENTS_CREATE_REQUEST,
  EVENTS_CREATE_RESET,
  EVENTS_CREATE_SUCCESS,
  EVENTS_DELETE_FAIL,
  EVENTS_DELETE_REQUEST,
  EVENTS_DELETE_SUCCESS,
  UPCOMING_EVENTS_FAIL,
  UPCOMING_EVENTS_REQUEST,
  UPCOMING_EVENTS_SUCCESS,
  UPCOMING_LATEST_EVENTS_FAIL,
  UPCOMING_LATEST_EVENTS_REQUEST,
  UPCOMING_LATEST_EVENTS_SUCCESS,
  UPCOMING_WEVENTS_FAIL,
  UPCOMING_WEVENTS_REQUEST,
  UPCOMING_WEVENTS_SUCCESS,
  WEVENTS_CREATE_FAIL,
  WEVENTS_CREATE_REQUEST,
  WEVENTS_CREATE_RESET,
  WEVENTS_CREATE_SUCCESS,
  WEVENTS_DELETE_FAIL,
  WEVENTS_DELETE_REQUEST,
  WEVENTS_DELETE_SUCCESS,
} from "../actions/types";

export const upcomingEventsReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case UPCOMING_EVENTS_REQUEST:
      return { loading: true, events: [] };
    case UPCOMING_EVENTS_SUCCESS:
      return { loading: false, events: action.payload };
    case UPCOMING_EVENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const upcomingWEventsReducer = (state = { wEvents: [] }, action) => {
  switch (action.type) {
    case UPCOMING_WEVENTS_REQUEST:
      return { loading: true, wEvents: [] };
    case UPCOMING_WEVENTS_SUCCESS:
      return { loading: false, wEvents: action.payload };
    case UPCOMING_WEVENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const upcomingAdminEventsReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case ALL_ADMIN_EVENTS_REQUEST:
      return {
        loading: true,
      };
    case ALL_ADMIN_EVENTS_SUCCESS:
      return {
        loading: false,
        events: action.payload,
      };
    case ALL_ADMIN_EVENTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const eventsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTS_CREATE_REQUEST:
      return { loading: true };
    case EVENTS_CREATE_SUCCESS:
      return { loading: false, success: true, events: action.payload };
    case EVENTS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case EVENTS_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const wEventsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WEVENTS_CREATE_REQUEST:
      return { loading: true };
    case WEVENTS_CREATE_SUCCESS:
      return { loading: false, success: true, wEvents: action.payload };
    case WEVENTS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case WEVENTS_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const eventsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENTS_DELETE_REQUEST:
      return { loading: true };
    case EVENTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EVENTS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const wEventsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case WEVENTS_DELETE_REQUEST:
      return { loading: true };
    case WEVENTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case WEVENTS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const upcomingLatestEventsReducer = (
  state = { eventsLatest: [] },
  action
) => {
  switch (action.type) {
    case UPCOMING_LATEST_EVENTS_REQUEST:
      return { loading: true, eventsLatest: [] };
    case UPCOMING_LATEST_EVENTS_SUCCESS:
      return { loading: false, eventsLatest: action.payload };
    case UPCOMING_LATEST_EVENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
