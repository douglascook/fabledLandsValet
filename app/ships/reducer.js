import {
  ADD_NEW_SHIP,
  DELETE_SHIP,
  UPDATE_PORT,
  UPDATE_CREW,
  UPDATE_CARGO,
  CREATE_NEW_CHARACTER,
  LOAD_SAVE,
} from '../actions';

import {
  SHIP_TYPES,
} from '../data';


// Example state:
// [{ name: 'Boaty McBoatFace', type: 'Galleon', crew: 'Poor', cargo: ['None', 'None', 'None'],
//    port: 'No Port', key: 12345}]
export const initialState = [];

export default function ships(state = initialState, action) {
  switch (action.type) {

    case ADD_NEW_SHIP: {
      const capacity = SHIP_TYPES.find((s) => s.type === action.shipType).capacity;
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

    case CREATE_NEW_CHARACTER:
      return initialState;

    case LOAD_SAVE:
      return action.state.ships;

    default:
      return state;
  }
}
