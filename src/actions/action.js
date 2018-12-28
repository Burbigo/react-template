import { createAction } from 'redux-actions';

export const YOUR_ACTION_REQUEST = 'YOUR_ACTION_REQUEST';
export const YOUR_ACTION_SUCCESS = 'YOUR_ACTION_SUCCESS';
export const YOUR_ACTION_FAILURE = 'YOUR_ACTION_FAILURE';

export const yourActionRequest = createAction(YOUR_ACTION_REQUEST);
export const yourActionSuccess = createAction(YOUR_ACTION_SUCCESS);
export const yourActionFailure = createAction(YOUR_ACTION_FAILURE);