import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

let composeEnhancers = compose;
if (
  process.env.NODE_ENV === 'development'
  && Number(process.env.REACT_APP_REDUX_LOGS)
) {
  // eslint-disable-next-line global-require
  // const { logger } = require('redux-logger');
  // middleware.push(logger);
}

if (process.env.NODE_ENV === 'development') {
  // Compose with redux devtools if it exists in the browser
  const {
    // @ts-ignore
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolsCompose = null,
  } = window;
  composeEnhancers = devToolsCompose || compose;

  // Compose with react saga devtool
  // @ts-ignore
  // const monitor = window.__SAGA_MONITOR_EXTENSION__; // eslint-disable-line no-underscore-dangle
  // const sagaDevtoolsExtensionMiddleware = createSagaMiddleware({
  //   sagaMonitor: monitor,
  // });
  // middleware.push(sagaDevtoolsExtensionMiddleware);
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
