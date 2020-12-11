import  rootReducer  from './rootReducer';
import rootSaga from './rootSaga';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import { composeWithDevTools } from 'redux-devtools-extension';



const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);



