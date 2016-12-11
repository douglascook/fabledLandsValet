import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Character from './app/components/character';

export default class FabledLandsValet extends Component {
  render() {
    return <Character />;
  }
}
AppRegistry.registerComponent('fabledLandsValet', () => FabledLandsValet);
