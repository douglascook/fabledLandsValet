import React, { Component } from 'react';
import {
  Text,
  Modal,
  Picker,
  Button,
} from 'react-native';

import { InsertRow } from './generic';

const Item = Picker.Item;


export default class AddItemModal extends Component {
  constructor() {
    super();
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return { skill: 'none', change: 0 };
  }

  submitAndClear() {
    this.props.addToInventory(this.state);
    this.setState(this.getDefaultState());
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        onRequestClose={this.props.closeModal}
      >
        <Text>Add an item</Text>
        <InsertRow
          insertItem={e => this.setState({ ...this.state, name: e.nativeEvent.text })}
        />
        <ItemPicker
          selected={this.state.skill}
          updateSelected={value => this.setState({ ...this.state, skill: value })}
          items={buildSkills()}
        />
        <ItemPicker
          selected={this.state.change}
          updateSelected={value => this.setState({ ...this.state, change: value})}
          items={buildRange()}
        />
        <Button
          title="Add it!"
          onPress={() => this.submitAndClear()}
        />
      </Modal>
    );
  }
}

function buildSkills() {
  const skills = ['None', 'Charisma', 'Combat', 'Magic', 'Sanctity',
                  'Scouting', 'Thievery'];
  return skills.map((s, i) => (
    <Item label={s} value={s.toLowerCase()} key={i} />
  ));
}

function buildRange() {
  let items = [];
  for (let i = -10; i < 11; i++) {
    items.push(<Item label={i.toString()} value={i} key={i} />);
  }
  return items;
}

const ItemPicker = ({ selected, updateSelected, items }) => (
  <Picker
    selectedValue={selected}
    onValueChange={value => updateSelected(value)}
  >
    {items}
  </Picker>
);
