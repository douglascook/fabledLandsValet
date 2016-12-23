import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import {
  SingleItemRow,
  NavRow,
} from './generic';
import styles from '../styles';
import { push } from '../actions';


class Character extends Component {
  render() {
    const characterStats = this.props.stats.map((stat, i) => (
      <SingleItemRow name={stat.name} value={stat.value} key={i} />
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Character
        </Text>
        {characterStats}
        <NavRow onPress={() => this.props.push({ key: 'inventory' })}
                text="Go to inventory"/>
      </View>
    );
  }
}

const mapStateToProps = state => (
  { stats: state.stats }
);

const mapDispatchToProps = dispatch => (
  { push: route => dispatch(push(route)) }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Character);
