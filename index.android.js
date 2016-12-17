import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Character from './app/components/character';
import Inventory from './app/components/inventory.js';

export default class FabledLandsValet extends Component {
  render() {
    return <Inventory />;
  }
}
AppRegistry.registerComponent('fabledLandsValet', () => FabledLandsValet);
