import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';


const NavRow = ({ text, onPress }) => (
  <TouchableHighlight
    style={styles.navRow}
    onPress={onPress}
    underlayColor="steelblue"
  >
    <Text style={styles.navText}>
      {text}
    </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  navRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 5
  },
  navText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default NavRow;
