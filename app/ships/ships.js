import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  connect
} from 'react-redux';

import {
  View,
  Text,
  Button,
} from 'react-native';

import {
  SingleItemRow
} from '../shared/components';

import sharedStyles from '../shared/styles';

import {
  addNewShip,
  deleteShip,
  updatePort,
  updateCrew,
  updateCargo,
} from '../actions';

import EditShipModal from './editShip';
import NewShipModal from './newShip';


class Ships extends Component {

  constructor(props) {
    super(props);
    this.state = getDefaultState();
  }

  closeModals() {
    this.setState(getDefaultState());
  }

  render() {
    const { ships, updatePort, updateCrew, updateCargo, addNewShip, deleteShip } = this.props;
    const { newShip, shipIndex } = this.state;

    return (
      <View style={sharedStyles.container}>

        <Text style={[sharedStyles.headerText, { marginBottom: 10 }]}>
          Ships
        </Text>

        { ships.map((ship, i) => (
          <SingleItemRow
            name={ship.name}
            value={ship.port}
            key={ship.key}
            onButtonPress={() => this.setState({ shipIndex: i })}
          />
        ))}

        <View style={
          { flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}
        >
          <Button
            onPress={() => this.setState({ newShip: true })}
            title="Add ship"
          />
        </View>

        { (shipIndex !== null) && (
          <EditShipModal
            ship={ships[shipIndex]}
            onRequestClose={() => this.closeModals()}
            visible={shipIndex !== null}
            onUpdatePort={port => updatePort(shipIndex, port)}
            onUpdateCrew={v => updateCrew(shipIndex, v)}
            onUpdateCargo={(i, c) => updateCargo(shipIndex, i, c)}
            onDeleteShip={() => deleteShip(shipIndex)}
            closeModal={() => this.closeModals()}
          />
        )}

        <NewShipModal
          visible={newShip}
          addNewShip={(name, type, crew) => addNewShip(name, type, crew)}
          closeModal={() => this.closeModals()}
        />

      </View>
    );
  }
}

Ships.propTypes = {
  ships: PropTypes.array.isRequired,
  updatePort: PropTypes.func.isRequired,
  updateCrew: PropTypes.func.isRequired,
  updateCargo: PropTypes.func.isRequired,
  addNewShip: PropTypes.func.isRequired,
  deleteShip: PropTypes.func.isRequired,
};

const getDefaultState = () => ({
  shipIndex: null,
  newShip: false,
});

const mapStateToProps = state => ({
  ships: state.ships,
});

const mapDispatchToProps = dispatch => ({
  addNewShip: (name, type, crew) => dispatch(addNewShip(name, type, crew)),
  deleteShip: shipIndex => dispatch(deleteShip(shipIndex)),
  updatePort: (shipIndex, port) => dispatch(updatePort(shipIndex, port)),
  updateCrew: (shipIndex, quality) => dispatch(updateCrew(shipIndex, quality)),
  updateCargo: (shipIndex, cargoIndex, cargo) =>
    dispatch(updateCargo(shipIndex, cargoIndex, cargo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ships);
