import createHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'redux-first-routing';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const history = (() => createHistory({ initialEntries: ['/'] }))();

export default (() => {
  const middleware = applyMiddleware(routerMiddleware(history), thunk);
  return [reducers, middleware];
})();
