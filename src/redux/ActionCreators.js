import * as ActionTypes from "./ActionTypes";
import { POSTS } from "../shared/posts";

export const addPosts = (
  postId,
  title,
  author,
  content,
  tags,
  timestamp,
  status
) => ({
  type: ActionTypes.ADD_POSTS,
  payload: {
    postId: postId,
    title: title,
    author: author,
    content: content,
    tags: tags,
    status: status,
    timestamp: new Date(),
  },
});

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading(true));

  setTimeout(() => {
    dispatch(addPosts(POSTS));
  }, 2000);
};

export const postsLoading = () => ({
  type: ActionTypes.POSTS_LOADING,
});

export const postsFailed = (errmess) => ({
  type: ActionTypes.POSTS_FAILED,
  payload: errmess,
});
