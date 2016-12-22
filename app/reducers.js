const initialState = {
  stats: [
    { name: 'Name', value: 'Gerald Littlefoot' },
    { name: 'Profession', value: 'Wayfarer' },
    { name: 'Rank', value: 1 },
    { name: 'Defence', value: 5 },
    { name: 'Stamina', value: 12 },
    { name: 'Charisma', value: 5 },
    { name: 'Combat', value: 5 },
    { name: 'Magic', value: 5 },
    { name: 'Sanctity', value: 5 },
    { name: 'Scouting', value: 5 },
    { name: 'Thievery', value: 5 },
    { name: 'God', value: 'None' },
    { name: 'Money', value: '6 shards' },
    { name: 'Titles and Honours', value: 'None' },
    { name: 'Blessings', value: 'None' },
    { name: 'Resurrection Arrangements', value: 'None' },
  ],
  inventory: [
    { name: 'Wooden sword', effect: 'Combat + 1' },
  ],
};

// currently this defines the only store
function character(state = initialState, action) {
  return state;
}

export default character;
