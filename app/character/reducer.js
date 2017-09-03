import { ADD_ITEM, } from '../actions';
import { initialState } from '../reducer.js';


export default function character(state = initialState.stats, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, updateStatModifier(state, action)];

    default:
      return state;
  }
}

function updateStatModifier(state, action) {
  // TODO handle multiple effects
  const itemEffect = action.item.effects[0];
  const stat = state.filter(s => s.name === itemEffect.skill)[0];
  const statModifier = stat.modifier || 0;
  stat.modifier = statModifier + itemEffect.value;
  return stat;
}
