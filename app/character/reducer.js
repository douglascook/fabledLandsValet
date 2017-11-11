import {
  ADD_ITEM,
  REMOVE_ITEM
} from '../actions';

import { initialState } from '../reducer';


export default function character(state = initialState.character, action) {
  switch (action.type) {
    case ADD_ITEM:
      return applySkillModifiers(
        state, action.item, (value, modifier) => (value + modifier)
      );

    case REMOVE_ITEM:
      return applySkillModifiers(
        state, action.item, (value, modifier) => (value - modifier)
      );

    default:
      return state;
  }
}

function applySkillModifiers(state, item, applyEffect) {
  const newState = {...state};
  if (item.effects) {
    item.effects.forEach(e => modifyStat(newState, e, applyEffect));
  }
  return newState;
}

function modifyStat(state, itemEffect, applyEffect) {
  const currentModifier = state[itemEffect.skill].modifier || 0;
  state[itemEffect.skill].modifier = applyEffect(
    currentModifier, itemEffect.value);
  return state;
}
