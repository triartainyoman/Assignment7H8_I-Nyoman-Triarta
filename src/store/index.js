import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
  backlogList: [],
  inprogressList: [],
  evaluationList: [],
  doneList: [],
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BACKLOG":
      return {
        ...state,
        backlogList: [...state.backlogList, action.payload],
      };
    case "REMOVE_BACKLOG":
      return {
        ...state,
        backlogList: [
          ...state.backlogList.filter((task, idx) => {
            return idx !== action.payload;
          }),
        ],
      };
    case "SET_INPROGRESS":
      return {
        ...state,
        inprogressList: [...state.inprogressList, action.payload],
      };
    case "REMOVE_INPROGRESS":
      return {
        ...state,
        inprogressList: [
          ...state.inprogressList.filter((task, idx) => {
            return idx !== action.payload;
          }),
        ],
      };
    case "SET_EVALUATION":
      return {
        ...state,
        evaluationList: [...state.evaluationList, action.payload],
      };
    case "REMOVE_EVALUATION":
      return {
        ...state,
        evaluationList: [
          ...state.evaluationList.filter((task, idx) => {
            return idx !== action.payload;
          }),
        ],
      };
    case "SET_DONE":
      return {
        ...state,
        doneList: [...state.doneList, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(actionReducer, applyMiddleware(thunk, logger));

export default store;
