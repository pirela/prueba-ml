import { FETCH_ERROR, FETCH_SUCCESS } from '../actions/types';

const initialState = {
  items: [],
  categories: [],
  error: null,
  author: {
    name: 'Jose',
    lastname: 'Pirela'
  },
}
 
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
      case FETCH_ERROR:
        return {
          ...state,
          error: action.payload
        }    
    default:
      return state;
  }
};

export default dataReducer;