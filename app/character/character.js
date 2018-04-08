import React, {
  Component
} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  connect
} from 'react-redux';

import PropTypes from 'prop-types';

import SkillChangeModal, {
  StaminaChangeModal,
} from './skillChangeModal';
import ShardsChangeModal from './shardsChangeModal';
import GodSelectModal from './godSelectModal';
import ListItemsModal from './listItemsModal';

import {
  SingleItemRow
} from '../shared/components';

import sharedStyles from '../shared/styles';

import {
  addSignPrefix
} from '../shared/helpers';

import {
  updateSkillValue,
  updateCurrentStamina,
  addAsset,
  removeAsset,
} from '../actions';

import {
  ABILITIES,
  ASSETS,
} from '../data';


class Character extends Component {

  constructor() {
    super();
    this.state = getDefaultState();
  }

  showSkillModal(attributeKey) {
    this.setState({
      skillModalVisible: true,
      skillToChange: attributeKey,
    });
  }

  onCloseModal() {
    this.setState(getDefaultState());
  }

  get statRows() {
    return ABILITIES.map(key => this.renderSkillRow(key));
  }

  renderSkillRow(key) {
    const attribute = this.props.character[key];
    return (
      <SingleItemRow
        name={attribute.displayName}
        value={getDisplayValue(attribute.value, attribute.modifier)}
        onButtonPress={() => this.showSkillModal(key)}
        key={key}
      />
    );
  }

  renderDefenceRow() {
    const { defence, rank, combat } = this.props.character;
    const value = getDisplayValue(rank.value + combat.value, defence.modifier);

    return (
      <SingleItemRow
        name={defence.displayName}
        value={value}
        onButtonPress={() => this.showSkillModal('defence')}
        key={'defence'}
      />
    );
  }

  renderAssetsButtons() {
    return ASSETS.map(key => (
      <View style={{ alignItems: 'center' }} key={key}>
        <TouchableOpacity
          style={styles.buttonRow}
          onPress={() => this.setState({ [`${key}ModalVisible`]: true })}
        >
          <Text style={[sharedStyles.text, styles.statButton]}>
            {this.props.character[key].displayName}
          </Text>
        </TouchableOpacity>
      </View>
    ));
  }

  renderAssetsModals() {
    return ASSETS.map(key => (
      <ListItemsModal
        visible={this.state[`${key}ModalVisible`]}
        onRequestClose={() => this.onCloseModal()}
        items={this.props.character[key]}
        addNew={i => this.props.addAsset(key, i)}
        remove={i => this.props.removeAsset(key, i)}
        key={key}
      />
    ));
  }

  render() {
    const { name, profession, shards, god } = this.props.character;

    return (
      <View style={sharedStyles.container}>

        <Text style={sharedStyles.headerText}>
          Character
        </Text>

        <Text style={styles.nameProfession}>
          {name.value}
        </Text>

        <Text style={styles.nameProfession}>
          {profession.value}
        </Text>

        <View style={{ marginVertical: 6 }}>
          {this.renderSkillRow('rank')}
          {this.renderDefenceRow()}
          {this.renderSkillRow('stamina')}

          {this.statRows}

          <SingleItemRow
            name="Shards"
            value={getDisplayValue(shards.value, shards.modifier)}
            onButtonPress={() => this.setState({ shardsModalVisible: true })}
          />

          <SingleItemRow
            name="God"
            value={god.value}
            onButtonPress={() => this.setState({ godModalVisible: true })}
          />
        </View>

        {this.renderAssetsButtons()}
        {this.renderAssetsModals()}

        <SkillChangeModal
          visible={this.state.skillModalVisible &&
                   this.state.skillToChange !== 'stamina'}
          skill={this.props.character[this.state.skillToChange]}
          updateValue={
            v => this.props.updateSkillValue(this.state.skillToChange, v)}
          onRequestClose={() => this.onCloseModal()}
        />

        <StaminaChangeModal
          visible={this.state.skillModalVisible &&
                   this.state.skillToChange === 'stamina'}
          stamina={this.props.character.stamina}
          updateMax={
            v => this.props.updateSkillValue(this.state.skillToChange, v)}
          updateCurrent={v => this.props.updateCurrentStamina(v)}
          onRequestClose={() => this.onCloseModal()}
        />

        <ShardsChangeModal
          visible={this.state.shardsModalVisible}
          amount={shards.value}
          updateAmount={v => this.props.updateSkillValue('shards', v)}
          onRequestClose={() => this.onCloseModal()}
        />

        <GodSelectModal
          visible={this.state.godModalVisible}
          selected={god.value}
          updateSelected={v => this.props.updateSkillValue('god', v)}
          onRequestClose={() => this.onCloseModal()}
        />

      </View>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
  updateSkillValue: PropTypes.func.isRequired,
  updateCurrentStamina: PropTypes.func.isRequired,
  addAsset: PropTypes.func.isRequired,
  removeAsset: PropTypes.func.isRequired,
};

function getDisplayValue(value, modifier) {
  if (!modifier) {
    return value;
  }
  return `${value + modifier} (${addSignPrefix(modifier)})`;
}

const getDefaultState = () => ({
  skillModalVisible: false,
  shardsModalVisible: false,
  godModalVisible: false,
  titlesModalVisible: false,
  blessingsModalVisible: false,
  resurrectionModalVisible: false,
  skillToChange: null,
});

const mapStateToProps = state => ({
  character: state.character
});

const mapDispatchToProps = dispatch => ({
  updateSkillValue: (attr, value) => dispatch(updateSkillValue(attr, value)),
  updateCurrentStamina: value => dispatch(updateCurrentStamina(value)),
  addAsset: (attr, item) => dispatch(addAsset(attr, item)),
  removeAsset: (attr, index) => dispatch(removeAsset(attr, index)),
});

const styles = StyleSheet.create({
  nameProfession: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 1,
    backgroundColor: 'whitesmoke',
    width: 260,
  },
  statButton: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Character);
