import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import sharedStyles from './styles';


const RemovableRow = ({ name, value, onRemove }) => (
  <View style={sharedStyles.containerRow}>
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
    <View style={styles.remRowButton}>
      <Button
        onPress={onRemove}
        title="x"
        color="firebrick"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  remRowItem: {
    flex: 5,
    marginRight: 5,
  },
  remRowButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default RemovableRow;
