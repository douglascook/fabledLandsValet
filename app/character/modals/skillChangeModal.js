import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Modal,
} from 'react-native';

import Changer from './skillChanger';

import sharedStyles from '../../shared/styles';


const SkillChangeModal = ({ skill, updateValue, ...modalProps }) => (
  <Modal {...modalProps}>
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


export default SkillChangeModal;
