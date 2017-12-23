import {
  TabNavigator,
} from 'react-navigation';

import Character from './character/character';
import Inventory from './inventory/inventory';

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
  }
}, {
  tabBarPosition: 'bottom',
  lazyLoad: true,
  tabBarOptions: {
    upperCaseLabel: false,
  }
});

export default Navigation;
