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

  formatEffects(effects = []) {
    return (
      effects.map(e => `${e.skill} ${e.modification}`).join(', ')
    );
  }

  generateInventory() {
    let inventory = [];
    for (let i = 0; i < this.props.inventory.length; i++) {
      let item = this.props.inventory[i];
      inventory.push(
        <RemovableRow
          name={item.name}
          value={this.formatEffects(item.effects)}
          onRemove={() => this.props.removeItem(i)}
          key={i}
        />
      );
    }
    return inventory;
  }

  render() {
    const inventory = this.generateInventory();
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
