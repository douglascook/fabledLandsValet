import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_SKILL_VALUE,
  ADD_ITEM_TO_ATTRIBUTE,
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

    case UPDATE_SKILL_VALUE:
      return {
        ...state,
        [action.skillName]: {
          ...state[action.skillName],
          value: action.newValue
        },
      };

    case ADD_ITEM_TO_ATTRIBUTE:
      return {
        ...state,
        [action.name]: {
          attribute: state[action.name].attribute,
          value: [...state[action.name].value, action.item],
        }
      };

    default:
      return state;
  }
}

function applySkillModifiers(state, item, applyEffect) {
  const newState = {...state};
  if (item.effects) {
    item.effects.forEach(e => modifySkill(newState, e, applyEffect));
  }
  return newState;
}

function modifySkill(state, itemEffect, applyEffect) {
  const currentModifier = state[itemEffect.skill].modifier || 0;
  state[itemEffect.skill].modifier = applyEffect(
    currentModifier, itemEffect.value);
  return state;
}
