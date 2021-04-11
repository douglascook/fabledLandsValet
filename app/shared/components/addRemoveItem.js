import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';


import { CommunityIconButton } from './iconButton';
import sharedStyles from '../styles';


const AddRemoveItem = ({ text, isActive, onAdd, onRemove }) => (
  <View style={{ flexDirection: 'row', marginVertical: 1 }}>

    <Text style={[sharedStyles.text, { flex: 1 }]}>
      {text}
    </Text>

    <CommunityIconButton
      iconName={isActive ? 'close' : 'check'}
      buttonColour={isActive ? 'firebrick' : 'dodgerblue'}
      onPress={isActive ? onRemove : onAdd}
    />

  </View>
);


AddRemoveItem.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  isActive: PropTypes.bool.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

export default AddRemoveItem;
