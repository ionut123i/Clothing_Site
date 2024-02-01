import createSagaMiddleware from "redux-saga"
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import {createStore,applyMiddleware} from "redux"
import rootSaga from "./rootSaga";


const sagaMiddleware=createSagaMiddleware()

export const middlewares=[thunk,logger,sagaMiddleware]

export const store=createStore(rootReducer,applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)

export default store;

