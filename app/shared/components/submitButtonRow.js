import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
} from 'react-native';


const SubmitButtonRow = ({ title, onPress, disabled = false }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    <Button
      title={title}
      onPress={onPress}
      disabled={disabled}
    />
  </View>
);

SubmitButtonRow.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default SubmitButtonRow;
