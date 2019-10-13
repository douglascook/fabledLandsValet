import {
  ADD_TICK,
  REMOVE_TICK,
} from '../actions';


export const initialState = {0: [123], 1: [234], 2: [], 3: [], 4: [], 5: [], 6: [], 7: []};

export default function tickboxes(state = initialState, action) {
  switch (action.type) {

    case ADD_TICK:
      return {
        ...state,
        [action.book]: [
          ...state[action.book],
          Number(action.pageNumber)
        ],
      };

    case REMOVE_TICK: {
      const { book, pageNumber } = action;
      const index = state[book].findIndex(page => page === pageNumber);
      return {
        ...state,
        [book]: [
          ...state[book].slice(0, index),
          ...state[book].slice(index + 1),
        ]
      };
    }

    default:
      return state;
  }
}
