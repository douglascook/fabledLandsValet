import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../shared/styles';


const SkillChangeModal = ({ skill, updateValue, ...modalProps }) => (
  <Modal {...modalProps} >
    <View style={sharedStyles.fullSizeCentred}>

      <Text style={sharedStyles.modalHeaderText}>
        {skill ? skill.displayName : ''}
      </Text>

      <Changer
        value={skill ? skill.value : 0}
        increment={() => updateValue(Math.min(skill.value + 1, 12))}
        decrement={() => updateValue(Math.max(skill.value - 1, 1))}
      />

    </View>
  </Modal>
);

SkillChangeModal.propTypes = {
  // TODO update to allow null and to be required, no simple way?
  skill: PropTypes.object,
  updateValue: PropTypes.func.isRequired,
};


export const StaminaChangeModal = ({ stamina, updateCurrent, updateMax, ...modalProps }) => (
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

export default SkillChangeModal;
