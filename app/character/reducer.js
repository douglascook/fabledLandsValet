import {
  ADD_ITEM,
  REMOVE_ITEM
} from '../actions';
import { initialState } from '../reducer.js';


export default function character(state = initialState.stats, action) {
  switch (action.type) {
    case ADD_ITEM:
      return applyStatModifiers(state, action.item, addModifier);

    case REMOVE_ITEM:
      return applyStatModifiers(state, action.item, removeModifier);

    default:
      return state;
  }
}

function applyStatModifiers(state, item, modify) {
  const newState = [...state];
  if (item.effects) {
    item.effects.forEach(e => modify(newState, e));
  }
  return newState;
}

function removeModifier(state, itemEffect) {
  const index = state.findIndex(s => s.name === itemEffect.skill);
  state[index].modifier = (state[index].modifier || 0) - itemEffect.value;
  return state;
}

function addModifier(state, itemEffect) {
  const index = state.findIndex(s => s.name === itemEffect.skill);
  state[index].modifier = (state[index].modifier || 0) + itemEffect.value;
  return state;
}
