import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../styles';


const SingleItemRow = ({ name, value, onButtonPress = null }) => (
  <View style={sharedStyles.containerRow}>

    <View style={styles.rowName}>
      <Text style={styles.textTitle}>
        {name}
      </Text>
    </View>

    <View style={{ flex: onButtonPress ? 4 : 5 }}>
      <Text style={sharedStyles.text}>
        {value}
      </Text>
    </View>

    {onButtonPress &&
      <View style={{ flex: 1 }}>
        <Button
          onPress={onButtonPress}
          title="o"
        />
      </View>
    }

  </View>
);

SingleItemRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onButtonPress: PropTypes.func,
};

const styles = StyleSheet.create({
  rowName: {
    flex: 6,
    marginRight: 5,
  },
  rowValue: {
    flex: 3,
  },
  textTitle: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 1,
  },
});

export default SingleItemRow;
