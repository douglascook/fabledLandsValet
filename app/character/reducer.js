import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_SKILL_VALUE,
  UPDATE_MAX_STAMINA,
  UPDATE_CURRENT_STAMINA,
  UPDATE_GOD,
  UPDATE_SHARDS,
  ADD_ASSET,
  REMOVE_ASSET,
  CREATE_NEW_CHARACTER,
} from '../actions';


export const initialState = {
  name: {
    displayName: 'Name', value: 'Gerald Littlefoot'
  },
  profession: {
    displayName: 'Profession', value: 'Wayfarer'
  },
  rank: {
    displayName: 'Rank', value: 1
  },
  defence: {
    displayName: 'Defence'
  },
  stamina: {
    displayName: 'Stamina', value: 12, current: 12,
  },
  charisma: {
    displayName: 'Charisma', value: 5
  },
  combat: {
    displayName: 'Combat', value: 5, modifier: 1
  },
  magic: {
    displayName: 'Magic', value: 5
  },
  sanctity: {
    displayName: 'Sanctity', value: 5
  },
  scouting: {
    displayName: 'Scouting', value: 5
  },
  thievery: {
    displayName: 'Thievery', value: 5
  },
  shards: {
    displayName: 'Shards', value: 6
  },
  god: {
    displayName: 'God', value: 'None'
  },
  titles: {
    displayName: 'Titles & Honours', value: [],
  },
  blessings: {
    displayName: 'Blessings', value: [],
  },
  resurrection: {
    displayName: 'Resurrection Arrangements', value: [],
  },
};

export default function character(state = initialState, action) {
  switch (action.type) {

    case ADD_ITEM:
      return applySkillModifiers(
        state, action.item, (value, modifier) => (value + modifier)
      );

    case REMOVE_ITEM:
      return applySkillModifiers(
        state, action.item, (value, modifier) => (value - modifier)
      );

    case UPDATE_SKILL_VALUE: {
      const { skillName, modifier } = action;
      // range for skill values is [1, 12]
      const newValue = Math.max(
        Math.min(state[skillName].value + modifier, 12),
        1
      );
      return {
        ...state,
        [skillName]: {
          ...state[skillName],
          value: newValue
        },
      };
    }

    case UPDATE_MAX_STAMINA: {
      const { stamina } = state;
      // max cannot go below one
      const newMax = Math.max(stamina.value + action.modifier, 1);
      return {
        ...state,
        stamina: {
          ...stamina,
          value: newMax,
          // current cannot be higher than max
          current: Math.min(stamina.current, newMax),
        },
      };
    }

    case UPDATE_CURRENT_STAMINA: {
      const { stamina } = state;
      // current cannot be higher than max, and cannot go below zero
      const newCurrent = Math.max(
        Math.min(stamina.current + action.modifier, stamina.value),
        0
      );
      return {
        ...state,
        stamina: {
          ...stamina,
          ...state.stamina,
          current: newCurrent,
        }
      };
    }

    case UPDATE_GOD:
      return {
        ...state,
        god: {
          ...state.god,
          value: action.newGod
        },
      };

    case UPDATE_SHARDS:
      return {
        ...state,
        shards: {
          ...state.shards,
          value: state.shards.value + action.modifier,
        }
      };

    case ADD_ASSET: {
      const items = state[action.attr].value;
      const newState = { ...state };
      newState[action.attr].value = [...items, action.item];
      return newState;
    }

    case REMOVE_ASSET: {
      const { attr, index } = action;
      const items = [...state[attr].value];
      return {
        ...state,
        [attr]: {
          ...state[attr],
          value: [
            ...items.slice(0, index),
            ...items.slice(index + 1)
          ]
        }
      };
    }

    case CREATE_NEW_CHARACTER: {
      const { name, profession } = action;
      return {
        ...initialState,
        name: {
          ...initialState.name,
          value: name
        },
        profession: {
          ...initialState.profession,
          value: profession
        }
      };
    }

    default:
      return state;
  }
}

function applySkillModifiers(state, item, applyEffect) {
  let newState = { ...state };

  if (item.effects) {
    item.effects.forEach(effect => {
      const currentModifier = state[effect.skill].modifier || 0;
      newState = {
        ...newState,
        [effect.skill]: {
          ...newState[effect.skill],
          modifier: applyEffect(currentModifier, effect.value),
        }
      };
    });
  }
  return newState;
}
