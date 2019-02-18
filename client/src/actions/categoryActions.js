import axios from 'axios';
import { GET_CATEGORIES, ADD_ITEM, DELETE_ITEM, CATEGORIES_LOADING } from './types';

export const getCategories = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/categories').then(res =>
    dispatch({
      type: GET_CATEGORIES,
      payload: res.categories
    })
  );
};

export const addCategories = item => dispatch => {
  axios.post('/api/categories', item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteCategories = id => dispatch => {
  axios.delete(`/api/categories/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: CATEGORIES_LOADING
  };
};
