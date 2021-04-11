import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../../shared/styles';
import { CommunityIconButton } from '../../shared/components';


const Changer = ({ value, increment, decrement }) => (
  <View style={styles.changer}>
    <CommunityIconButton
      iconName="minus"
      buttonColour="dodgerblue"
      onPress={decrement}
    />

    <Text style={[sharedStyles.modalHeaderText, styles.value]}>
      {value}
    </Text>

    <CommunityIconButton
      iconName="plus"
      buttonColour="dodgerblue"
      onPress={increment}
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
