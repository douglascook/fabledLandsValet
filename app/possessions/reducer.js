import {
  ADD_ITEM,
  REMOVE_ITEM,
} from '../actions';

import { initialState } from '../reducer';


export default function possessions(state = initialState.possessions, action) {
  switch (action.type) {

    case ADD_ITEM:
      return {
        ...state,
        personal: [...state.personal, action.item]
      };

    case REMOVE_ITEM:
      return {
        ...state,
        personal: [
          ...state.personal.slice(0, action.index),
          ...state.personal.slice(action.index + 1),
        ]
      };

    default:
      return state;
  }
}
