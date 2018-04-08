import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';

import Changer from './skillChanger';

import sharedStyles from '../../shared/styles';


const StaminaChangeModal = ({ stamina, updateCurrent, updateMax, ...modalProps }) => (
  <Modal {...modalProps} >
    <View style={sharedStyles.fullSizeCentred}>

      <Text style={sharedStyles.modalHeaderText}>
        {stamina ? stamina.displayName : ''}
      </Text>

      <Text style={styles.staminaType}>
        Max
      </Text>

      <Changer
        value={stamina.value}
        increment={() => updateMax(stamina.value + 1)}
        decrement={() => updateMax(Math.max(stamina.value - 1, 1))}
      />

      <Text style={styles.staminaType}>
        Current
      </Text>

      <Changer
        value={stamina.current}
        increment={() => updateCurrent(Math.min(stamina.current + 1, stamina.value))}
        decrement={() => updateCurrent(Math.max(stamina.value - 1, 1))}
      />

    </View>
  </Modal>
);

StaminaChangeModal.propTypes = {
  // TODO update to allow null and to be required, no simple way?
  stamina: PropTypes.object,
  updateCurrent: PropTypes.func.isRequired,
  updateMax: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  staminaType: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default StaminaChangeModal;
