import { combineReducers } from 'redux';


const initialState = {
  component: 'entrance',
  videos: {},
}

function renderComponent (state = initialState, action) {

  return state;
}

function renderVideo (state = initialState, action) {

  return state;
}

const reducers = combineReducers({
  renderComponent,
  renderVideo
})

export default reducers;
