import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from '../styles';
import { SingleItemRow } from './generic';

export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { name: 'Wooden sword', effect: 'Combat + 1' },
      ],
    };
  }

  // TODO add propTypes validation to remove warning about navigate
  render() {
    const inventory = this.state.items.map((item, i) => (
      <SingleItemRow name={item.name} value={item.effect} key={i} />
    ));
    return (
      <View style={styles.container}>
        <View stlye={styles.headerRow}>
          <Text style={styles.headerText}>
            Inventory
          </Text>
        </View>
        {inventory}
        <View style={styles.navRow}>
          <Text onPress={() => this.props.navigate('pop')}>
            Go to character
          </Text>
        </View>
      </View>
    );
  }
}
