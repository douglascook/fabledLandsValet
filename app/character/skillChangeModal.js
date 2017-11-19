import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';


export default class SkillChangeModal extends Component {

  constructor() {
    super();
    this.state = {
      value: undefined,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.skillValue,
    });
  }

  decrement() {
    this.setState({
      value: this.state.value - 1,
    });
  }

  increment() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  render() {
    return (
      <Modal {...this.props} >
        <View style={styles.modal}>
          <Text style={styles.skillName}>
            {this.props.skillName}
          </Text>

          <View style={styles.changer}>
            <Button
              title="-"
              onPress={() => this.decrement()}
            />

            <Text style={styles.value}>
              {this.state.value}
            </Text>

            <Button
              title="+"
              onPress={() => this.increment()}
            />
          </View>

          <SubmitButton
            onPress={() => this.props.onDone(this.state.value)}
          />
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
    alignItems: 'center',
  },
  skillName: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  changer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingHorizontal: 25,
  },
});
