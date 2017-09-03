import { ADD_ITEM, } from '../actions';
import { initialState } from '../reducer.js';


export default function character(state = initialState.stats, action) {
  switch (action.type) {
    case ADD_ITEM:
      return updateStatModifiers(state, action);

    default:
      return state;
  }
}

function updateStatModifiers(state, action) {
  const newState = [...state];
  action.item.effects.forEach(e => updateStatModifier(newState, e));
  return newState;
}

function updateStatModifier(state, itemEffect) {
  const index = state.findIndex(s => s.name === itemEffect.skill);
  state[index].modifier = (state[index].modifier || 0) + itemEffect.value;
  return state;
}
