import { combineReducers } from 'redux';


const initialState = {
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
        { skill: 'Combat', modification: 1 },
        { skill: 'Pride', modification: -1 },
      ],
    },
    {
      name: 'Pet rock',
    },
  ],
};

function character(state = initialState.stats, action) {
  return state;
}

function inventory(state = initialState.inventory, action) {
  switch (action.type) {
    case 'addItem':
      return [...state, action.item];
    case 'removeItem':
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
