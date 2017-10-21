import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import sharedStyles from './styles';


const SingleItemRow = ({ name, value }) => (
  <View style={sharedStyles.containerRow}>
    <View style={styles.rowName}>
      <Text style={styles.textTitle}>
        {name}
      </Text>
    </View>
    <View style={styles.rowValue}>
      <Text style={sharedStyles.text}>
        {value}
      </Text>
    </View>
  </View>
);

SingleItemRow.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const styles = StyleSheet.create({
  rowName: {
    flex: 1,
    marginRight: 5,
  },
  rowValue: {
    flex: 2,
  },
  textTitle: {
    backgroundColor: 'whitesmoke',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 1,
  },
});

export default SingleItemRow;
