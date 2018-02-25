import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Picker,
  Modal,
} from 'react-native';

import sharedStyles from '../shared/styles';

const Item = Picker.Item;


const GodSelectModal = ({ visible, onRequestClose, selected, updateSelected }) => (
  <Modal
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <View style={sharedStyles.fullSizeCentred}>
      <Text style={sharedStyles.modalHeaderText}>
        God
      </Text>

      <Picker
        style={{ width: 200, paddingTop: 10 }}
        selectedValue={selected}
        onValueChange={value => updateSelected(value)}
      >
        {buildGodItems()}
      </Picker>
    </View>
  </Modal>
);

GodSelectModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  updateSelected: PropTypes.func.isRequired,
};

function buildGodItems() {
  const gods = ['None', 'Alvir and Valmir', 'Amanushi', 'Elnir', 'Juntoku',
    'Lacuna', 'Maka', 'Molhern', 'Nagil', 'Nai', 'Nisoderu', 'Sig', 'Tambu', 
    'The Three Fortunes', 'Tyrnai',
  ];
  return gods.map(g => <Item label={g} value={g} key={g} />);
}

export default GodSelectModal;
