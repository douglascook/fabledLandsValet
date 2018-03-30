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

import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import sharedStyles from '../shared/styles';

import {
  swapItemCollection,
} from '../actions';

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
    const currentStash = this.state.currentStash;

    return (
      <View style={sharedStyles.container}>
        <Text style={sharedStyles.headerText}>
          Stashes
        </Text>

        <StashContents
          name="Currently Carrying"
          icon="down"
          stash={{ items: possessions.personal.items, shards}}
          onItemPress={index => currentStash !== SELECT_STASH &&
            this.props.swapItemCollection(index, 'personal', currentStash)
          }
        />

        <Picker
          style={sharedStyles.containerRow}
          selected={currentStash}
          onValueChange={value => this.setState({ currentStash: value })}
        >
          {this.buildStashOptions()}
        </Picker>

        {currentStash !== SELECT_STASH &&
          <StashContents
            name={currentStash}
            icon="up"
            stash={possessions[currentStash]}
            onItemPress={index =>
              this.props.swapItemCollection(index, currentStash, 'personal')
            }
          />
        }
      </View>
    );
  }
}

const StashContents = ({ name, icon, stash, onItemPress }) => (
  <View>
    <Text style={styles.sectionHeader}>
      {name}
    </Text>
    {stash.items.map((item, i) => (
      <ItemRow
        value={item.name}
        icon={icon}
        onButtonPress={() => onItemPress(i)}
        key={item.key}
      />))
    }
    <ItemRow
      value={`${stash.shards} shards`}
      icon={icon}
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
        <MatIcon name={`arrow-${icon}-bold`} size={23} color="white" />
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

const mapDispatchToProps = dispatch => ({
  swapItemCollection: (itemIndex, collection, newCollection) =>
    dispatch(swapItemCollection(itemIndex, collection, newCollection)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stashes);
