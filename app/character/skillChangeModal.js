import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';


export default class SkillChangeModal extends Component {

  render() {
    return (
      <Modal {...this.props} >
        <View style={styles.modal}>
          <Text>
            {this.props.skillName}
          </Text>

          <Text>
            {this.props.skillValue}
          </Text>

          <SubmitButton />
        </View>
      </Modal>
    );
  }
}

const SubmitButton = ({ onPress }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    <Button
      title="Done"
      onPress={onPress}
    />
  </View>
);


const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
