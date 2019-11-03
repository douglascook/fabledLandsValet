import {
  default as reducer,
  initialState,
} from '../reducer';

import {
  updateSkillValue,
  updateMaxStamina,
  updateCurrentStamina,
  updateGod,
  updateShards,
  addAsset,
  removeAsset,
  addItem,
  removeItem,
  createNewCharacter,
  loadSave,
} from '../../actions';


describe('Character reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      initialState
    );
  });

  it('should update a skill value', () => {
    const state = {
      magic: { displayName: 'Magic', value: 6 },
      scouting: { displayName: 'Scouting', value: 6 },
    };
    expect(
      reducer(state, updateSkillValue('scouting', 1))
    ).toEqual({
      magic: { displayName: 'Magic', value: 6 },
      scouting: { displayName: 'Scouting', value: 7 },
    });
    expect(
      reducer(state, updateSkillValue('magic', -2))
    ).toEqual({
      magic: { displayName: 'Magic', value: 4 },
      scouting: { displayName: 'Scouting', value: 6 },
    });
  });

  it('should not update skill values outside bounds', () => {
    const state = {
      magic: { displayName: 'Magic', value: 12 },
      scouting: { displayName: 'Scouting', value: 1 },
    };
    expect(
      reducer(state, updateSkillValue('scouting', -1))
    ).toEqual({
      magic: { displayName: 'Magic', value: 12 },
      scouting: { displayName: 'Scouting', value: 1 },
    });
    expect(
      reducer(state, updateSkillValue('magic', 1))
    ).toEqual({
      magic: { displayName: 'Magic', value: 12 },
      scouting: { displayName: 'Scouting', value: 1 },
    });
  });

  it('should update max stamina', () => {
    const state = {
      stamina: { displayName: 'stamina', value: 12, current: 1 },
      otherKey: { displayName: 'something' }
    };
    expect(
      reducer(state, updateMaxStamina(-4))
    ).toEqual({
      stamina: { displayName: 'stamina', value: 8, current: 1 },
      otherKey: { displayName: 'something' }
    });
    expect(
      reducer(state, updateMaxStamina(4))
    ).toEqual({
      stamina: { displayName: 'stamina', value: 16, current: 1 },
      otherKey: { displayName: 'something' }
    });
    expect(
      reducer(state, updateMaxStamina(-12))
    ).toEqual({
      stamina: { displayName: 'stamina', value: 1, current: 1 },
      otherKey: { displayName: 'something' }
    });
  });

  it('should reduce current stamina if higher than new max', () => {
    expect(
      reducer(
        { stamina: { displayName: 'stamina', value: 10, current: 10 } },
        updateMaxStamina(-2)
      )
    ).toEqual(
      { stamina: { displayName: 'stamina', value: 8, current: 8 } }
    );
  });

  it('should update current stamina', () => {
    const state = {
      stamina: { displayName: 'stamina', value: 12, current: 8 },
      otherKey: { displayName: 'something' }
    };
    expect(
      reducer(state, updateCurrentStamina(-4))
    ).toEqual({
      stamina: { displayName: 'stamina', value: 12, current: 4 },
      otherKey: { displayName: 'something' }
    });
    expect(
      reducer(state, updateCurrentStamina(4))
    ).toEqual({
      stamina: { displayName: 'stamina', value: 12, current: 12 },
      otherKey: { displayName: 'something' }
    });
  });

  it('should not increase current stamina above max', () => {
    const state = { stamina: { displayName: 'stamina', value: 12, current: 8 } };
    expect(
      reducer(state, updateCurrentStamina(8))
    ).toEqual({
      stamina: { displayName: 'stamina', value: 12, current: 12 },
    });
  });

  it('should update god', () => {
    const state = {
      god: { displayName: 'God', value: 'None' },
      otherKey: { displayName: 'something' }
    };
    expect(
      reducer(state, updateGod('Tyrnai'))
    ).toEqual({
      god: { displayName: 'God', value: 'Tyrnai' },
      otherKey: { displayName: 'something' }
    });
  });

  it('should update shards', () => {
    const state = {
      shards: { displayName: 'Shards', value: 300 },
      otherKey: { displayName: 'something' }
    };
    expect(
      reducer(state, updateShards(1000))
    ).toEqual({
      shards: { displayName: 'Shards', value: 1300 },
      otherKey: { displayName: 'something' }
    });
    expect(
      reducer(state, updateShards(-200))
    ).toEqual({
      shards: { displayName: 'Shards', value: 100 },
      otherKey: { displayName: 'something' }
    });
  });

  it('should add an asset', () => {
    const state = {
      titles: { displayName: 'Titles & Honours', value: [], },
      blessings: { displayName: 'Blessings', value: ['sanctity + 1'] }
    };
    expect(
      reducer(state, addAsset('titles', 'Mr'))
    ).toEqual({
      titles: { displayName: 'Titles & Honours', value: ['Mr'], },
      blessings: { displayName: 'Blessings', value: ['sanctity + 1'] }
    });
    expect(
      reducer(state, addAsset('blessings', 'charisma + 1'))
    ).toEqual({
      titles: { displayName: 'Titles & Honours', value: ['Mr'], },
      blessings: { displayName: 'Blessings', value: ['sanctity + 1', 'charisma + 1'] }
    });
  });

  it('should remove an asset', () => {
    const state = {
      titles: { displayName: 'Titles & Honours', value: ['Mr', 'Lady', 'Madam'], },
      blessings: { displayName: 'Blessings', value: ['sanctity + 1'] }
    };
    expect(
      reducer(state, removeAsset('blessings', 0))
    ).toEqual({
      titles: { displayName: 'Titles & Honours', value: ['Mr', 'Lady', 'Madam'], },
      blessings: { displayName: 'Blessings', value: [] }
    });
    expect(
      reducer(state, removeAsset('titles', 1))
    ).toEqual({
      titles: { displayName: 'Titles & Honours', value: ['Mr', 'Madam'], },
      blessings: { displayName: 'Blessings', value: ['sanctity + 1'] }
    });
  });

  it('should modify skills based on item effects', () => {
    const startingState = {
      scouting: { displayName: 'Scouting', value: 6 },
      thievery: { displayName: 'Thievery', value: 6 },
    };
    const item = {
      name: 'telescope',
      effects: [{ skill: 'scouting', value: 4 }, { skill: 'thievery', value: -4 }],
    };

    const withItem = reducer(startingState, addItem(item));
    // check starting state was not mutated
    expect(startingState).not.toEqual(withItem);
    expect(withItem).toEqual({
      scouting: { displayName: 'Scouting', value: 6, modifier: 4 },
      thievery: { displayName: 'Thievery', value: 6, modifier: -4 },
    });

    const withoutItem = reducer(withItem, removeItem(item));
    expect(withItem).not.toEqual(withoutItem);
    expect(withoutItem).toEqual({
      scouting: { displayName: 'Scouting', value: 6, modifier: 0 },
      thievery: { displayName: 'Thievery', value: 6, modifier: 0 },
    });
  });

  it('should create a new character', () => {
    const state = {
      name: {
        displayName: 'Name', value: 'Oldy'
      },
      profession: {
        displayName: 'Profession', value: 'Retired'
      }
    };
    const expected = initialState;
    expected.name.value = 'doug';
    expected.profession.value = 'dev';

    expect(
      reducer(state, createNewCharacter('doug', 'dev'))
    ).toEqual(
      expected
    );
  });

  it('should load a save', () => {
    expect(
      reducer(initialState, loadSave({ character: { name: 'yo' }, other: 'nah' }))
    ).toEqual(
      { name: 'yo' }
    );
  });
});
