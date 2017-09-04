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
import SkillPicker from './skillPicker';


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

  submitSkill() {
    const newState = { ...this.state,
      selectedSkill: 'select skill',
      selectedValue: 0,
      itemEffects: [...this.state.itemEffects,
        { skill: this.state.selectedSkill, value: this.state.selectedValue }],
    };
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
            <SkillPicker
              selectedSkill={this.state.selectedSkill}
              selectedValue={this.state.selectedValue}
              onSubmit={() => this.submitSkill()}
              updateSelected={(e) => this.setState(...this.state, e)}
            /> : null }
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
    // TODO replace magic string with constant somewhere
    selectedSkill: 'select skill',
    selectedValue: 0,
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
