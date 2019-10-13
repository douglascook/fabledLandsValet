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
export const swapItemCollection = (itemIndex, oldCol, newCol) => ({
  type: SWAP_ITEM_COLLECTION,
  itemIndex,
  oldCol,
  newCol,
});

export const ADD_STASH = 'ADD_STASH';
export const addStash = name => ({
  type: ADD_STASH,
  name
});

export const REMOVE_STASH = 'REMOVE STASH';
export const removeStash = name => ({
  type: REMOVE_STASH,
  name
});

export const UPDATE_SKILL_VALUE = 'UPDATE_SKILL_VALUE';
export const updateSkillValue = (skillName, modifier) => ({
  type: UPDATE_SKILL_VALUE,
  skillName,
  modifier,
});

export const UPDATE_MAX_STAMINA = 'UPDATE_MAX_STAMINA';
export const updateMaxStamina = modifier => ({
  type: UPDATE_MAX_STAMINA,
  modifier,
});

export const UPDATE_CURRENT_STAMINA = 'UPDATE_CURRENT_STAMINA';
export const updateCurrentStamina = modifier => ({
  type: UPDATE_CURRENT_STAMINA,
  modifier,
});

export const UPDATE_GOD = 'UPDATE_GOD';
export const updateGod = newGod => ({
  type: UPDATE_GOD,
  newGod,
});

export const UPDATE_SHARDS = 'UPDATE_SHARDS';
export const updateShards = modifier => ({
  type: UPDATE_SHARDS,
  modifier,
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
