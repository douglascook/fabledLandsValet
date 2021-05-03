import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { CommunityIconButton } from './iconButton';
import sharedStyles from '../styles';


const RemovableRow = ({ name, value, onRemove }) => (
  <View style={sharedStyles.row}>

    <View style={styles.remRowItem}>
      <Text style={sharedStyles.text}>
        {name}
      </Text>
    </View>

    <View style={styles.remRowItem}>
      <Text style={sharedStyles.text}>
        {value}
      </Text>
    </View>

    <View>
      <CommunityIconButton
        iconName="close"
        buttonColour="firebrick"
        onPress={onRemove}
      />
    </View>

  </View>
);

RemovableRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onRemove: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  remRowItem: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 5,
    justifyContent: 'space-between',
    backgroundColor: 'whitesmoke'
  },
});

export default RemovableRow;
