import { NavigationExperimental } from 'react-native';
import { combineReducers } from 'redux';

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;


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
    { name: 'Wooden sword', effect: 'Combat + 1' },
  ],
  navigation: {
    index: 0,
    routes: [{ key: 'character' }],
  },
};

function character(state = initialState.stats, action) {
  return state;
}

function inventory(state = initialState.inventory, action) {
  return state;
}

function navigation(state = initialState.navigation, action) {
  switch (action.type) {
    case 'push': {
      return NavigationStateUtils.push(state, action.route);
    }
    case 'pop': {
      return NavigationStateUtils.pop(state);
    }
    default:
      return state;
  }
}

export default combineReducers({
  stats: character,
  inventory,
  navigation,
});
