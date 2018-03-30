import React, {
  Component,
} from 'react';

import {
  connect,
} from 'react-redux';

import {
  View,
  Text,
  TouchableOpacity,
  Picker,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../shared/styles';

const Item = Picker.Item;

const SELECT_STASH = 'select stash';


class Stashes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStash: SELECT_STASH,
    };
  }

  buildStashOptions() {
    const options = [
      SELECT_STASH,
      ...Object.keys(this.props.possessions).filter(k => k !== 'personal')
    ];
    return options.map(o =>
      <Item label={o} value={o} key={o} />
    );
  }

  render() {
    const { possessions, shards } = this.props;

    return (
      <View style={sharedStyles.container}>
        <Text style={sharedStyles.headerText}>
          Stashes
        </Text>

        <StashContents
          name="Currently Carrying"
          stash={{ items: possessions.personal, shards: shards}}
        />

        <Picker
          style={sharedStyles.containerRow}
          selected={this.state.currentStash}
          onValueChange={value => this.setState({ currentStash: value })}
        >
          {this.buildStashOptions()}
        </Picker>

        {this.state.currentStash !== SELECT_STASH &&
          <StashContents
            name={this.state.currentStash}
            stash={possessions[this.state.currentStash]}
          />
        }
      </View>
    );
  }
}

const StashContents = ({ name, stash }) => (
  <View>
    <Text style={styles.sectionHeader}>
      {name}
    </Text>
    {stash.items.map(i => (
      <ItemRow
        value={i.name}
        icon="I"
        onButtonPress={() => null}
        key={i.key}
      />))
    }
    <ItemRow
      value={`${stash.shards} shards`}
      icon="I"
      onButtonPress={() => null}
    />
  </View>
);

const ItemRow = ({ value, icon, onButtonPress }) => (
  <View style={[sharedStyles.containerRow, {justifyContent: 'space-between'}]}>

    <View style={styles.textContainer}>
      <Text style={sharedStyles.text}>
        {value}
      </Text>
    </View>

    <TouchableOpacity
      style={[sharedStyles.addButton, styles.button]}
      activeOpacity={0.6}
      onPress={onButtonPress}
    >
      <Text style={sharedStyles.buttonText}>
        {icon}
      </Text>
    </TouchableOpacity>

  </View>
);


const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  button: {
    marginLeft: 5,
  },
});

const mapStateToProps = state => ({
  possessions: state.possessions,
  shards: state.character.shards.value,
});

export default connect(
  mapStateToProps,
)(Stashes);
