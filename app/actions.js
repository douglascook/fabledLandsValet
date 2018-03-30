export const ADD_ITEM = 'ADD_ITEM';
// add an item to possessions
export const addItem = item => ({
  type: ADD_ITEM,
  item,
});

export const REMOVE_ITEM = 'REMOVE_ITEM';
// remove an item from possessions
export const removeItem = (item, index) => ({
  type: REMOVE_ITEM,
  item,
  index,
});

export const SWAP_ITEM_COLLECTION = 'SWAP_ITEM_COLLECTION';
export const swapItemCollection = (itemIndex, currentCol, newCol) => ({
  type: SWAP_ITEM_COLLECTION,
  itemIndex,
  currentCol,
  newCol,
});

export const UPDATE_SKILL_VALUE = 'UPDATE_SKILL_VALUE';

export const updateSkillValue = (skillName, newValue) => ({
  type: UPDATE_SKILL_VALUE,
  skillName,
  newValue,
});

export const ADD_ASSET = 'ADD_ASSET';
// add a title, blessing or resurrection agreement
export const addAsset = (attr, item) => ({
  type: ADD_ASSET,
  attr,
  item
});

export const REMOVE_ASSET = 'REMOVE_ASSET';
// remove a title, blessing or resurrection agreement
export const removeAsset = (attr, index) => ({
  type: REMOVE_ASSET,
  attr,
  index
});

export const REMOVE_CODEWORD = 'REMOVE_CODEWORD';

export const removeCodeword = codeword => ({
  type: REMOVE_CODEWORD,
  codeword,
});

export const ADD_CODEWORD = 'ADD_CODEWORD';

export const addCodeword = codeword => ({
  type: ADD_CODEWORD,
  codeword,
});

export const ADD_TICK = 'ADD_TICK';

export const addTick = (book, pageNumber) => ({
  type: ADD_TICK,
  book,
  pageNumber
});

export const REMOVE_TICK = 'REMOVE_TICK';

export const removeTick = (book, pageNumber) => ({
  type: REMOVE_TICK,
  book,
  pageNumber
});

export const UPDATE_CREW = 'UPDATE_CREW';

export const updateCrew = (shipIndex, quality) => ({
  type: UPDATE_CREW,
  shipIndex,
  quality,
});

export const UPDATE_CARGO = 'UPDATE_CARGO';

export const updateCargo = (shipIndex, cargoIndex, cargo) => ({
  type: UPDATE_CARGO,
  shipIndex,
  cargoIndex,
  cargo,
});

export const UPDATE_PORT = 'UPDATE_PORT';

export const updatePort = (shipIndex, port) => ({
  type: UPDATE_PORT,
  shipIndex,
  port
});

export const ADD_NEW_SHIP = 'ADD_NEW_SHIP';

export const addNewShip = (name, shipType, crew) => ({
  type: ADD_NEW_SHIP,
  name,
  shipType,
  crew
});

export const DELETE_SHIP = 'DELETE_SHIP';

export const deleteShip = shipIndex => ({
  type: DELETE_SHIP,
  shipIndex,
});
