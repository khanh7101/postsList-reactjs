import { POSTS } from "../shared/posts";


const initialState = {
  posts: POSTS,
  
};
export const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POSTS':
      return {
        ...state,
        posts: [...state.posts, action.payload],
     
      };
    default:
      return state;
  }
};
