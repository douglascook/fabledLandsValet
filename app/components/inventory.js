import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import {
  SingleItemRow,
  NavRow,
} from './generic';
import styles from '../styles';


class Inventory extends Component {
  render() {
    const inventory = this.props.inventory.map((item, i) => (
      <SingleItemRow name={item.name} value={item.effect} key={i} />
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Inventory
        </Text>
        {inventory}
        <NavRow onPress={() => this.props.navigate('pop')}
                text="Go to character"/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { inventory: state.inventory };
};

const InventoryScreen = connect(
  mapStateToProps,
)(Inventory);

export default InventoryScreen;
