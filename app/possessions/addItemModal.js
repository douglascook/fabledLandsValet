import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';

import {
  SingleItemRow,
  SubmitButtonRow,
} from '../shared/components';

import {
  formatEffects
} from '../shared/helpers';

import SkillPicker, {
  SELECT_SKILL,
} from './skillPicker';


export default class AddItemModal extends Component {

  constructor() {
    super();
    this.state = getDefaultState();
  }

  onClose() {
    this.setState(getDefaultState());
    this.props.closeModal();
  }

  submitName(event) {
    this.setState({
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
      this.setState({
        ...rest,
        selectedSkill: SELECT_SKILL,
        selectedValue: 0,
        itemEffects: [...itemEffects, { skill: selectedSkill, value: selectedValue }],
      });
    }
  }

  addItem() {
    this.props.addItem(this.buildItem());
    this.setState(getDefaultState());
  }

  buildItem() {
    const newItem = {
      name: this.state.itemName,
      // add unique key here, may have multiples of the same item
      key: `${this.state.itemName}-${Date.now()}`,
    };
    if (this.state.itemEffects.length > 0) {
      newItem.effects = this.state.itemEffects;
    }
    return newItem;
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
            <TextInput
              placeholder="Item Name"
              selectionColor="aquamarine"
              onSubmitEditing={e => this.submitName(e)}
              autoCapitalize="sentences"
            />
          }
          { this.state.pickerVisible &&
            <SkillPicker
              selectedSkill={this.state.selectedSkill}
              selectedValue={this.state.selectedValue}
              updateSelected={e => this.setState(e)}
              onSubmit={() => this.submitSkill()}
            />
          }
          { this.state.submitVisible &&
            <SubmitButtonRow
              title="Add it!"
              onPress={() => this.addItem()}
            />
          }
        </View>
      </Modal>
    );
  }
}

AddItemModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};


const getDefaultState = () => ({
  itemName: ' ',
  itemEffects: [],
  selectedSkill: SELECT_SKILL,
  selectedValue: 0,
  nameVisible: true,
  submitVisible: false,
  pickerVisible: false,
});

const styles = StyleSheet.create({
  addItemModal: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
