import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { CommunityIconButton } from '../shared/components';
import sharedStyles from '../shared/styles';


const StashContents = ({
  iconName, stash, onItemPress, openShardsModal, disableSwap, disableShards
}) => (
  <View style={{ flex: 1 }}>
    {stash.items.map((item) => (
      <ItemRow
        value={item.name}
        iconName={iconName}
        onButtonPress={() => onItemPress(item)}
        buttonDisabled={disableSwap}
        key={item.key}
      />
    ))}
    <ItemRow
      value={`${stash.shards} shards`}
      iconName={iconName}
      onButtonPress={() => openShardsModal()}
      buttonDisabled={disableShards}
    />
  </View>
);

StashContents.propTypes = {
  iconName: PropTypes.string.isRequired,
  stash: PropTypes.object.isRequired,
  onItemPress: PropTypes.func.isRequired,
  openShardsModal: PropTypes.func.isRequired,
  disableSwap: PropTypes.bool,
  disableShards: PropTypes.bool,
};


const ItemRow = ({ value, iconName, onButtonPress, buttonDisabled }) => (
  <View style={[sharedStyles.row, { justifyContent: 'space-between' }]}>

    <View style={styles.textContainer}>
      <Text style={sharedStyles.text}>
        {value}
      </Text>
    </View>

    <CommunityIconButton
      iconName={iconName}
      buttonColour="dodgerblue"
      onPress={onButtonPress}
      disabled={buttonDisabled}
    />

  </View>
);

ItemRow.propTypes = {
  value: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
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
