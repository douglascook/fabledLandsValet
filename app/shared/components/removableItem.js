import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

import sharedStyles from '../styles';


const RemovableItem = ({ text, onRemove }) => (
  <View style={styles.itemRow}>

    <Text style={[sharedStyles.text, styles.text]}>
      {text}
    </Text>

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

RemovableItem.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  text: {
    flex: 9,
  },
  button: {
    flex: 1,
    marginLeft: 1,
  }
});

export default RemovableItem;
