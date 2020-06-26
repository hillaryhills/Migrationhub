import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(
  // logger,
  reduxThunk
)(createStore);

const store = createStoreWithMiddleware(composeEnhancers());

export default store;
