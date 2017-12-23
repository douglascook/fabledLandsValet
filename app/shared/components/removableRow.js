import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../styles';


const RemovableRow = ({ name, value, onRemove }) => (
  <View style={sharedStyles.containerRow}>

    <View style={styles.remRowItem}>
      <Text style={sharedStyles.text}>
        {name}
      </Text>
    </View>

    <View style={styles.remRowItem}>
      <Text style={sharedStyles.text}>
        {value}
      </Text>
    </View>

    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={onRemove}
    >
      <Text style={styles.buttonText}>
        x
      </Text>
    </TouchableOpacity>

  </View>
);

RemovableRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onRemove: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  remRowItem: {
    flex: 5,
    marginRight: 5,
  },
  button: {
    width: 25,
    backgroundColor: 'firebrick',
    marginLeft: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default RemovableRow;
