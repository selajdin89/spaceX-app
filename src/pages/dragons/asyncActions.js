import {
  fetchDragonsRequest,
  fetchDragonsSuccess,
  fetchDragonsFailure,
} from './actions';

export const fetchDragons = () => {
  return async (dispatch) => {
    dispatch(fetchDragonsRequest());
    try {
      const response = await fetch('https://api.spacexdata.com/v3/dragons');
      if (!response.ok) {
        throw new Error('Failed to fetch dragons');
      }
      const data = await response.json();
      dispatch(fetchDragonsSuccess(data));
    } catch (error) {
      dispatch(fetchDragonsFailure(error.message));
    }
  };
};
