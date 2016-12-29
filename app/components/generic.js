import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Button,
} from 'react-native';

import styles from '../styles';


export const SingleItemRow = ({ name, value }) => (
  <View style={styles.containerRow}>
    <View style={styles.rowName}>
      <Text style={styles.textTitle}>
        {name}
      </Text>
    </View>
    <View style={styles.rowValue}>
      <Text style={styles.text}>
        {value}
      </Text>
    </View>
  </View>
);

export const RemovableRow = ({ name, value, onRemove }) => (
  <View style={styles.containerRow}>
    <View style={styles.remRowItem}>
      <Text style={styles.text}>
        {name}
      </Text>
    </View>
    <View style={styles.remRowItem}>
      <Text style={styles.text}>
        {value}
      </Text>
    </View>
    <View style={styles.remRowButton}>
      <Button
        onPress={onRemove}
        title="x"
        color="firebrick"
      />
    </View>
  </View>
);

export const NavRow = ({ text, onPress }) => (
  <View style={styles.navRow}>
    <TouchableHighlight
      onPress={onPress}
      underlayColor="steelblue"
    >
      <Text style={styles.navText}>
        {text}
      </Text>
    </TouchableHighlight>
  </View>
);

export class InsertRow extends Component {
  constructor(props) {
    super(props);
    this.state = { text: null };
  }

  submitAndClear(e) {
    this.props.insertItem(e);
    //this.setState({ text: null });
  }

  render() {
    return (
      <TextInput
        placeholder="Add something here"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        onSubmitEditing={e => this.submitAndClear(e)}
      />
    );
  }
}
