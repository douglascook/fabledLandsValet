import {
  ADD_NEW_SHIP,
  UPDATE_PORT,
  UPDATE_CREW,
  UPDATE_CARGO,
} from '../actions';

import {
  shipTypes
} from './data';

import { initialState } from '../reducer';


export default function ships(state = initialState.ships, action) {

  switch (action.type) {

    case ADD_NEW_SHIP: {
      const capacity = shipTypes.find(s => s.type === action.shipType).capacity;
      const newShip = {
        name: action.name,
        type: action.shipType,
        crew: action.crew,
        cargo: new Array(capacity).fill('None'),
        port: 'No Port',
      };
      return [...state, newShip];
    }

    case UPDATE_PORT: {
      const newState = [...state];
      newState[action.shipIndex].port = action.port;
      return newState;
    }

    case UPDATE_CREW: {
      const newState = [...state];
      newState[action.shipIndex].crew = action.quality;
      return newState;
    }

    case UPDATE_CARGO: {
      const newState = [...state];
      newState[action.shipIndex].cargo[action.cargoIndex] = action.cargo;
      return newState;
    }

    default:
      return state;
  }
}
