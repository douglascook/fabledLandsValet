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
  icon, stash, onItemPress, openShardsModal, disableSwap, disableShards
}) => (
  <View>
    {stash.items.map((item) => (
      <ItemRow
        value={item.name}
        icon={icon}
        onButtonPress={() => onItemPress(item)}
        buttonDisabled={disableSwap}
        key={item.key}
      />
    ))}
    <ItemRow
      value={`${stash.shards} shards`}
      icon={icon}
      onButtonPress={() => openShardsModal()}
      buttonDisabled={disableShards}
    />
  </View>
);

StashContents.propTypes = {
  icon: PropTypes.string.isRequired,
  stash: PropTypes.object.isRequired,
  onItemPress: PropTypes.func.isRequired,
  openShardsModal: PropTypes.func.isRequired,
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

    <CommunityIconButton
      iconName={`arrow-${icon}-bold`}
      buttonColour="dodgerblue"
      onPress={onButtonPress}
      disabled={buttonDisabled}
    />

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
