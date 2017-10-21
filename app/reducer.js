import { combineReducers } from 'redux';

import character from './character/reducer';
import inventory from './inventory/reducer';

export const initialState = {
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

export default combineReducers({
  stats: character,
  inventory,
});
