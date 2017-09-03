import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import SingleItemRow from '../shared/singleItemRow';
import styles from '../shared/styles';
import { push } from '../actions';


class Character extends Component {
  buildItemRow(stat, i) {
    const modifier = stat.modifier || 0;
    const displayValue = (stat.modifier)
      ? `${stat.value + stat.modifier} (${stat.modifier})`
      : stat.value;
    return (
      <SingleItemRow name={stat.name} value={displayValue} key={i} />
    );
  }

  render() {
    const characterStats = this.props.stats.map((stat, i) => (
      this.buildItemRow(stat, i)
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Character
        </Text>
        {characterStats}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats,
});

export default connect(
  mapStateToProps,
)(Character);
