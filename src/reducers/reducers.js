import { combineReducers } from 'redux';

const initialState = {
  videos: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      return {
        ...state,
        videos: {
          ...state.videos,
        }
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
