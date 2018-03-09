import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import sharedStyles from '../styles';


const AddRemoveItem = ({ text, isActive, onAdd, onRemove }) => (
  <View style={{ flexDirection: 'row', marginVertical: 1 }}>

    <Text style={[sharedStyles.text, { flex: 1 }]}>
      {text}
    </Text>

    <TouchableOpacity
      style={[
        isActive ? sharedStyles.removeButton : sharedStyles.addButton,
        { marginLeft: 2 }
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

export default AddRemoveItem;
