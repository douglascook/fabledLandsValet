import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Picker,
  Button,
  StyleSheet,
} from 'react-native';

import {
  addSignPrefix
} from '../shared/helpers';

import {
  ITEM_SKILLS,
} from '../data';

const Item = Picker.Item;


const SkillPicker = ({ selectedSkill, selectedValue, updateSelected, onSubmit }) => (
  <View style={styles.container}>
    <Picker
      style={{ flex: 1 }}
      selectedValue={selectedSkill}
      onValueChange={value => updateSelected({ selectedSkill: value })}
    >
      {skillItems()}
    </Picker>

    <Picker
      style={{ flex: 1 }}
      selectedValue={selectedValue}
      onValueChange={value => updateSelected({ selectedValue: value })}
      items={buildRange()}
    >
      {buildRange()}
    </Picker>

    <View style={{ flex: 0.2 }}>
      <Button title="0" onPress={onSubmit} />
    </View>
  </View>
);

// TODO convert label to title case, no js built in?
const skillItems = () => [SELECT_SKILL, ...ITEM_SKILLS].map(s =>
  <Item label={s} value={s} key={s} />
);

export const SELECT_SKILL = 'select skill';

function buildRange() {
  const items = [];
  for (let i = 10; i >= -3; i--) {
    items.push(<Item label={addSignPrefix(i)} value={i} key={i} />);
  }
  return items;
}

SkillPicker.propTypes = {
  selectedSkill: PropTypes.oneOfType(
    [PropTypes.number, PropTypes.string]
  ).isRequired,
  selectedValue: PropTypes.number.isRequired,
  updateSelected: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SkillPicker;
