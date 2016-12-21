import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Inventory from './inventory';

export default class Character extends Component {
  constructor() {
    super();
    this.state = {stats: statFixture};
  }

  render() {
    let characterStats = this.state.stats.map((stat, i) => (
      <StatRow name={stat.name} value={stat.value} key={i} />
    ));
    return (
      <View style={styles.container}>
        <View stlye={styles.headerRow}>
          <Text style={styles.headerText}>
            Character
          </Text>
        </View>
        {characterStats}
        <Text onPress={() => this.props.navigate(
          'push', { key: 'about', component: Inventory })}
        >
          Go to inventory
        </Text>
      </View>
    );
  }
}

const StatRow = props => (
  <View style={styles.containerRow}>
    <View style={styles.rowName}>
      <Text style={styles.text}>
        {props.name}
      </Text>
    </View>
    <View style={styles.rowValue}>
      <Text style={styles.text}>
        {props.value}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    backgroundColor: 'steelblue',
    textAlign: 'center'
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowName: {
    flexDirection: 'row',
    flex: 1,
  },
  rowValue: {
    flexDirection: 'row',
    flex: 2
  }
  ,
  text: {
    backgroundColor: 'whitesmoke',
    fontSize: 18
  }
});

const statFixture = [
  {name: 'Name', value: 'Gerald Littlefoot'},
  {name: 'Profession', value: 'Wayfarer'},
  {name: 'Rank', value: 1},
  {name: 'Defence', value: 5},
  {name: 'Stamina', value: 12},
  {name: 'Charisma', value: 5},
  {name: 'Combat', value: 5},
  {name: 'Magic', value: 5},
  {name: 'Sanctity', value: 5},
  {name: 'Scouting', value: 5},
  {name: 'Thievery', value: 5},
  {name: 'God', value: 'None'},
  {name: 'Money', value: '6 shards'},
  {name: 'Titles and Honours', value: 'None'},
  {name: 'Blessings', value: 'None'},
  {name: 'Resurrection Arrangements', value: 'None'}
];
