import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import SingleItemRow from '../shared/singleItemRow';
import styles from '../shared/styles';
import { addSignPrefix } from '../shared/helpers';


class Character extends Component {
  getDisplayValue(stat) {
    if (!stat.modifier) {
      return stat.value;
    }
    return `${stat.value + stat.modifier} (${addSignPrefix(stat.modifier)})`;
  }

  render() {
    const characterStats = this.props.stats.map((stat, i) => (
      <SingleItemRow name={stat.name} value={this.getDisplayValue(stat)}
        key={i} />
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}> Character </Text>
        {characterStats}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats,
});

export default connect(
  mapStateToProps
)(Character);
