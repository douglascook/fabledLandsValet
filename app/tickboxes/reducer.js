import {
  ADD_TICK,
  REMOVE_TICK,
  CREATE_NEW_CHARACTER,
  LOAD_SAVE,
} from '../actions';


export const initialState = {
  0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: []
};
// Example state: {0: [123], 1: [234], 2: [], 3: [], 4: [], 5: [], 6: [], 7: []};

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
      const index = state[book].findIndex((page) => page === pageNumber);
      return {
        ...state,
        [book]: [
          ...state[book].slice(0, index),
          ...state[book].slice(index + 1),
        ]
      };
    }

    case CREATE_NEW_CHARACTER:
      return initialState;

    case LOAD_SAVE:
      return action.state.tickboxes;

    default:
      return state;
  }
}
