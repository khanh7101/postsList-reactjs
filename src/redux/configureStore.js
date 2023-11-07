import { createStore, combineReducers, applyMiddleware } from "redux";
import { PostsReducer } from "./posts";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      
      posts: PostsReducer,
    }),

    applyMiddleware(thunk, logger)
  );

  return store;
};
