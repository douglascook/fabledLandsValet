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
  removeStash,
  swapItemCollection,
  moveShardsToStash,
} from '../actions';

import StashContents from './contents';
import ShardsChangeModal from './shardsChangeModal';

const SELECT_STASH = 'Select/Add stash';


class Stashes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStash: SELECT_STASH,
      addingStash: false,
      newStash: null,
      shardsModalVisible: false,
    };
  }

  get stashOptions() {
    const options = [
      SELECT_STASH,
      ...Object.keys(this.props.possessions).filter(k => k !== 'personal').sort()
    ];
    return options.map((o) => <Picker.Item label={o} value={o} key={o} />);
  }

  addStash() {
    const { newStash } = this.state;
    // TODO handle duplicate name
    this.props.addStash(newStash);
    this.setState({
      addingStash: false,
      currentStash: newStash,
      newStash: null,
    });
  }

  removeStash() {
    this.props.removeStash(this.state.currentStash);
    this.setState({
      currentStash: SELECT_STASH,
      addingStash: false,
    });
  }

  newStashInput() {
    const { addingStash, newStash, currentStash } = this.state;
    if (addingStash) {
      return (
        <TextInput
          style={[sharedStyles.containerRow, { flex: 1 }]}
          value={newStash}
          placeholder="New stash name"
          selectionColor="aquamarine"
          autoCapitalize="words"
          onChangeText={text => this.setState({ newStash: text })}
          onSubmitEditing={() => this.addStash()}
        />
      );
    }

    if (currentStash === SELECT_STASH) {
      return (
        <View style={styles.addDeleteButton}>
          <Button
            onPress={() => this.setState({ addingStash: true })}
            title="New"
          />
        </View>
      );
    }
    return null;
  }

  render() {
    const { possessions, shards, swapItemCollection, moveShardsToStash } = this.props;
    const { currentStash, shardsModalVisible } = this.state;

    return (
      <View style={sharedStyles.container}>
        <Text style={sharedStyles.headerText}>
          Stashes
        </Text>

        <Text style={styles.sectionHeader}>
          Currently Carrying
        </Text>

        <StashContents
          icon="down"
          stash={{ items: possessions.personal.items, shards }}
          onItemPress={(item) => swapItemCollection(item, 'personal', currentStash)}
          openShardsModal={() => this.setState({ shardsModalVisible: true })}
          disableSwap={currentStash === SELECT_STASH || currentStash === 'Bank'
              || currentStash === 'Invested'}
          disableShards={currentStash === SELECT_STASH}
        />

        <Picker
          style={sharedStyles.containerRow}
          selectedValue={currentStash}
          onValueChange={(v) => this.setState({ currentStash: v })}
        >
          {this.stashOptions}
        </Picker>

        {currentStash !== SELECT_STASH && (
          <ScrollView>
            <StashContents
              icon="up"
              stash={possessions[currentStash]}
              onItemPress={(i) => swapItemCollection(i, currentStash, 'personal')}
              openShardsModal={() => this.setState({ shardsModalVisible: true })}
              disableSwap={possessions.personal.items.length >= 12}
              disableShards={false}
            />

            { currentStash !== 'Bank' && currentStash !== 'Invested' && (
              <View style={styles.addDeleteContainer}>
                <Button
                  color="firebrick"
                  onPress={() => this.removeStash()}
                  title="Delete"
                />
              </View>
            )}
          </ScrollView>
        )}

        <View style={styles.addDeleteContainer}>
          {this.newStashInput()}
        </View>

        {currentStash !== SELECT_STASH && (
          <ShardsChangeModal
            visible={shardsModalVisible}
            personalShards={shards}
            stashName={currentStash}
            stashShards={possessions[currentStash].shards}
            onRequestClose={() => this.setState({ shardsModalVisible: false })}
            updateAmount={(v) => moveShardsToStash(currentStash, v)}
          />
        )}

      </View>
    );
  }
}

Stashes.propTypes = {
  possessions: PropTypes.object.isRequired,
  shards: PropTypes.number.isRequired,
  addStash: PropTypes.func.isRequired,
  removeStash: PropTypes.func.isRequired,
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
  // TODO do shards actually belong in posessions?
  shards: state.character.shards.value,
});

const mapDispatchToProps = {
  addStash,
  removeStash,
  swapItemCollection,
  moveShardsToStash,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stashes);
