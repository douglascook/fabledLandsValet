import {
  ADD_ITEM,
  REMOVE_ITEM,
  SWAP_ITEM_COLLECTION,
} from '../actions';

import { initialState } from '../reducer';


export default function possessions(state = initialState.possessions, action) {
  switch (action.type) {

    case ADD_ITEM: {
      const { items, shards } = state.personal;
      return {
        ...state,
        personal: {
          items: [...items, action.item],
          shards,
        }
      };
    }

    case REMOVE_ITEM: {
      const { items, shards } = state.personal;
      return {
        ...state,
        personal: {
          items: [
            ...items.slice(0, action.index),
            ...items.slice(action.index + 1),
          ],
          shards,
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

    default:
      return state;
  }
}
