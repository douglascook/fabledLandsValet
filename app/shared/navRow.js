import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';


const NavRow = ({ text, onPress }) => (
  <View style={styles.navRow}>
    <TouchableHighlight
      onPress={onPress}
      underlayColor="steelblue"
    >
      <Text style={styles.navText}>
        {text}
      </Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  navRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  navText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default NavRow;
