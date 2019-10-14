import React, {
  Component
} from 'react';

import {
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

import {
  connect
} from 'react-redux';

import PropTypes from 'prop-types';

import {
  AddRemoveItem,
} from '../shared/components';

import sharedStyles from '../shared/styles';

import {
  addCodeword,
  removeCodeword,
} from '../actions';

import {
  CODEWORDS,
} from '../data';


class Codewords extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  get currentWords() {
    const { codewords, removeCodeword } = this.props;
    return codewords.sort().map(w => (
      <AddRemoveItem
        text={w}
        onRemove={() => removeCodeword(w)}
        isActive
        key={w}
      />
    ));
  }

  get matchingWords() {
    const { codewords, removeCodeword, addCodeword } = this.props;
    const { searchTerm } = this.state;
    return CODEWORDS.filter(w => (
      w.toLowerCase().startsWith(searchTerm)
    )).map(w => (
      <AddRemoveItem
        text={w}
        isActive={codewords.indexOf(w) !== -1}
        onRemove={() => this.clearSearch(removeCodeword(w))}
        onAdd={() => this.clearSearch(addCodeword(w))}
        key={w}
      />
    ));
  }

  clearSearch() {
    this.setState({ searchTerm: '' });
    this.textInput.clear();
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Codewords
        </Text>

        <View style={sharedStyles.paddedCentred}>
          <TextInput
            placeholder="Search..."
            selectionColor="aquamarine"
            onChangeText={text => this.setState({ searchTerm: text.toLowerCase() })}
            ref={(input) => { this.textInput = input; }}
          />

          <ScrollView
            contentContainerStyle={sharedStyles.scrollViewContent}
          >
            {searchTerm ? this.matchingWords : this.currentWords}
          </ScrollView>
        </View>

      </View>
    );
  }
}

Codewords.propTypes = {
  codewords: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCodeword: PropTypes.func.isRequired,
  removeCodeword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  codewords: state.codewords,
});

const mapDispatchToProps = {
  removeCodeword,
  addCodeword,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Codewords);
