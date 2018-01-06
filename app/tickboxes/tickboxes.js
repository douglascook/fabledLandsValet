import React, {
  Component
} from 'react';

import {
  Text,
  TextInput,
  View,
  Picker,
  ScrollView,
  StyleSheet,
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
  addTick,
  removeTick,
} from '../actions';

const Item = Picker.Item;


class Tickboxes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: 1,
    };
  }

  onAdd(event) {
    this.props.addTick(this.state.book, event.nativeEvent.text);
    this.textInput.clear();
  }

  get currentlyTicked() {
    return this.props.tickboxes
      .filter(t => t.book === this.state.book)
      .map(t => (
        <AddRemoveItem
          text={t.pageNumber}
          isActive
          onRemove={() => this.props.removeTick(t.book, t.pageNumber)}
          key={`${t.book}${t.pageNumber}`}
        />
      ));
  }

  render() {
    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Tickboxes
        </Text>

        <View style={styles.content}>

          <Picker
            selectedValue={this.state.book}
            onValueChange={value => this.setState({ book: value })}
          >
            {buildBookNumbers()}
          </Picker>

          <TextInput
            placeholder="New page number"
            keyboardType="numeric"
            selectionColor="aquamarine"
            onSubmitEditing={e => this.onAdd(e)}
            ref={(input) => { this.textInput = input; }}
            style={[styles.narrower, styles.inputText]}
          />

          <ScrollView
            contentContainerStyle={[styles.currentlyTicked, styles.narrower]}
          >
            {this.currentlyTicked}
          </ScrollView>

        </View>

      </View>
    );
  }
}

Tickboxes.propTypes = {
  tickboxes: PropTypes.arrayOf(PropTypes.node).isRequired,
  addTick: PropTypes.func.isRequired,
  removeTick: PropTypes.func.isRequired,
};

function buildBookNumbers() {
  const books = [
    'The War-Torn Kingdom',
    'Cities of Gold and Glory',
    'Over the Blood-Dark Sea',
    'The Plains of Howling Darkness',
    'The Court of Hidden Faces',
    'Lords of the Rising Sun',
    'The Serpent King\'s Domain',
  ];

  return books.map((b, i) => (
    <Item label={b} value={i} key={b} />
  ));
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  currentlyTicked: {
    marginTop: 10,
  },
  narrower: {
    marginHorizontal: 80,
  },
  inputText: {
    textAlign: 'center',
  }
});

const mapStateToProps = state => ({
  tickboxes: state.tickboxes,
});

const mapDispatchToProps = dispatch => ({
  addTick: (book, pageNumber) => dispatch(addTick(book, pageNumber)),
  removeTick: (book, pageNumber) => dispatch(removeTick(book, pageNumber)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tickboxes);
