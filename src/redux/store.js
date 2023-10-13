import { createStore } from 'redux';
import languageReducer from './reducers'; // Update the import path if in a subdirectory

// Step 1: Create the store
const store = createStore(languageReducer);

export default store;
