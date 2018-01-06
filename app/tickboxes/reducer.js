import { initialState } from '../reducer';

import {
  ADD_TICK,
  REMOVE_TICK,
} from '../actions';


export default function tickboxes(state = initialState.tickboxes, action) {
  switch (action.type) {

    case ADD_TICK:
      return [
        ...state,
        { book: action.book,
          pageNumber: action.pageNumber },
      ];

    case REMOVE_TICK: {
      const index = state.findIndex(
        i => (i.book === action.book && i.pageNumber === action.pageNumber));
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }

    default:
      return state;
  }
}
