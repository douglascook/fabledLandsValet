import React, { Component } from 'react';
import {
  View,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';

import InsertRow from '../shared/insertRow';
import SingleItemRow from '../shared/singleItemRow';
import { formatEffects } from './inventory';
import StatPicker from './statPicker';


export default class AddItemModal extends Component {
  constructor() {
    super();
    this.state = getDefaultState();
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
    newState.itemEffects.push({ skill: name, value: value });
    this.setState(newState);
  }

  submitAndClear() {
    this.props.addToInventory(this.buildItem());
    this.setState(getDefaultState());
  }

  buildItem() {
    const newItem = { name: this.state.itemName };
    if (this.state.itemEffects.length > 0) {
      newItem.effects = this.state.itemEffects;
    }
    return newItem;
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

const getDefaultState = () => (
  {
    itemName: ' ',
    itemEffects: [],
    nameVisible: true,
    submitVisible: false,
    pickerVisible: false,
  }
);

const SubmitButton = ({ onPress }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    <Button
      title="Add it!"
      onPress={onPress}
    />
  </View>
);

const styles = StyleSheet.create({
  addItemModal: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
