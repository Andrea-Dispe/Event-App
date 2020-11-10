// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../api/index.js";
import * as api from '../api/index.js';

// actions creators
// functions that return a function which contain an object
// which has a type and a payload. If we need with async logic than we need to
// redux thunk which adds tha sync dispatch function that contains the action object
// and dispatch he action instead of returning it

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL' , payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
