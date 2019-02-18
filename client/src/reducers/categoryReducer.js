import {
    GET_CATEGORIES,   
    ITEMS_LOADING
  } from '../actions/types';
  
  const initialState = {
    categories: [],
    isLoaded: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
          isLoaded: true
        };
    default:
        return state;
    }

}