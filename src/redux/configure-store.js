import  rootReducer  from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";



const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);



