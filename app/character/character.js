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
      skillToChange: undefined,
      skillValue: undefined,
    };
  }

  onCloseSkillModal() {
    this.setState({
      skillToChange: undefined,
      skillValue: undefined,
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

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}> Character </Text>

        {this.renderRows(nameProfession)}
        {this.renderRows(stats)}
        {this.renderRows(otherStats)}

        <SkillChangeModal
          visible={typeof this.state.skillToChange !== 'undefined'}
          skillName={this.state.skillToChange}
          skillValue={this.state.skillValue}
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
