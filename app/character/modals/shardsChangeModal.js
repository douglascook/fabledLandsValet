import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../../shared/styles';
import { ShardsChangeRow } from '../../shared/components';


const ShardsChangeModal = ({
  visible, amount, updateAmount, onRequestClose
}) => (
  <Modal
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <View style={sharedStyles.fullSizeCentred}>
      <Text style={sharedStyles.modalHeaderText}>
        Shards
      </Text>

      <Text style={styles.currentAmount}>
        {`Current: ${amount}`}
      </Text>

      <ShardsChangeRow
        updateAmount={updateAmount}
        leftButtonIcon="minus"
        rightButtonIcon="plus"
      />

    </View>
  </Modal>
);

ShardsChangeModal.propTypes = {
  amount: PropTypes.number.isRequired,
  updateAmount: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  currentAmount: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ShardsChangeModal;
