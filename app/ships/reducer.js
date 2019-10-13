import {
  ADD_NEW_SHIP,
  DELETE_SHIP,
  UPDATE_PORT,
  UPDATE_CREW,
  UPDATE_CARGO,
} from '../actions';

import {
  SHIP_TYPES,
} from '../data';


const initialState = [];

export default function ships(state = initialState, action) {
  switch (action.type) {

    case ADD_NEW_SHIP: {
      const capacity = SHIP_TYPES.find(s => s.type === action.shipType).capacity;
      const newShip = {
        name: action.name,
        type: action.shipType,
        crew: action.crew,
        cargo: new Array(capacity).fill('None'),
        port: 'No Port',
        key: Date.now(),
      };
      return [...state, newShip];
    }

    case DELETE_SHIP:
      return [
        ...state.slice(0, action.shipIndex),
        ...state.slice(action.shipIndex + 1)
      ];

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
