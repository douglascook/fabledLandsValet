import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../shared/styles';
import { ShardsChangeRow } from '../shared/components';


const ShardsChangeModal = ({
  visible, onRequestClose, stashName, personalShards, stashShards
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
        {`Holding: ${personalShards}`}
      </Text>

      <ShardsChangeRow
        updateAmount={() => null}
        leftButtonIcon="arrow-up-bold"
        rightButtonIcon="arrow-down-bold"
      />

      <Text style={styles.currentAmount}>
        {`${stashName}: ${stashShards}`}
      </Text>

    </View>
  </Modal>
);

ShardsChangeModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  stashName: PropTypes.string.isRequired,
  personalShards: PropTypes.number.isRequired,
  stashShards: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  currentAmount: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ShardsChangeModal;
