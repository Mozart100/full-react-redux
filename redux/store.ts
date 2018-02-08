import { applyMiddleware,  createStore } from 'redux';
// import rootReducer from './reducers/index';
import  {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const appliyedMiddleware =applyMiddleware(thunk,logger);
// const appliyedMiddleware =applyMiddleware(thunk,logger,routerMiddleware(browserHistory));
const finalStore = composeWithDevTools(appliyedMiddleware)(createStore);

export default finalStore;
