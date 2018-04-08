import { combineReducers } from 'redux';

import character from './character/reducer';
import possessions from './possessions/reducer';
import ships from './ships/reducer';
import codewords from './codewords/reducer';
import tickboxes from './tickboxes/reducer';

export const initialState = {
  character: {
    name: {
      displayName: 'Name', value: 'Gerald Littlefoot'
    },
    profession: {
      displayName: 'Profession', value: 'Wayfarer'
    },
    rank: {
      displayName: 'Rank', value: 1
    },
    defence: {
      displayName: 'Defence', value: 6
    },
    stamina: {
      displayName: 'Stamina', value: 12, current: 12,
    },
    charisma: {
      displayName: 'Charisma', value: 5
    },
    combat: {
      displayName: 'Combat', value: 5
    },
    magic: {
      displayName: 'Magic', value: 5
    },
    sanctity: {
      displayName: 'Sanctity', value: 5
    },
    scouting: {
      displayName: 'Scouting', value: 5
    },
    thievery: {
      displayName: 'Thievery', value: 5
    },
    shards: {
      displayName: 'Shards', value: 6
    },
    god: {
      displayName: 'God', value: 'None'
    },
    titles: {
      displayName: 'Titles & Honours', value: [],
    },
    blessings: {
      displayName: 'Blessings', value: [],
    },
    resurrection: {
      displayName: 'Resurrection Arrangements', value: [],
    },
  },

  possessions: {
    personal: {
      items: []
    },
    Bank: {
      shards: 0,
      items: []
    },
    Invested: {
      shards: 0,
      items: []
    },
  },

  codewords: [
    'Acid', 'Bait', 'Dangle', 'Earth',
  ],

  tickboxes: {
    0: [123],
    1: [234],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
  },

  ships: [],

};

export default combineReducers({
  character,
  possessions,
  ships,
  codewords,
  tickboxes,
});
