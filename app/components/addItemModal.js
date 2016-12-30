import React, { Component } from 'react';
import {
  View,
  Modal,
  Picker,
  Button,
  StyleSheet,
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

  buildItem() {
    const newItem = { name: this.state.name };
    if (this.state.skill !== 'none') {
      newItem.effects = [
        { skill: this.state.skill, modification: this.state.change },
      ];
    }
    return newItem;
  }

  submitAndClear() {
    this.props.addToInventory(this.buildItem());
    // TODO need to clear insert row state too
    this.setState(this.getDefaultState());
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        onRequestClose={this.props.closeModal}
      >
        <View style={styles.addItemModal}>
          <InsertRow
            insertItem={e => this.setState({ ...this.state, name: e.nativeEvent.text })}
          />
          <View style={{ flexDirection: 'row' }}>
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
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              title="Add it!"
              onPress={() => this.submitAndClear()}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

function buildSkills() {
  const skills = ['None', 'Charisma', 'Combat', 'Magic', 'Sanctity',
                  'Scouting', 'Thievery'];
  return skills.map((s, i) => (
    <Item label={s} value={s} key={i} />
  ));
}

function buildRange() {
  const items = [];
  for (let i = -10; i < 11; i++) {
    items.push(<Item label={i.toString()} value={i} key={i} />);
  }
  return items;
}

const ItemPicker = ({ selected, updateSelected, items }) => (
  <Picker
    style={{ flex: 1 }}
    selectedValue={selected}
    onValueChange={value => updateSelected(value)}
  >
    {items}
  </Picker>
);

const styles = StyleSheet.create({
  addItemModal: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
