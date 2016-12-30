import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';


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

  render() {
    return (
      <TextInput
        placeholder="Item Name"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        onSubmitEditing={e => this.props.insertItem(e)}
        autoCapitalize="sentences"
      />
    );
  }
}

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 1,
    marginBottom: 1,
  },
  navRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  navText: {
    textAlign: 'center',
    fontSize: 16,
  },
  rowName: {
    flex: 1,
    marginRight: 5,
  },
  rowValue: {
    flex: 2,
  },
  remRowItem: {
    flex: 5,
    marginRight: 5,
  },
  remRowButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
    paddingLeft: 2,
    paddingRight: 2,
  },
  textTitle: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 1,
  },
});

