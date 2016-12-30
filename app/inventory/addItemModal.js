import React, { Component } from 'react';
import {
  View,
  Modal,
  Picker,
  Button,
  StyleSheet,
} from 'react-native';

import InsertRow from '../shared/insertRow';
import SingleItemRow from '../shared/singleItemRow';
import { formatEffects } from './inventory';

const Item = Picker.Item;


export default class AddItemModal extends Component {
  constructor() {
    super();
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {
      itemName: undefined,
      itemEffects: [],
      nameVisible: true,
      submitVisible: false,
      pickerVisible: false,
    };
  }

  buildItem() {
    const newItem = { name: this.state.itemName };
    if (this.state.itemEffects.length > 0) {
      newItem.effects = this.state.itemEffects;
    }
    return newItem;
  }

  submitName(event) {
    const newState = {
      ...this.state,
      itemName: event.nativeEvent.text,
      submitVisible: true,
      pickerVisible: true,
      nameVisible: false,
    };
    this.setState(newState);
  }

  submitStat(name, value) {
    const newState = { ...this.state };
    newState.itemEffects.push({ skill: name, modification: value });
    this.setState(newState);
  }

  submitAndClear() {
    this.props.addToInventory(this.buildItem());
    this.setState(this.getDefaultState());
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        onRequestClose={this.props.closeModal}
      >
        <View style={styles.addItemModal}>
          <SingleItemRow
            name={this.state.itemName}
            value={formatEffects(this.state.itemEffects)}
          />
          { this.state.nameVisible ?
            <InsertRow onSubmit={e => this.submitName(e)} /> : null }
          { this.state.pickerVisible ?
            <StatPicker onSubmit={(n, v) => this.submitStat(n, v)} /> : null }
          { this.state.submitVisible ?
            <SubmitButton onPress={() => this.submitAndClear()} /> : null }
        </View>
      </Modal>
    );
  }
}

class StatPicker extends Component {
  constructor() {
    super();
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return { skill: 'none', change: 0 };
  }

  onSubmit() {
    this.props.onSubmit(this.state.skill, this.state.change);
  }

  render() {
    return (
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
        <Button title="Go" onPress={() => this.onSubmit()} />
      </View>
    );
  }
}

const SubmitButton = ({ onPress }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    <Button
      title="Add it!"
      onPress={onPress}
    />
  </View>
);

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
