import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from ".toolkit-SCML7RY9/dist/devtoolsExtension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
