const initialState = {
  video: '',
  file: '',
  hash: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      return {
        ...state,
        video: action.video,
      };
      break;
    case 'ADD_HASH':
      return {
        ...state,
        hash: action.hash,
      };
      break;
    case 'ADD_FILE':
      return {
        ...state,
        file: action.file
      }
    default:
      return state;
  }
}
