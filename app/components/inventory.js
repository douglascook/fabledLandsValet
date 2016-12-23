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
import { pop } from '../actions';


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
        <NavRow onPress={() => this.props.pop()}
                text="Go to character"/>
      </View>
    );
  }
}

const mapStateToProps = state => (
  { inventory: state.inventory }
);

const mapDispatchToProps = dispatch => (
  { pop: () => dispatch(pop()) }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inventory);
