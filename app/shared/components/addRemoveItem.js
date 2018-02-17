import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

import sharedStyles from '../styles';


const AddRemoveItem = ({ text, isActive, onAdd, onRemove }) => (
  <View style={styles.itemRow}>

    <Text style={[sharedStyles.text, styles.text]}>
      {text}
    </Text>

    <TouchableOpacity
      style={[
        isActive ? sharedStyles.removeButton : sharedStyles.addButton,
        styles.button
      ]}
      activeOpacity={0.6}
      onPress={isActive ? onRemove : onAdd}
    >
      <Text style={sharedStyles.buttonText}>
        {isActive ? 'x' : 'o'}
      </Text>
    </TouchableOpacity>

  </View>
);

AddRemoveItem.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  isActive: PropTypes.bool.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
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

export default AddRemoveItem;
