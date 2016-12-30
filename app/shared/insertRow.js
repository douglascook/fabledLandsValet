import React, { Component } from 'react';
import {
  TextInput,
} from 'react-native';


export default class InsertRow extends Component {
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
