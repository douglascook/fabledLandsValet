import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Picker,
  Modal,
  StyleSheet,
} from 'react-native';

const Item = Picker.Item;


const GodSelectModal = ({ visible, onRequestClose, selected, updateSelected }) => (
  <Modal
    visible={visible}
    onRequestClose={onRequestClose}
    style={styles.container}
  >
    <View style={styles.content}>

      <Text style={styles.skillName}>
        God
      </Text>

      <Picker
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
  const GODS = ['None', 'Alvir and Valmir', 'Elnir', 'Lacuna', 'Maka',
    'Molhern', 'Nagil', 'Sig', 'The Three Fortunes', 'Tyrnai',
  ];
  return GODS.map(g => <Item label={g} value={g} key={g} />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 110,
  },
  skillName: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default GodSelectModal;
