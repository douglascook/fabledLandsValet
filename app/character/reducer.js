import { ADD_ITEM, } from '../actions';
import { initialState } from '../reducer.js';


export default function character(state = initialState.stats, action) {
  switch (action.type) {
    case ADD_ITEM:
      return updateStatModifier(state, action);

    default:
      return state;
  }
}

function updateStatModifier(state, action) {
  // TODO handle multiple effects
  const itemEffect = action.item.effects[0];
  const index = state.findIndex(s => s.name === itemEffect.skill);
  const newState = [...state];
  newState[index].modifier = (state[index].modifier || 0) + itemEffect.value;
  return newState;
}
