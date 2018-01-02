import React, {
  Component
} from 'react';

import {
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

import sharedStyles from '../shared/styles';
import {
  CODEWORDS
} from './reducer';


class Codewords extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'NOT A CODEWORD',
    };
  }

  getMatchingWords() {
    return CODEWORDS.filter(w => (
      this.state.searchTerm &&
      w.toLowerCase().startsWith(this.state.searchTerm)
    )).map(w => (
      <Text key={w}>
        {w}
      </Text>
    ));
  }

  render() {
    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Codewords
        </Text>

        <TextInput
          placeholder="Search..."
          selectionColor="aquamarine"
          onChangeText={text => this.setState({ searchTerm: text.toLowerCase() })}
        />

        <ScrollView>
          {this.getMatchingWords()}
        </ScrollView>

      </View>
    );
  }
}

export default Codewords;
