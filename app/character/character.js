import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import SkillChangeModal from './skillChangeModal';
import SingleItemRow from '../shared/components/singleItemRow';
import styles from '../shared/styles';
import { addSignPrefix } from '../shared/helpers';
import { updateSkillValue } from '../actions';


export const stats = ['rank', 'defence', 'stamina', 'charisma', 'combat',
  'magic', 'sanctity', 'scouting', 'thievery'];

const nameProfession = ['name', 'profession'];

const otherStats = ['money', 'god', 'titles', 'blessings', 'resurrection'];


class Character extends Component {

  constructor() {
    super();
    this.state = getDefaultState();
  }

  onPress(attributeKey, attribute) {
    this.setState({
      skillModalVisible: true,
      skillToChange: attributeKey,
      skillName: attribute.attribute,
      skillValue: attribute.value,
    });
  }

  onSubmitSkillChange(newSkillValue) {
    this.props.updateSkillValue(this.state.skillToChange, newSkillValue);
    this.onCloseSkillModal();
  }

  onCloseSkillModal() {
    this.setState(getDefaultState());
  }

  getDisplayValue(attr) {
    if (!attr.modifier) {
      return attr.value;
    }
    return `${attr.value + attr.modifier} (${addSignPrefix(attr.modifier)})`;
  }

  renderRows(keys) {
    return keys.map(key => {
      const attribute = this.props.character[key];
      return (
        <SingleItemRow
          name={attribute.attribute}
          value={this.getDisplayValue(attribute)}
          key={key}
        />
      );
    });
  }

  renderSkillRows() {
    return stats.map(key => {
      const attribute = this.props.character[key];
      return (
        <SingleItemRow
          name={attribute.attribute}
          value={this.getDisplayValue(attribute)}
          onButtonPress={() => this.onPress(key, attribute)}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}> Character </Text>

        {this.renderRows(nameProfession)}
        {this.renderSkillRows()}
        {this.renderRows(otherStats)}

        <SkillChangeModal
          visible={this.state.skillModalVisible}
          skillName={this.state.skillName}
          skillValue={this.state.skillValue}
          onDone={newValue => this.onSubmitSkillChange(newValue)}
          onRequestClose={() => this.onCloseSkillModal()}
        />

      </View>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
  updateSkillValue: PropTypes.func.isRequired,
};


const getDefaultState = () => ({
  skillModalVisible: false,
  skillToChange: null,
  skillName: null,
  skillValue: null,
});


const mapStateToProps = state => ({
  character: state.character
});

const mapDispatchToProps = dispatch => ({
  updateSkillValue: (name, value) => dispatch(updateSkillValue(name, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Character);
