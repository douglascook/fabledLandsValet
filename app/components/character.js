import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import InventoryScreen from './inventory';
import {
  SingleItemRow,
  NavRow,
} from './generic';
import styles from '../styles';


class Character extends Component {
  render() {
    const characterStats = this.props.stats.map((stat, i) => (
      <SingleItemRow name={stat.name} value={stat.value} key={i} />
    ));
    const nextRoute = {
      key: 'inventory',
      component: InventoryScreen,
    };
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Character
        </Text>
        {characterStats}
        <NavRow onPress={() => this.props.navigate('push', nextRoute)}
                text="Go to inventory"/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { stats: state.stats };
};

const CharacterScreen = connect(
  mapStateToProps,
)(Character);

export default CharacterScreen;
