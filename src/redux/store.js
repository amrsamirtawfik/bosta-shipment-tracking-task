// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import languageReducer from './reducers';
import thunk from 'redux-thunk'; // Import Redux Thunk

const rootReducer = combineReducers({
  centralizedData: languageReducer
  // Add other reducers as needed
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply the Redux Thunk middleware

export default store;
