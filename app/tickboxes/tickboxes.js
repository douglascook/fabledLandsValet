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
      book: 'Book 1',
      pageNumber: undefined,
    };
  }

  get currentlyTicked() {
    return this.props.tickboxes.map(t => (
      <AddRemoveItem
        text={`${t.book}: ${t.pageNumber}`}
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

          <View style={styles.inputRow}>
            <Picker
              selectedValue={this.state.book}
              onValueChange={value => this.setState({ book: value })}
              style={styles.picker}
            >
              {buildBookNumbers()}
            </Picker>

            <TextInput
              placeholder="Page number"
              keyboardType="numeric"
              selectionColor="aquamarine"
              onChangeText={number => this.setState({ pageNumber: number })}
              onSubmitEditing={e =>
                this.props.addTick(this.state.book, e.nativeEvent.text)}
              style={styles.input}
            />
          </View>

          <ScrollView>
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
  const books = ['Book 1', 'Book 2', 'Book 3', 'Book 4', 'Book 5', 'Book 6'];
  return books.map(b => <Item label={b} value={b} key={b} />);
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  picker: {
    flex: 5,
  },
  input: {
    flex: 5,
  },
  button: {
    flex: 1,
    marginLeft: 1,
  },
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
