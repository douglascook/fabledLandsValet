import React from 'react';
import {
  View,
  Picker,
  Button,
  StyleSheet,
} from 'react-native';

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
      <Button title="0" onPress={() => onSubmit()} />
    </View>
  </View>
);

function buildSkills() {
  const skills = [SELECT_SKILL, 'Charisma', 'Combat', 'Defence', 'Magic',
                  'Sanctity', 'Scouting', 'Thievery'];
  return skills.map((s, i) => (
    <Item label={s} value={s} key={i} />
  ));
}

export const SELECT_SKILL = 'select skill';

function buildRange() {
  const items = [];
  for (let i = -10; i < 11; i++) {
    items.push(<Item label={i.toString()} value={i} key={i} />);
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
