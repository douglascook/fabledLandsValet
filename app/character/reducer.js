import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_SKILL_VALUE,
  UPDATE_MAX_STAMINA,
  UPDATE_CURRENT_STAMINA,
  ADD_ASSET,
  REMOVE_ASSET,
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

    case UPDATE_MAX_STAMINA: {
      const { stamina } = state;
      // max cannot go below zero
      const newMax = Math.max(stamina.value + action.modifier, 0);
      return {
        ...state,
        stamina: {
          ...stamina,
          value: newMax,
          // current cannot be higher than max
          current: Math.min(stamina.current, newMax),
        },
      };
    }

    case UPDATE_CURRENT_STAMINA: {
      const { stamina } = state;
      // current cannot be higher than max
      const newCurrent = Math.min(stamina.current + action.modifier, stamina.value);
      return {
        ...state,
        stamina: {
          ...stamina,
          ...state.stamina,
          current: newCurrent,
        }
      };
    }

    case ADD_ASSET: {
      const items = state[action.attr].value;
      const newState = { ...state };
      newState[action.attr].value = [...items, action.item];
      return newState;
    }

    case REMOVE_ASSET: {
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
