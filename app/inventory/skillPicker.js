import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Picker,
  Button,
  StyleSheet,
} from 'react-native';

import { addSignPrefix } from '../shared/helpers';
import ItemPicker from '../shared/components/itemPicker';

const Item = Picker.Item;


const SkillPicker = ({ selectedSkill, selectedValue, updateSelected, onSubmit }) => (
  <View style={styles.container}>
    <ItemPicker
      selected={selectedSkill}
      updateSelected={value => updateSelected({ selectedSkill: value })}
      items={buildSkills()}
    />
    <ItemPicker
      selected={selectedValue}
      updateSelected={value => updateSelected({ selectedValue: value })}
      items={buildRange()}
    />
    <View style={{ flex: 0.2 }}>
      <Button title="0" onPress={onSubmit} />
    </View>
  </View>
);

function buildSkills() {
  const skills = [SELECT_SKILL, 'charisma', 'combat', 'defence', 'magic',
                  'sanctity', 'scouting', 'thievery'];
  // TODO convert label to title case, no js built in?
  return skills.map(s => (
    <Item label={s} value={s} key={s} />
  ));
}

export const SELECT_SKILL = 'select skill';

function buildRange() {
  const items = [];
  for (let i = 10; i > -11; i--) {
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
