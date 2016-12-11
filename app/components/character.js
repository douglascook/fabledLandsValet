import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Character extends Component {
  render() {
    let characterStats = statFixture.map((stat, i) => (
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
    fontSize: 20
  }
});

const statFixture = [
  {name: 'Name', value: 'Gerald Littlefoot'},
  {name: 'Profession', value: 'Wayfarer'},
  {name: 'Rank', value: 1},
  {name: 'Defence', value: 5},
  {name: 'Stamina', value: 12}
];
