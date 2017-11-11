import React from 'react';
import {
  View,
  Picker,
  Button,
  StyleSheet,
} from 'react-native';
import { addSignPrefix } from '../shared/helpers';
import { stats } from '../character/reducer';

const Item = Picker.Item;


export const SkillPicker = ({ selectedSkill, selectedValue, updateSelected, onSubmit}) => (
  <View style={styles.container}>
    <ItemPicker
      selected={selectedSkill}
      updateSelected={value => updateSelected({selectedSkill: value})}
      items={buildSkills()}
    />
    <ItemPicker
      selected={selectedValue}
      updateSelected={value => updateSelected({selectedValue: value})}
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

const ItemPicker = ({ selected, updateSelected, items }) => (
  <Picker
    style={{ flex: 1 }}
    selectedValue={selected}
    onValueChange={value => updateSelected(value)}
  >
    {items}
  </Picker>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
