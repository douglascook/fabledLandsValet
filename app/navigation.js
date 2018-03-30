import React from 'react';

import {
  TabNavigator,
} from 'react-navigation';

import FaIcon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Character from './character/character';
import Possessions from './possessions/possessions';
import Stashes from './stashes/stashes';
import Ships from './ships/ships';
import Codewords from './codewords/codewords';
import Tickboxes from './tickboxes/tickboxes';
import Settings from './settings/settings';


const Navigation = TabNavigator({
  character: {
    screen: Character,
    navigationOptions: {
      tabBarIcon: () => <FaIcon name="user-circle-o" size={26} color="white" />,
    },
  },
  possessions: {
    screen: Possessions,
    navigationOptions: {
      tabBarIcon: () => <MatIcon name="sword" size={26} color="white" />,
    },
  },
  stashes: {
    screen: Stashes,
    navigationOptions: {
      tabBarIcon: () => <FaIcon name="home" size={26} color="white" />,
    },
  },
  ships: {
    screen: Ships,
    navigationOptions: {
      tabBarIcon: () => <MatIcon name="ship-wheel" size={26} color="white" />,
    },
  },
  codewords: {
    screen: Codewords,
    navigationOptions: {
      tabBarIcon: () => <MatIcon name="playlist-check" size={26} color="white" />,
    },
  },
  tickboxes: {
    screen: Tickboxes,
    navigationOptions: {
      tabBarIcon: () => <MatIcon name="check-all" size={26} color="white" />,
    },
  },
  settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: () => <MatIcon name="settings" size={26} color="white" />,
    },
  },
}, {
  tabBarPosition: 'bottom',
  lazyLoad: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    upperCaseLabel: false,
    iconStyle: {
      width: 30,
      height: 30,
    },
  }
});

export default Navigation;
