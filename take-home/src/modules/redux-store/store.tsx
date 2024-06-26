import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
const pokemonStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default pokemonStore;
