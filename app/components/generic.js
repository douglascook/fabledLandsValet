import React from 'react';
import {
  View,
  Text,
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
    <Text style={styles.navText} onPress={props.onPress}>
      {props.text}
    </Text>
  </View>
);
