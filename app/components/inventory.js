import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  Picker,
  Item,
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
  constructor() {
    super();
    this.state = { modalVisible: false };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

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
          title='Open da modal'
        />
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <Text>Add an item</Text>
          <InsertRow insertItem={e => this.addItemToStore(e.nativeEvent.text)} />
          <SkillPicker />
          <ValuePicker />
        </Modal>
        <NavRow
          onPress={() => this.props.pop()}
          text="Go to character"
        />
      </View>
    );
  }
}

class SkillPicker extends Component {
  constructor() {
    super();
    this.state = { selected: 'none' };
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.selected}
        onValueChange={value => this.setState({ selected: value })}
      >
        <Item label="None" value="none" />
        <Item label="Charisma" value="charisma" />
        <Item label="Combat" value="combat" />
        <Item label="Magic" value="magic" />
        <Item label="Sanctity" value="sanctity" />
        <Item label="Scouting" value="scouting" />
        <Item label="Thievery" value="thievery" />
      </Picker>
    );
  }
}

class ValuePicker extends Component {
  constructor() {
    super();
    this.state = { selected: 0 };
  }

  // TODO work out why this isn't working in render method
  buildRange() {
    let items = [];
    for (let i = -10; i < 11; i++) {
      items.push(<Item label={i.toString()} value={i} />);
    }
    return items;
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.selected}
        onValueChange={value => this.setState({ selected: value })}
      >
        <Item label="-10" value={-10} />
        <Item label="-9" value={-9} />
        <Item label="-8" value={-8} />
        <Item label="-7" value={-7} />
        <Item label="-6" value={-6} />
        <Item label="-5" value={-5} />
        <Item label="-4" value={-4} />
        <Item label="-3" value={-3} />
        <Item label="-2" value={-2} />
        <Item label="-1" value={-1} />
        <Item label="0" value={0} />
        <Item label="1" value={1} />
        <Item label="2" value={2} />
        <Item label="3" value={3} />
        <Item label="4" value={4} />
        <Item label="5" value={5} />
        <Item label="6" value={6} />
        <Item label="7" value={7} />
        <Item label="8" value={8} />
        <Item label="9" value={9} />
        <Item label="10" value={10} />
      </Picker>
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
