import {
  ADD_ITEM,
  REMOVE_ITEM
} from '../actions';

import { initialState } from '../reducer';


export default function character(state = initialState.character, action) {
  switch (action.type) {
    case ADD_ITEM:
      return applySkillModifiers(state, action.item, addModifier);

    case REMOVE_ITEM:
      return applySkillModifiers(state, action.item, removeModifier);

    default:
      return state;
  }
}

function applySkillModifiers(state, item, modify) {
  const newState = [...state];
  if (item.effects) {
    item.effects.forEach(e => modify(newState, e));
  }
  return newState;
}

function removeModifier(state, itemEffect) {
  const index = state.findIndex(s => s.name === itemEffect.skill);
  const newState = [...state];
  newState[index].modifier = (state[index].modifier || 0) - itemEffect.value;
  return newState;
}

function addModifier(state, itemEffect) {
  const index = state.findIndex(s => s.name === itemEffect.skill);
  const newState = [...state];
  newState[index].modifier = (state[index].modifier || 0) + itemEffect.value;
  return newState;
}
