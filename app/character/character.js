import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  Text,
  View,
} from 'react-native';

import {
  connect
} from 'react-redux';

import SkillChangeModal from './skillChangeModal';
import ShardsChangeModal from './shardsChangeModal';
import GodSelectModal from './godSelectModal';

import {
  SingleItemRow
} from '../shared/components';

import styles from '../shared/styles';

import {
  addSignPrefix
} from '../shared/helpers';

import {
  updateSkillValue,
} from '../actions';


export const stats = ['rank', 'defence', 'stamina', 'charisma', 'combat',
  'magic', 'sanctity', 'scouting', 'thievery'];

const nameProfession = ['name', 'profession'];

const otherStats = ['titles', 'blessings', 'resurrection'];


class Character extends Component {

  constructor() {
    super();
    this.state = getDefaultState();
  }

  showSkillModal(attributeKey, attribute) {
    this.setState({
      skillModalVisible: true,
      skillToChange: attributeKey,
      skillName: attribute.attribute,
      skillValue: attribute.value,
    });
  }

  onSubmitSkillChange(newSkillValue) {
    this.props.updateSkillValue(this.state.skillToChange, newSkillValue);
    this.onCloseModal();
  }

  onSubmitShardsChange(newValue) {
    this.props.updateSkillValue('shards', newValue);
    this.onCloseModal();
  }

  onCloseModal() {
    this.setState(getDefaultState());
  }

  getDisplayValue(attr) {
    if (!attr.modifier) {
      return attr.value;
    }
    return `${attr.value + attr.modifier} (${addSignPrefix(attr.modifier)})`;
  }

  renderRows(keys) {
    return keys.map(key => {
      const attribute = this.props.character[key];
      return (
        <SingleItemRow
          name={attribute.attribute}
          value={this.getDisplayValue(attribute)}
          key={key}
        />
      );
    });
  }

  renderSkillRows() {
    return stats.map(key => {
      const attribute = this.props.character[key];
      return (
        <SingleItemRow
          name={attribute.attribute}
          value={this.getDisplayValue(attribute)}
          onButtonPress={() => this.showSkillModal(key, attribute)}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}> Character </Text>

        {this.renderRows(nameProfession)}
        {this.renderSkillRows()}
        <SingleItemRow
          name="Shards"
          value={this.getDisplayValue(this.props.character.shards)}
          onButtonPress={() => this.setState({ shardsModalVisible: true })}
        />
        <SingleItemRow
          name="God"
          value={this.props.character.god.value}
          onButtonPress={() => this.setState({ godModalVisible: true })}
        />
        {this.renderRows(otherStats)}

        <SkillChangeModal
          visible={this.state.skillModalVisible}
          skillName={this.state.skillName}
          skillValue={this.state.skillValue}
          onDone={v => this.onSubmitSkillChange(v)}
          onRequestClose={() => this.onCloseModal()}
        />

        <ShardsChangeModal
          visible={this.state.shardsModalVisible}
          shards={this.props.character.shards}
          onDone={s => this.onSubmitShardsChange(s)}
          onRequestClose={() => this.onCloseModal()}
        />

        <GodSelectModal
          visible={this.state.godModalVisible}
          selected={this.props.character.god.value}
          updateSelected={g => this.props.updateSkillValue('god', g)}
          onRequestClose={() => this.onCloseModal()}
        />

      </View>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
  updateSkillValue: PropTypes.func.isRequired,
};


const getDefaultState = () => ({
  skillModalVisible: false,
  skillToChange: null,
  skillName: null,
  skillValue: null,
  shardsModalVisible: false,
  godModalVisible: false,
});


const mapStateToProps = state => ({
  character: state.character
});

const mapDispatchToProps = dispatch => ({
  updateSkillValue: (name, value) => dispatch(updateSkillValue(name, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Character);
