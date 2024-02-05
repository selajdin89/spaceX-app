export const FETCH_DRAGONS_REQUEST = 'FETCH_DRAGONS_REQUEST';
export const FETCH_DRAGONS_SUCCESS = 'FETCH_DRAGONS_SUCCESS';
export const FETCH_DRAGONS_FAILURE = 'FETCH_DRAGONS_FAILURE';

export const fetchDragonsRequest = () => ({
  type: FETCH_DRAGONS_REQUEST,
});

export const fetchDragonsSuccess = (dragons) => ({
  type: FETCH_DRAGONS_SUCCESS,
  payload: dragons,
});

export const fetchDragonsFailure = (error) => ({
  type: FETCH_DRAGONS_FAILURE,
  payload: error,
});
