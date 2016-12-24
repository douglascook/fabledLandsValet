import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import {
  RemovableRow,
  NavRow,
  InsertRow,
} from './generic';
import styles from '../styles';
import {
  pop,
  addItem,
  removeItem,
} from '../actions';


class Inventory extends Component {
  addItemToStore(text) {
    this.props.addItem({ name: text });
  }

  removeItem(key) {
    this.props.removeItem(key);
  }

  render() {
    const inventory = this.props.inventory.map((item, i) => (
      <RemovableRow
        name={item.name}
        value={item.effect}
        onRemove={() => this.props.removeItem(i)}
        key={i}
      />
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Inventory
        </Text>
        {inventory}
        <InsertRow
          insertItem={e => this.addItemToStore(e.nativeEvent.text)}
        />
        <NavRow
          onPress={() => this.props.pop()}
          text="Go to character"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  inventory: state.inventory,
});

const mapDispatchToProps = dispatch => ({
  pop: () => dispatch(pop()),
  addItem: item => dispatch(addItem(item)),
  removeItem: key => dispatch(removeItem(key)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inventory);
