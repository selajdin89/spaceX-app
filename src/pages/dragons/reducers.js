import {
    FETCH_DRAGONS_REQUEST,
    FETCH_DRAGONS_SUCCESS,
    FETCH_DRAGONS_FAILURE,
  } from './actions';
  
  const initialState = {
    dragons: [],
    loading: false,
    error: null,
  };
  
  const dragonsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DRAGONS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DRAGONS_SUCCESS:
        return {
          ...state,
          loading: false,
          dragons: action.payload,
        };
      case FETCH_DRAGONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dragonsReducer;
  