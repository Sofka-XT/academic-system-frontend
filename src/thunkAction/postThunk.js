import { getPostById } from './../api/postApi';

import {
  LOADED_FAILURE,
  LOADED_SUCCESS,
  setPost,
} from './../state/Post/postAction';
import { loading } from './../state/Post/postAction';

export const givePost = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await getPostById();
      const data = await response.json();
      dispatch(setPost(data));
    } catch (error) {
      dispatch({ type: LOADED_FAILURE });
    }
  };
};
