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
    case 'ADD_HASH':
      return {
        ...state,
        hash: action.hash,
      };
    case 'ADD_FILE':
      return {
        ...state,
        file: action.file
      }
    default:
      return state;
  }
}
