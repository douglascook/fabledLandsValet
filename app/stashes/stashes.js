import React, {
  Component,
} from 'react';

import {
  connect,
} from 'react-redux';

import PropTypes from 'prop-types';

import {
  View,
  ScrollView,
  Text,
  TextInput,
  Picker,
  Button,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../shared/styles';

import {
  addStash,
  deleteStash,
  swapItemCollection,
} from '../actions';

import StashContents from './contents';

const Item = Picker.Item;

const SELECT_STASH = 'Select/Add stash';


class Stashes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStash: SELECT_STASH,
      addingStash: false,
      newStash: null,
    };
  }

  get stashOptions() {
    const options = [
      SELECT_STASH,
      ...Object.keys(this.props.possessions).filter(k => k !== 'personal').sort()
    ];
    return options.map(o =>
      <Item label={o} value={o} key={o} />
    );
  }

  addStash() {
    // TODO handle duplicate name
    this.props.addStash(this.state.newStash);
    this.setState({
      addingStash: false,
      currentStash: this.state.newStash,
      newStash: null,
    });
  }

  deleteStash() {
    this.props.deleteStash(this.state.currentStash);
    this.setState({
      currentStash: SELECT_STASH,
      addingStash: false,
    });
  }

  newStashInput() {
    if (this.state.addingStash) {
      return (
        <TextInput
          style={[sharedStyles.containerRow, { flex: 1 }]}
          value={this.state.newStash}
          placeholder="New stash name"
          selectionColor="aquamarine"
          autoCapitalize="words"
          onChangeText={text => this.setState({ newStash: text })}
          onSubmitEditing={() => this.addStash()}
        />);
    }

    if (this.state.currentStash === SELECT_STASH) {
      return (
        <View style={styles.addDeleteButton}>
          <Button
            onPress={() => this.setState({ addingStash: true })}
            title="New"
          />
        </View>);
    }
    return null;
  }

  render() {
    const { possessions, shards } = this.props;
    const currentStash = this.state.currentStash;

    return (
      <View style={sharedStyles.container}>
        <Text style={sharedStyles.headerText}>
          Stashes
        </Text>

        <Text style={styles.sectionHeader}>
          Currently Carrying
        </Text>

        <StashContents
          personal
          icon="down"
          stash={{ items: possessions.personal.items, shards }}
          onItemPress={index =>
            this.props.swapItemCollection(index, 'personal', currentStash)
          }
          disableSwap={currentStash === SELECT_STASH || currentStash === 'Bank'
              || currentStash === 'Invested'
          }
          disableShards={currentStash === SELECT_STASH}
        />

        <Picker
          style={sharedStyles.containerRow}
          selectedValue={currentStash}
          onValueChange={value => this.setState({ currentStash: value })}
        >
          {this.stashOptions}
        </Picker>

        {currentStash !== SELECT_STASH &&
          <ScrollView>
            <StashContents
              icon="up"
              stash={possessions[currentStash]}
              onItemPress={index =>
                this.props.swapItemCollection(index, currentStash, 'personal')
              }
              disableSwap={possessions.personal.items.length >= 12}
            />

            { currentStash !== 'Bank' && currentStash !== 'Invested' &&
              <View style={styles.addDeleteContainer}>
                <Button
                  color="firebrick"
                  onPress={() => this.deleteStash()}
                  title="Delete"
                />
              </View>
            }
          </ScrollView>
        }

        <View style={styles.addDeleteContainer}>
          {this.newStashInput()}
        </View>

      </View>
    );
  }
}

Stashes.propTypes = {
  possessions: PropTypes.object.isRequired,
  shards: PropTypes.number.isRequired,
  addStash: PropTypes.func.isRequired,
  deleteStash: PropTypes.func.isRequired,
  swapItemCollection: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  addDeleteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  addDeleteButton: {
    marginHorizontal: 5,
    width: 80,
  },
});

const mapStateToProps = state => ({
  possessions: state.possessions,
  shards: state.character.shards.value,
});

const mapDispatchToProps = dispatch => ({
  addStash: name => dispatch(addStash(name)),
  deleteStash: name => dispatch(deleteStash(name)),
  swapItemCollection: (itemIndex, collection, newCollection) =>
    dispatch(swapItemCollection(itemIndex, collection, newCollection)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stashes);
