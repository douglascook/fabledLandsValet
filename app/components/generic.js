import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import styles from '../styles';


export const SingleItemRow = props => (
  <View style={styles.containerRow}>
    <View style={styles.rowName}>
      <Text style={styles.text}>
        {props.name}
      </Text>
    </View>
    <View style={styles.rowValue}>
      <Text style={styles.text}>
        {props.value}
      </Text>
    </View>
  </View>
);

export const NavRow = props => (
  <View style={styles.navRow}>
    <TouchableHighlight onPress={props.onPress} underlayColor="steelblue">
      <Text style={styles.navText}>
        {props.text}
      </Text>
    </TouchableHighlight>
  </View>
);

export class InsertRow extends Component {
  constructor(props) {
    super(props);
    this.state = { text: null };
  }

  render() {
    return (
      <TextInput
        defaultValue="Add something here"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        onSubmitEditing={this.props.insertItem}
      />
    );
  }
}
