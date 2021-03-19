import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  // Compose with redux devtools if it exists in the browser
  const {
    // @ts-ignore
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolsCompose = null,
  } = window;
  composeEnhancers = devToolsCompose || compose;
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
