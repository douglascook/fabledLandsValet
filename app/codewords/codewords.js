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
    return this.props.codewords.sort().map(w => (
      <AddRemoveItem
        text={w}
        onRemove={() => this.props.removeCodeword(w)}
        isActive
        key={w}
      />
    ));
  }

  getMatchingWords() {
    return CODEWORDS.filter(w => (
      w.toLowerCase().startsWith(this.state.searchTerm)
    )).map(w => (
      <AddRemoveItem
        text={w}
        isActive={this.props.codewords.indexOf(w) !== -1}
        onRemove={() => this.props.removeCodeword(w)}
        onAdd={() => this.props.addCodeword(w)}
        key={w}
      />
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
  codewords: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCodeword: PropTypes.func.isRequired,
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