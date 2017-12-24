import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_SKILL_VALUE,
  APPEND_TO_ATTRIBUTE,
  REMOVE_FROM_ATTRIBUTE,
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

    case APPEND_TO_ATTRIBUTE: {
      const items = state[action.attr].value;
      const newState = { ...state };
      newState[action.attr].value = [...items, action.item];
      return newState;
    }

    case REMOVE_FROM_ATTRIBUTE: {
      const items = state[action.attr].value;
      const newState = { ...state };
      newState[action.attr].value = [
        ...items.slice(0, action.index), ...items.slice(action.index + 1)
      ];
      return newState;
    }

    default:
      return state;
  }
}

function applySkillModifiers(state, item, applyEffect) {
  const newState = { ...state };
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
