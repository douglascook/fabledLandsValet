import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import {
  RemovableRow,
  NavRow,
} from './generic';
import AddItemModal from './addItemModal';
import styles from '../styles';
import {
  pop,
  addItem,
  removeItem,
} from '../actions';


class Inventory extends Component {
  constructor() {
    super();
    this.state = { modalVisible: false };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  addItemToStore(item) {
    this.props.addItem(item);
    this.setModalVisible(false);
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
    return this.props.inventory.map((item, i) => (
      <RemovableRow
        name={item.name}
        value={this.formatEffects(item.effects)}
        onRemove={() => this.props.removeItem(i)}
        key={i}
      />
    ));
  }

  render() {
    const inventory = this.generateInventory();
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Inventory
        </Text>
        {inventory}
        <Button
          onPress={() => this.setModalVisible(true)}
          title="Add item"
        />
        <AddItemModal
          visible={this.state.modalVisible}
          closeModal={() => this.setModalVisible(false)}
          addToInventory={state => this.addItemToStore(state)}
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
