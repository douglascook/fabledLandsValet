import {
  ADD_TICK,
  REMOVE_TICK,
  CREATE_NEW_CHARACTER,
  LOAD_SAVE,
} from '../actions';


// Example state: {0: [[123, 2]], 1: [[234, 1]], 2: [], 3: [], 4: [], 5: [], 6: [], 7: []};
export const initialState = {
  0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: []
};

export default function tickboxes(state = initialState, action) {
  switch (action.type) {

    case ADD_TICK: {
      let { book, pageNumber } = action;
      pageNumber = Number(pageNumber);
      const index = state[book].findIndex((page) => page[0] === pageNumber);

      if (index === -1) {
        // add a new tick if it did not already exist
        return {
          ...state,
          [book]: [
            ...state[book],
            [pageNumber, 1]
          ]
        };
      }
      // increment count if it did exist
      return {
        ...state,
        [book]: [
          ...state[book].slice(0, index),
          [pageNumber, state[book][index][1] + 1],
          ...state[book].slice(index + 1),
        ]
      };
    }

    case REMOVE_TICK: {
      let { book, pageNumber } = action;
      pageNumber = Number(pageNumber);
      const index = state[book].findIndex((page) => page[0] === pageNumber);
      const tick = state[book][index];

      if (tick[1] === 1) {
        // remove the tick if count will be reduced to zero
        return {
          ...state,
          [book]: [
            ...state[book].slice(0, index),
            ...state[book].slice(index + 1),
          ]
        };
      }
      // otherwise decrement the count by 1
      return {
        ...state,
        [book]: [
          ...state[book].slice(0, index),
          [pageNumber, tick[1] - 1],
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
