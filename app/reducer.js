import { combineReducers } from 'redux';

import character from './character/reducer';
import inventory from './inventory/reducer';

export const initialState = {
  character: {
    name: {
      attribute: 'Name', value: 'Gerald Littlefoot'
    },
    profession: {
      attribute: 'Profession', value: 'Wayfarer'
    },
    rank: {
      attribute: 'Rank', value: 1
    },
    defence: {
      attribute: 'Defence', value: 5
    },
    stamina: {
      attribute: 'Stamina', value: 12
    },
    charisma: {
      attribute: 'Charisma', value: 5
    },
    combat: {
      attribute: 'Combat', value: 5
    },
    magic: {
      attribute: 'Magic', value: 5
    },
    sanctity: {
      attribute: 'Sanctity', value: 5
    },
    scouting: {
      attribute: 'Scouting', value: 5
    },
    thievery: {
      attribute: 'Thievery', value: 5
    },
    shards: {
      attribute: 'Shards', value: 6
    },
    god: {
      attribute: 'God', value: 'None'
    },
    titles: {
      attribute: 'Titles & Honours', value: ['Boss man', 'Samurai'],
    },
    blessings: {
      attribute: 'Blessings', value: [],
    },
    resurrection: {
      attribute: 'Resurrection Arrangements', value: [],
    },
  },

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
  character,
  inventory,
});
