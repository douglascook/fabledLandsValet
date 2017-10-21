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
import {
  SkillPicker,
  SELECT_SKILL,
} from './skillPicker';


export default class AddItemModal extends Component {
  constructor() {
    super();
    this.state = getDefaultState();
  }

  submitName(event) {
    this.setState({ ...this.state,
      itemName: event.nativeEvent.text,
      submitVisible: true,
      pickerVisible: true,
      nameVisible: false,
    });
  }

  submitSkill() {
    const { itemEffects, selectedSkill, selectedValue, ...rest } = this.state;
    // TODO highlight select skill if default is selected
    if (selectedSkill !== SELECT_SKILL) {
      this.setState({ ...rest,
        selectedSkill: SELECT_SKILL,
        selectedValue: 0,
        itemEffects: [...itemEffects, { skill: selectedSkill, value: selectedValue }],
      });
    }
  }

  addItem() {
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

  onClose() {
    this.setState(getDefaultState());
    this.props.closeModal();
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        onRequestClose={() => this.onClose()}
      >
        <View style={styles.addItemModal}>
          <SingleItemRow
            name={this.state.itemName}
            value={formatEffects(this.state.itemEffects)}
          />
          { this.state.nameVisible &&
            <InsertRow onSubmit={e => this.submitName(e)} />
          }
          { this.state.pickerVisible &&
            <SkillPicker
              selectedSkill={this.state.selectedSkill}
              selectedValue={this.state.selectedValue}
              updateSelected={e => this.setState(...this.state, e)}
              onSubmit={() => this.submitSkill()}
            />
          }
          { this.state.submitVisible &&
            <SubmitButton onPress={() => this.addItem()} />
          }
        </View>
      </Modal>
    );
  }
}

const getDefaultState = () => (
  {
    itemName: ' ',
    itemEffects: [],
    selectedSkill: SELECT_SKILL,
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
