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

import {
  BOOKS,
} from '../data';

const Item = Picker.Item;


class Tickboxes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: 0,
    };
  }

  onAdd(event) {
    this.props.addTick(this.state.book, event.nativeEvent.text);
    this.textInput.clear();
  }

  get currentlyTicked() {
    const ticks = this.props.tickboxes[this.state.book].sort((a, b) => a - b);
    return ticks.map(pageNumber => (
      <AddRemoveItem
        text={pageNumber}
        isActive
        onRemove={() => this.props.removeTick(this.state.book, pageNumber)}
        key={`${this.state.book}${pageNumber}`}
      />
    ));
  }

  render() {
    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Tickboxes
        </Text>

        <View style={sharedStyles.paddedCentred}>

          <Picker
            selectedValue={this.state.book}
            onValueChange={value => this.setState({ book: value })}
          >
            {bookItems}
          </Picker>

          <TextInput
            placeholder="Add new tick"
            keyboardType="numeric"
            selectionColor="aquamarine"
            onSubmitEditing={e => this.onAdd(e)}
            ref={(input) => { this.textInput = input; }}
            style={[styles.narrower, styles.inputText]}
          />

          <ScrollView
            contentContainerStyle={
              [sharedStyles.scrollViewContent, styles.narrower]}
          >
            {this.currentlyTicked}
          </ScrollView>

        </View>

      </View>
    );
  }
}

Tickboxes.propTypes = {
  tickboxes: PropTypes.object.isRequired,
  addTick: PropTypes.func.isRequired,
  removeTick: PropTypes.func.isRequired,
};

const bookItems = BOOKS.map((b, i) => (
  <Item label={b} value={i} key={b} />
));

const styles = StyleSheet.create({
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
