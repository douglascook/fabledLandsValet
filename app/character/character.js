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

import {
  SkillChangeModal,
  StaminaChangeModal,
  ShardsChangeModal,
  GodSelectModal,
  ListItemsModal,
} from './modals';

import {
  SingleItemRow
} from '../shared/components';

import sharedStyles from '../shared/styles';

import {
  addSignPrefix
} from '../shared/helpers';

import {
  updateSkillValue,
  updateMaxStamina,
  updateCurrentStamina,
  updateGod,
  updateShards,
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

  onCloseModal() {
    this.setState(getDefaultState());
  }

  get statRows() {
    return ABILITIES.map(key => this.renderSkillRow(key));
  }

  showSkillModal(attributeKey) {
    this.setState({
      skillModalVisible: true,
      skillToChange: attributeKey,
    });
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
    const {
      character: {
        defence, rank, combat
      }
    } = this.props;
    const value = getDisplayValue(rank.value + combat.value, defence.modifier);

    return (
      <SingleItemRow
        name={defence.displayName}
        value={value}
        key="defence"
      />
    );
  }

  renderStaminaRow() {
    const stamina = this.props.character.stamina;
    const value = getDisplayValue(stamina.current + ' / ' + stamina.value);

    return (
      <SingleItemRow
        name={stamina.displayName}
        value={value}
        onButtonPress={() => this.showSkillModal('stamina')}
        key="stamina"
      />
    );
  }

  renderAssetsButtons() {
    const { character } = this.props;
    return ASSETS.map(key => (
      <View style={{ alignItems: 'center' }} key={key}>
        <TouchableOpacity
          style={styles.buttonRow}
          onPress={() => this.setState({ [`${key}ModalVisible`]: true })}
        >
          <Text style={[sharedStyles.text, styles.statButton]}>
            {character[key].displayName}
          </Text>
        </TouchableOpacity>
      </View>
    ));
  }

  renderAssetsModals() {
    const { character, addAsset, removeAsset } = this.props;
    return ASSETS.map(key => (
      <ListItemsModal
        visible={this.state[`${key}ModalVisible`]}
        onRequestClose={() => this.onCloseModal()}
        items={character[key]}
        addNew={i => addAsset(key, i)}
        remove={i => removeAsset(key, i)}
        key={key}
      />
    ));
  }

  render() {
    const {
      character,
      updateSkillValue,
      updateMaxStamina,
      updateCurrentStamina,
      updateGod,
      updateShards,
    } = this.props;

    const {
      name,
      profession,
      shards,
      god,
      stamina,
    } = character;

    const {
      skillModalVisible,
      skillToChange,
      shardsModalVisible,
      godModalVisible,
    } = this.state;

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
          {this.renderStaminaRow()}

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
          visible={skillModalVisible && skillToChange !== 'stamina'}
          skill={character[skillToChange]}
          updateValue={v => updateSkillValue(skillToChange, v)}
          onRequestClose={() => this.onCloseModal()}
        />

        <StaminaChangeModal
          visible={skillModalVisible && skillToChange === 'stamina'}
          stamina={stamina}
          updateMax={v => updateMaxStamina(v)}
          updateCurrent={v => updateCurrentStamina(v)}
          onRequestClose={() => this.onCloseModal()}
        />

        <ShardsChangeModal
          visible={shardsModalVisible}
          amount={shards.value}
          updateAmount={v => updateShards(v)}
          onRequestClose={() => this.onCloseModal()}
        />

        <GodSelectModal
          visible={godModalVisible}
          selected={god.value}
          updateSelected={v => updateGod(v)}
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
  updateMaxStamina: PropTypes.func.isRequired,
  updateGod: PropTypes.func.isRequired,
  updateShards: PropTypes.func.isRequired,
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

const mapDispatchToProps = {
  updateSkillValue,
  updateMaxStamina,
  updateCurrentStamina,
  updateGod,
  updateShards,
  addAsset,
  removeAsset,
};

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
