export const ADD_ITEM = 'ADD_ITEM';

export const addItem = item => ({
  type: ADD_ITEM,
  item,
});

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeItem = (item, index) => ({
  type: REMOVE_ITEM,
  item,
  index,
});

export const UPDATE_SKILL_VALUE = 'UPDATE_SKILL_VALUE';

export const updateSkillValue = (skillName, newValue) => ({
  type: UPDATE_SKILL_VALUE,
  skillName,
  newValue,
});

export const ADD_ITEM_TO_ATTRIBUTE = 'ADD_ITEM_TO_ATTRIBUTE';

export const addItemToAttribute = (name, item) => ({
  type: ADD_ITEM_TO_ATTRIBUTE,
  name,
  item
});
