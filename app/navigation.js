import {
  TabNavigator,
} from 'react-navigation';

import Character from './character/character';
import Inventory from './inventory/inventory';
import Codewords from './codewords/codewords';
import Tickboxes from './tickboxes/tickboxes';

const Navigation = TabNavigator({
  character: {
    screen: Character,
    navigationOptions: {
      tabBarLabel: 'Character'
    },
  },
  inventory: {
    screen: Inventory,
    navigationOptions: {
      tabBarLabel: 'Inventory'
    },
  },
  codewords: {
    screen: Codewords,
    navigationOptions: {
      tabBarLabel: 'Codewords'
    },
  },
  tickboxes: {
    screen: Tickboxes,
    navigationOptions: {
      tabBarLabel: 'Tickboxes'
    },
  },
}, {
  tabBarPosition: 'bottom',
  lazyLoad: true,
  tabBarOptions: {
    upperCaseLabel: false,
  }
});

export default Navigation;
