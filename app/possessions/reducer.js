import {
  ADD_ITEM,
  REMOVE_ITEM,
  SWAP_ITEM_COLLECTION,
  ADD_STASH,
} from '../actions';

import { initialState } from '../reducer';


export default function possessions(state = initialState.possessions, action) {
  switch (action.type) {

    case ADD_ITEM:
      return {
        ...state,
        personal: {
          items: [...state.personal.items, action.item],
        }
      };

    case REMOVE_ITEM: {
      const { items } = state.personal;
      return {
        ...state,
        personal: {
          items: [
            ...items.slice(0, action.index),
            ...items.slice(action.index + 1),
          ],
        }
      };
    }

    case SWAP_ITEM_COLLECTION: {
      const { itemIndex, currentCol, newCol } = action;
      const newState = { ...state };

      newState[newCol].items.push(newState[currentCol].items[itemIndex]);
      newState[currentCol].items = [
        ...newState[currentCol].items.slice(0, itemIndex),
        ...newState[currentCol].items.slice(itemIndex + 1),
      ];
      return newState;
    }

    case ADD_STASH:
      return {
        ...state,
        [action.name]: {
          shards: 0,
          items: []
        }
      };

    default:
      return state;
  }
}
