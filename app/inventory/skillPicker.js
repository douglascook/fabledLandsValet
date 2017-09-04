import React, { Component } from 'react';
import {
  View,
  Picker,
  Button,
  StyleSheet,
} from 'react-native';

const Item = Picker.Item;


export default class SkillPicker extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ItemPicker
          selected={this.props.selectedSkill}
          updateSelected={value => this.props.updateSelected({selectedSkill: value})}
          items={buildSkills()}
        />
        <ItemPicker
          selected={this.props.selectedValue}
          updateSelected={value => this.props.updateSelected({selectedValue: value})}
          items={buildRange()}
        />
        <View style={{ flex: 0.2 }}>
          <Button title="0" onPress={() => this.props.onSubmit()} />
        </View>
      </View>
    );
  }
}

function buildSkills() {
  const skills = ['select skill', 'Charisma', 'Combat', 'Defence', 'Magic',
                  'Sanctity', 'Scouting', 'Thievery'];
  return skills.map((s, i) => (
    <Item label={s} value={s} key={i} />
  ));
}

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
