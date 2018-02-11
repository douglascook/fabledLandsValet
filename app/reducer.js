import { combineReducers } from 'redux';

import character from './character/reducer';
import possessions from './possessions/reducer';
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

  possessions: [],

  codewords: [
    'Acid', 'Bait', 'Dangle', 'Earth',
  ],

  tickboxes: [{
    book: 0,
    pageNumber: '123',
  }, {
    book: 1,
    pageNumber: '234',
  }],
};

export default combineReducers({
  character,
  possessions,
  codewords,
  tickboxes,
});
