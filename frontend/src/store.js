import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  latestNewsReducer,
  newsCreateReducer,
  newsDeleteReducer,
  newsDetailsReducer,
  newsListReducer,
  newsUpdateReducer,
} from "./reducers/newsReducers";
import { userLoginReducer } from "./reducers/userReducers";
import {
  galleryAlbumCreateReducer,
  galleryAlbumDeleteReducer,
  galleryAlbumsReducer,
  galleryVideosCreateReducer,
  galleryVideosDeleteReducer,
  galleryVideosReducer,
  galleryWAlbumCreateReducer,
  galleryWAlbumDeleteReducer,
  galleryWAlbumsReducer,
  singleGalleryAlbumReducer,
  singleWGalleryAlbumReducer,
} from "./reducers/galleryReducers";
import settingReducers from "./reducers/settingReducers";
import {
  eventsCreateReducer,
  eventsDeleteReducer,
  upcomingAdminEventsReducer,
  upcomingEventsReducer,
  upcomingLatestEventsReducer,
} from "./reducers/eventsReducers";
import {
  availableStaffsReducer,
  staffsCreateReducer,
  staffsDeleteReducer,
} from "./reducers/staffsReducers";
import {
  availableNoticesReducer,
  latestNoticesReducer,
  noticesCreateReducer,
  noticesDeleteReducer,
} from "./reducers/noticesReducers";
import {
  downloadCreateReducer,
  downloadDeleteReducer,
  downloadListReducer,
  singleDownloadCreateReducer,
} from "./reducers/downloadsReducers";
import {
  availableCarouselReducer,
  availableWCarouselReducer,
  carouselCreateReducer,
  carouselDeleteReducer,
  wCarouselCreateReducer,
  wCarouselDeleteReducer,
} from "./reducers/carouselReducers";
import {
  createRegistrationsReducer,
  registrationDetailsReducer,
  registrationsDeleteReducer,
  submittedRegistrationsReducer,
} from "./reducers/registrationReducers";
import {
  addedModalReducer,
  addedWModalReducer,
  modalCreateReducer,
  modalDeleteReducer,
  wModalCreateReducer,
  wModalDeleteReducer,
} from "./reducers/modalReducers";
import {
  addedTeamsReducer,
  teamsCreateReducer,
  teamsDeleteReducer,
} from "./reducers/teamsReducers";
import {
  addedStudentsTestimonialsReducer,
  addedVisitorsTestimonialsReducer,
  addedWomenTestimonialsReducer,
  studentsTestimonialsCreateReducer,
  studentsTestimonialsDeleteReducer,
  visitorsTestimonialsCreateReducer,
  visitorsTestimonialsDeleteReducer,
  womenTestimonialsCreateReducer,
  womenTestimonialsDeleteReducer,
} from "./reducers/testimonialsReducers";
import {
  careerCreateReducer,
  careerDeleteReducer,
  careerDetailsReducer,
  careersListReducer,
  careerUpdateReducer,
} from "./reducers/careerReducers";

const reducer = combineReducers({
  newsList: newsListReducer,
  newsDetails: newsDetailsReducer,
  newsCreate: newsCreateReducer,
  newsDelete: newsDeleteReducer,
  newsUpdate: newsUpdateReducer,
  latestNews: latestNewsReducer,
  availableCarousel: availableCarouselReducer,
  carouselCreate: carouselCreateReducer,
  carouselDelete: carouselDeleteReducer,
  availableWCarousel: availableWCarouselReducer,
  carouselWCreate: wCarouselCreateReducer,
  carouselWDelete: wCarouselDeleteReducer,
  addedModal: addedModalReducer,
  modalCreate: modalCreateReducer,
  modalDelete: modalDeleteReducer,
  addedWModal: addedWModalReducer,
  wModalCreate: wModalCreateReducer,
  wModalDelete: wModalDeleteReducer,
  addedTeams: addedTeamsReducer,
  teamsCreate: teamsCreateReducer,
  teamsDelete: teamsDeleteReducer,
  addedStudentsTestimonials: addedStudentsTestimonialsReducer,
  studentsTestimonialsCreate: studentsTestimonialsCreateReducer,
  studentsTestimonialsDelete: studentsTestimonialsDeleteReducer,
  addedVisitorsTestimonials: addedVisitorsTestimonialsReducer,
  visitorsTestimonialsCreate: visitorsTestimonialsCreateReducer,
  visitorsTestimonialsDelete: visitorsTestimonialsDeleteReducer,
  addedWomenTestimonials: addedWomenTestimonialsReducer,
  womenTestimonialsCreate: womenTestimonialsCreateReducer,
  womenTestimonialsDelete: womenTestimonialsDeleteReducer,
  upcomingEvents: upcomingEventsReducer,
  upcomingAdminEvents: upcomingAdminEventsReducer,
  upcomingLatestEvents: upcomingLatestEventsReducer,
  eventsCreate: eventsCreateReducer,
  eventsDelete: eventsDeleteReducer,
  galleryAlbums: galleryAlbumsReducer,
  galleryWAlbums: galleryWAlbumsReducer,
  galleryAlbumCreate: galleryAlbumCreateReducer,
  galleryWAlbumCreate: galleryWAlbumCreateReducer,
  galleryAlbumDelete: galleryAlbumDeleteReducer,
  galleryWAlbumDelete: galleryWAlbumDeleteReducer,
  singleGalleryAlbum: singleGalleryAlbumReducer,
  singleWGalleryAlbum: singleWGalleryAlbumReducer,
  galleryVideos: galleryVideosReducer,
  galleryVideosCreate: galleryVideosCreateReducer,
  galleryVideosDelete: galleryVideosDeleteReducer,
  availableStaffs: availableStaffsReducer,
  staffsCreate: staffsCreateReducer,
  staffsDelete: staffsDeleteReducer,
  availableNotices: availableNoticesReducer,
  noticesCreate: noticesCreateReducer,
  noticesDelete: noticesDeleteReducer,
  latestNotices: latestNoticesReducer,
  downloadList: downloadListReducer,
  downloadCreate: downloadCreateReducer,
  downloadDelete: downloadDeleteReducer,
  singleDownloadCreate: singleDownloadCreateReducer,
  careersList: careersListReducer,
  careerDetails: careerDetailsReducer,
  careerCreate: careerCreateReducer,
  careerDelete: careerDeleteReducer,
  careerUpdate: careerUpdateReducer,
  createRegistrations: createRegistrationsReducer,
  submittedRegistrations: submittedRegistrationsReducer,
  registrationDetails: registrationDetailsReducer,
  registrationsDelete: registrationsDeleteReducer,
  userLogin: userLoginReducer,
  settings: settingReducers,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const defaultSettings = {
  sidebarToggle: true,
  darkMode: true,
  adminMode: false,
};

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  settings: localStorage.getItem("settings")
    ? JSON.parse(localStorage.getItem("settings"))
    : localStorage.setItem("settings", JSON.stringify(defaultSettings)),
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
