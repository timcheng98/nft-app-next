import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchainReducer";
import dataReducer from "./data/dataReducer";
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
});
import logger from 'redux-logger'


const middleware = [thunk, logger];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};
const makeStore = context => createStore(rootReducer, composeEnhancers);

const store = configureStore();
export const wrapper = createWrapper(makeStore, {debug: true});

export default store;
