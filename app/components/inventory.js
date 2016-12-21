import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import Character from './character';

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
      <ItemRow name={item.name} value={item.effect} key={i} />
    ));
    return (
      <View style={styles.container}>
        <View stlye={styles.headerRow}>
          <Text style={styles.headerText}>
            Inventory
          </Text>
        </View>
        {inventory}
        <Text onPress={() => this.props.navigate('pop')}>
          Go to character
        </Text>
      </View>
    );
  }
}

const ItemRow = props => (
  <View style={styles.containerRow}>
    <View style={styles.rowName}>
      <Text style={styles.text}>
        {props.name}
      </Text>
    </View>
    <View style={styles.rowValue}>
      <Text style={styles.text}>
        {props.value}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    backgroundColor: 'steelblue',
    textAlign: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowName: {
    flexDirection: 'row',
  },
  rowValue: {
    flexDirection: 'row',
  },
  text: {
    backgroundColor: 'whitesmoke',
    fontSize: 20,
  },
});
