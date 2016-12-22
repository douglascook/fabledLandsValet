import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import Inventory from './inventory';
import {
  SingleItemRow,
  NavRow,
} from './generic';

import styles from '../styles';


export default class Character extends Component {
  constructor() {
    super();
    this.state = { stats: statFixture };
  }

  render() {
    const characterStats = this.state.stats.map((stat, i) => (
      <SingleItemRow name={stat.name} value={stat.value} key={i} />
    ));
    const nextRoute = {
      key: 'inventory',
      component: Inventory,
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


const statFixture = [
  { name: 'Name', value: 'Gerald Littlefoot' },
  { name: 'Profession', value: 'Wayfarer' },
  { name: 'Rank', value: 1 },
  { name: 'Defence', value: 5 },
  { name: 'Stamina', value: 12 },
  { name: 'Charisma', value: 5 },
  { name: 'Combat', value: 5 },
  { name: 'Magic', value: 5 },
  { name: 'Sanctity', value: 5 },
  { name: 'Scouting', value: 5 },
  { name: 'Thievery', value: 5 },
  { name: 'God', value: 'None' },
  { name: 'Money', value: '6 shards' },
  { name: 'Titles and Honours', value: 'None' },
  { name: 'Blessings', value: 'None' },
  { name: 'Resurrection Arrangements', value: 'None' },
];
