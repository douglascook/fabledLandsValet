import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../../shared/styles';


const Changer = ({ value, increment, decrement }) => (
  <View style={styles.changer}>
    <Button
      title="-"
      onPress={() => decrement()}
    />

    <Text style={[sharedStyles.modalHeaderText, styles.value]}>
      {value}
    </Text>

    <Button
      title="+"
      onPress={() => increment()}
    />
  </View>
);

Changer.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  changer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
  },
  value: {
    paddingHorizontal: 25,
  },
  staminaType: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Changer;
