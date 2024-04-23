import { createStore } from "redux";
import rootReducers from "./Reducer";

// const store= createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store= createStore(rootReducers);

export default store;