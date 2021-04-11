import React from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
} from 'react-native';

import MatIcon from 'react-native-vector-icons/MaterialIcons';
import CommunityMatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import sharedStyles from '../styles';

// TODO should have single component handling all icon families

export const IconButton = ({ iconName, buttonColour, onPress, disabled = false }) => (
  <TouchableOpacity
    style={[sharedStyles.iconButton, { backgroundColor: disabled ? 'whitesmoke' : buttonColour }]}
    activeOpacity={0.6}
    onPress={onPress}
    disabled={disabled}
  >
    <MatIcon
      name={iconName}
      style={sharedStyles.iconButtonIcon}
    />
  </TouchableOpacity>
);

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  buttonColour: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};


export const CommunityIconButton = ({ iconName, buttonColour, onPress, disabled = false }) => (
  <TouchableOpacity
    style={[sharedStyles.iconButton, { backgroundColor: disabled ? 'whitesmoke' : buttonColour }]}
    activeOpacity={0.6}
    onPress={onPress}
    disabled={disabled}
  >
    <CommunityMatIcon
      name={iconName}
      style={sharedStyles.iconButtonIcon}
    />
  </TouchableOpacity>
);

CommunityIconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  buttonColour: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
