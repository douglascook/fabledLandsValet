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
  RemovableItem
} from '../shared/components';

import sharedStyles from '../shared/styles';

import {
  addCodeword,
  removeCodeword,
} from '../actions';

import {
  CODEWORDS
} from './reducer';


class Codewords extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  getCurrentWords() {
    return this.props.codewords.map(w => (
      <RemovableItem
        text={w}
        onRemove={() => this.props.removeCodeword(w)}
        key={w}
      />
    ));
  }

  getMatchingWords() {
    return CODEWORDS.filter(w => (
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
          {this.state.searchTerm
            ? this.getMatchingWords()
            : this.getCurrentWords()
          }
        </ScrollView>

      </View>
    );
  }
}

Codewords.propTypes = {
  codewords: PropTypes.array.isRequired,
  removeCodeword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  codewords: state.codewords,
});

const mapDispatchToProps = dispatch => ({
  removeCodeword: word => dispatch(removeCodeword(word)),
  addCodeword: word => dispatch(addCodeword(word)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Codewords);
