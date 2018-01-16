import { combineReducers } from 'redux';

const initialState = {
  video: '',
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
    default:
      return state;
  }
}

// const reducers = combineReducers({
//   // renderComponent,
//   addVideo
// })
//
// export default reducers;
