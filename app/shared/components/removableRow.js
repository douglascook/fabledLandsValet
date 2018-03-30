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
      style={[sharedStyles.removeButton, styles.button]}
      activeOpacity={0.6}
      onPress={onRemove}
    >
      <Text style={sharedStyles.buttonText}>
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
    flex: 1,
    marginRight: 5,
    backgroundColor: 'whitesmoke'
  },
  button: {
    marginLeft: 1,
  }
});

export default RemovableRow;
