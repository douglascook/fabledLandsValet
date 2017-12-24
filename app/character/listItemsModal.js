import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

import sharedStyles from '../shared/styles';


export default class ListItemsModal extends Component {

  onSubmitEditing(event) {
    this.props.addNew(event.nativeEvent.text);
    this.textInput.clear();
  }

  render() {
    const { visible, onRequestClose, items, remove } = this.props;
    return (
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        style={sharedStyles.fullSizeCentred}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={[sharedStyles.modalHeaderText, styles.skillName]}>
            {items.attribute}
          </Text>

          <TextInput
            placeholder="New"
            selectionColor="aquamarine"
            onSubmitEditing={e => this.onSubmitEditing(e)}
            autoCapitalize="sentences"
            ref={input => { this.textInput = input; }}
          />

          { items.value.map((item, i) => (
            <RemovableItem
              text={item}
              onRemove={() => remove(i)}
              key={item}
            />))
          }
        </ScrollView>
      </Modal>
    );
  }
}

ListItemsModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  items: PropTypes.object,
  addNew: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const RemovableItem = ({ text, onRemove }) => (
  <View style={styles.itemRow}>

    <Text style={[sharedStyles.text, styles.text]}>
      {text}
    </Text>

    <TouchableOpacity
      style={[sharedStyles.removeButton, styles.button]}
      activeOpacity={0.6}
      onPress={onRemove}
    >
      <Text style={sharedStyles.buttonText}>
        x
      </Text>
    </TouchableOpacity>

  </View>
);

RemovableItem.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  skillName: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  text: {
    flex: 9,
  },
  button: {
    flex: 1,
    marginLeft: 1,
  }
});
