import { combineReducers } from 'redux';

import character from './character/reducer';
import possessions from './possessions/reducer';
import ships from './ships/reducer';
import codewords from './codewords/reducer';
import tickboxes from './tickboxes/reducer';

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
      attribute: 'Defence', value: 6
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
      attribute: 'Titles & Honours', value: [],
    },
    blessings: {
      attribute: 'Blessings', value: [],
    },
    resurrection: {
      attribute: 'Resurrection Arrangements', value: [],
    },
  },

  possessions: {
    personal: [],
    bank: {
      shards: 0,
      items: []
    },
    invested: {
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
