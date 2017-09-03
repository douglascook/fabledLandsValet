import {
  ADD_ITEM,
  REMOVE_ITEM,
} from '../actions';
import { initialState } from '../reducer.js';

export default function inventory(state = initialState.inventory, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item];

    case REMOVE_ITEM:
      return [
        ...state.slice(0, action.key),
        ...state.slice(action.key + 1),
      ];

    default:
      return state;
  }
}
