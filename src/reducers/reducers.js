import { combineReducers } from 'redux';

const initialState = {
  video: '',
  file: '',
  hash: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      console.log('state',state);
      console.log('action', action);
      return {
        ...state,
        video: action.video,
      };
      break;
    case 'ADD_HASH':
      console.log('REDUCER', action.hash);
      return {
        ...state,
        hash: action.hash,
      };
      break;
    case 'ADD_FILE':
      console.log('action', action);
      return {
        ...state,
        file: action.file
      }
    default:
      return state;
  }
}
