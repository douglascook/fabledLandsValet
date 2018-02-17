import { initialState } from '../reducer';

import {
  ADD_TICK,
  REMOVE_TICK,
} from '../actions';


export default function tickboxes(state = initialState.tickboxes, action) {
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
      const index = state[action.book].findIndex(
        page => page == action.pageNumber);
      return {
        ...state,
        [action.book]: [
          ...state[action.book].slice(0, index),
          ...state[action.book].slice(index + 1),
        ]
      };
    }

    default:
      return state;
  }
}
