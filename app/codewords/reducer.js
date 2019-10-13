import {
  ADD_CODEWORD,
  REMOVE_CODEWORD,
} from '../actions';


export const initialState = ['Acid', 'Bait', 'Dangle', 'Earth'];

export default function codewords(state = initialState, action) {
  switch (action.type) {

    case ADD_CODEWORD:
      return [...state, action.codeword];

    case REMOVE_CODEWORD:
      return state.filter(w => w !== action.codeword);

    default:
      return state;
  }
}
