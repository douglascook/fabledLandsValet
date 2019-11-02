import {
  ADD_CODEWORD,
  REMOVE_CODEWORD,
  CREATE_NEW_CHARACTER,
} from '../actions';


export const initialState = [];
// Example state: ['Acid', 'Bait', 'Dangle', 'Earth']

export default function codewords(state = initialState, action) {
  switch (action.type) {

    case ADD_CODEWORD:
      return [...state, action.codeword];

    case REMOVE_CODEWORD:
      return state.filter(w => w !== action.codeword);

    case CREATE_NEW_CHARACTER:
      return initialState;

    default:
      return state;
  }
}
