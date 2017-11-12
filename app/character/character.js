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


export const stats = ['rank', 'defence', 'stamina', 'charisma', 'combat',
  'magic', 'sanctity', 'scouting', 'thievery'];

const nameProfession = ['name', 'profession'];

const otherStats = ['money', 'god', 'titles', 'blessings', 'resurrection'];


class Character extends Component {

  constructor() {
    super();
    this.state = {
      skillModalVisible: false,
      skillToChange: null,
      skillValue: null,
    };
  }

  onPress(attribute) {
    this.setState({
      skillModalVisible: true,
      skillToChange: attribute.attribute,
      skillValue: attribute.value,
    });
  }

  onSubmitSkillChange() {
    this.onCloseSkillModal();
  }

  onCloseSkillModal() {
    this.setState({
      skillModalVisible: false,
      skillToChange: null,
      skillValue: null,
    });
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
          onButtonPress={() => this.onPress(attribute)}
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
          skillName={this.state.skillToChange}
          skillValue={this.state.skillValue}
          onDone={() => this.onSubmitSkillChange()}
          onRequestClose={() => this.onCloseSkillModal()}
        />

      </View>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  character: state.character
});

export default connect(
  mapStateToProps
)(Character);
