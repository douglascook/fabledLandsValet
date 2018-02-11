import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';


const ItemPicker = ({ selected, updateSelected, items }) => (
  <Picker
    style={{ flex: 1 }}
    selectedValue={selected}
    onValueChange={value => updateSelected(value)}
  >
    {items}
  </Picker>
);

ItemPicker.propTypes = {
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  updateSelected: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemPicker;
