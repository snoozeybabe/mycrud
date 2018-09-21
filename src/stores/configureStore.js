import { createStore, applyMiddleware , compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers/rootReducer';
import promise from 'redux-promise';
 import thunk from 'redux-thunk';
const initialState = [];


const createStoreWithMiddleWare = applyMiddleware(apiMiddleware,thunk)(createStore);

export default function configureStore(initialState){
  return createStoreWithMiddleWare(rootReducer, initialState);
}

// export default function  configureStore (initial_state){
//   const finalCreateStore = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(promise, apiMiddleware)
//   )(createStore)
//   const store = finalCreateStore(rootReducer,initial_state);

//   return store;
// }




