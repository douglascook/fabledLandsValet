import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
} from 'react-native';


const SubmitButtonRow = ({ title, onPress }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    <Button
      title={title}
      onPress={onPress}
    />
  </View>
);

SubmitButtonRow.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SubmitButtonRow;
