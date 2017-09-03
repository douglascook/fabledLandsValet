import React, { Component } from 'react';
import {
  View,
  Picker,
  Button,
  StyleSheet,
} from 'react-native';

const Item = Picker.Item;


export default class StatPicker extends Component {
  constructor() {
    super();
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return { skill: 'none', change: 0 };
  }

  onSubmit() {
    this.props.onSubmit(this.state.skill, this.state.change);
  }

  render() {
    return (
      <View style={styles.container}>
        <ItemPicker
          selected={this.state.skill}
          updateSelected={value => this.setState({ ...this.state, skill: value })}
          items={buildSkills()}
        />
        <ItemPicker
          selected={this.state.change}
          updateSelected={value => this.setState({ ...this.state, change: value})}
          items={buildRange()}
        />
        <View style={{ flex: 0.2 }}>
          <Button title="0" onPress={() => this.onSubmit()} />
        </View>
      </View>
    );
  }
}

function buildSkills() {
  const skills = ['None', 'Charisma', 'Combat', 'Defence', 'Magic', 'Sanctity',
                  'Scouting', 'Thievery'];
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
