import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import SingleItemRow from '../shared/components/singleItemRow';
import styles from '../shared/styles';
import { addSignPrefix } from '../shared/helpers';


const nameProfession = ['name', 'profession'];

export const stats = ['rank', 'defence', 'stamina', 'charisma', 'combat',
  'magic', 'sanctity', 'scouting', 'thievery'];

const otherStats = ['money', 'god', 'titles', 'blessings', 'resurrection'];


class Character extends Component {

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
