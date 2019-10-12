import React from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import sharedStyles from '../shared/styles';


const StashContents = (
  { icon, stash, onItemPress, disableSwap, disableShards }) => (
    <View>
      {stash.items.map((item, i) => (
        <ItemRow
          value={item.name}
          icon={icon}
          onButtonPress={() => onItemPress(i)}
          buttonDisabled={disableSwap}
          key={item.key}
        />
      ))}
      <ItemRow
        value={`${stash.shards} shards`}
        icon={icon}
        onButtonPress={() => null}
        buttonDisabled={disableShards}
      />
    </View>
);

StashContents.propTypes = {
  icon: PropTypes.string.isRequired,
  stash: PropTypes.object.isRequired,
  onItemPress: PropTypes.func.isRequired,
  disableSwap: PropTypes.bool,
  disableShards: PropTypes.bool,
};


const ItemRow = ({ value, icon, onButtonPress, buttonDisabled }) => (
  <View style={[sharedStyles.containerRow, { justifyContent: 'space-between' }]}>

    <View style={styles.textContainer}>
      <Text style={sharedStyles.text}>
        {value}
      </Text>
    </View>

    <TouchableOpacity
      style={[sharedStyles.addButton, styles.button, {
        backgroundColor: buttonDisabled ? 'transparent' : 'dodgerblue'}]}
      activeOpacity={0.6}
      onPress={onButtonPress}
      disabled={buttonDisabled}
    >
      <Text style={sharedStyles.buttonText}>
        <MatIcon name={`arrow-${icon}-bold`} size={23} color="white" />
      </Text>
    </TouchableOpacity>

  </View>
);

ItemRow.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool,
};


const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  button: {
    marginLeft: 5,
  },
});

export default StashContents;
