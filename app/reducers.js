import { combineReducers } from 'redux';

import {
  ADD_ITEM,
  REMOVE_ITEM,
} from './actions';

const initialState = {
  // array so that we can set the order
  stats: [
    { name: 'Name', value: 'Gerald Littlefoot' },
    { name: 'Profession', value: 'Wayfarer' },
    { name: 'Rank', value: 1 },
    { name: 'Defence', value: 5 },
    { name: 'Stamina', value: 12 },
    { name: 'Charisma', value: 5 },
    { name: 'Combat', value: 5 },
    { name: 'Magic', value: 5 },
    { name: 'Sanctity', value: 5 },
    { name: 'Scouting', value: 5 },
    { name: 'Thievery', value: 5 },
    { name: 'God', value: 'None' },
    { name: 'Money', value: '6 shards' },
    { name: 'Titles and Honours', value: 'None' },
    { name: 'Blessings', value: 'None' },
    { name: 'Resurrection Arrangements', value: 'None' },
  ],
  inventory: [
    {
      name: 'Wooden sword',
      effects: [
        { skill: 'Combat', value: 1 },
      ],
    },
    {
      name: 'Pet rock',
    },
  ],
};

function character(state = initialState.stats, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, updateStatModifier(state, action)];

    default:
      return state
  }
}

function updateStatModifier(state, action) {
  // TODO handle multiple effects
  const itemEffect = action.item.effects[0];
  const stat = state.filter(s => s.name === itemEffect.skill)[0];
  const statModifier = stat.modifier || 0;
  stat.modifier = statModifier + itemEffect.value;
  return stat
}

function inventory(state = initialState.inventory, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item];

    case REMOVE_ITEM:
      return [
        ...state.slice(0, action.key),
        ...state.slice(action.key + 1),
      ];

    default:
      return state;
  }
}

export default combineReducers({
  stats: character,
  inventory,
});
