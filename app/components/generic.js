import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles';


export const SingleItemRow = props => (
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


export const NavRow = props => (
  <View style={styles.navRow}>
    <TouchableHighlight onPress={props.onPress} underlayColor="steelblue">
      <Text style={styles.navText}>
        {props.text}
      </Text>
    </TouchableHighlight>
  </View>
);
