import {
  YOUR_ACTION_REQUEST,
  YOUR_ACTION_SUCCESS,
  YOUR_ACTION_FAILURE
} from 'actions/action';

const initialState = {
  isFetching: false,
  some_property: ''
};

const action = (state = initialState, action) => {
  switch (action.type) {
    case YOUR_ACTION_REQUEST:
      return {
        ...state,
        isFetching: true,
        some_property: action.payload
      };
    case YOUR_ACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        some_property: action.payload
      };
    case YOUR_ACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        some_property: action.payload
      };
    default:
      return state
  }
};

export default action;