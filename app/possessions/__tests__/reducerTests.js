import {
  default as reducer,
  initialState,
} from '../reducer';

import {
  addItem,
  removeItem,
  swapItemCollection,
  addStash,
  removeStash,
  createNewCharacter,
  loadSave,
} from '../../actions';


describe('Possessions reducer', () => {
  // mock Date.now() since it is used to generate item keys
  const mockNow = '1234567890';
  jest
    .spyOn(global.Date, 'now')
    .mockImplementation(() => mockNow);

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      initialState
    );
  });

  it('should add an item', () => {
    expect(
      reducer({ personal: { items: [] } }, addItem({ name: 'smoulder fish' }))
    ).toEqual(
      { personal: { items: [{ name: 'smoulder fish', key: mockNow }] } }
    );
  });

  it('should remove an item', () => {
    expect(
      reducer(
        { personal: { items: [{ name: 'a' }, { name: 'b' }, { name: 'c' }] } },
        removeItem({ name: 'b' }, 1)
      )
    ).toEqual(
      { personal: { items: [{ name: 'a' }, { name: 'c' }] } }
    );
    expect(
      reducer(
        { personal: { items: [{ name: 'a' }] } }, removeItem({ name: 'a' }, 0)
      )
    ).toEqual(
      { personal: { items: [] } }
    );
  });

  it('should move an item to another collection', () => {
    const itemA = { name: 'A', key: 'a' };
    const itemB = { name: 'B', key: 'b' };
    const itemC = { name: 'C', key: 'c' };
    const initial = {
      personal: { items: [itemA] },
      stash1: { items: [itemB, itemC] },
      stash2: { items: [] },
    };

    expect(
      reducer(initial, swapItemCollection(itemA, 'personal', 'stash1'))
    ).toEqual({
      personal: { items: [] },
      stash1: { items: [itemB, itemC, itemA] },
      stash2: { items: [] },
    });
    expect(
      reducer(initial, swapItemCollection(itemC, 'stash1', 'stash2'))
    ).toEqual({
      personal: { items: [itemA] },
      stash1: { items: [itemB] },
      stash2: { items: [itemC] },
    });
  });

  it('should add a stash', () => {
    expect(
      reducer({}, addStash('cubbyhole'))
    ).toEqual(
      { cubbyhole: { shards: 0, items: [] } }
    );
    expect(
      reducer({ holeInTheWall: { shards: 0, items: [] } }, addStash('cubbyhole'))
    ).toEqual({
      holeInTheWall: { shards: 0, items: [] },
      cubbyhole: { shards: 0, items: [] }
    });
  });

  it('should remove a stash', () => {
    expect(
      reducer(
        {
          holeInTheWall: { shards: 0, items: [] },
          cubbyhole: { shards: 0, items: [] }
        },
        removeStash('holeInTheWall')
      )
    ).toEqual(
      { cubbyhole: { shards: 0, items: [] } }
    );
  });

  it('should reset for new character', () => {
    const state = {
      personal: { items: [{ name: 'a' }] },
      stash1: { items: [{ name: 'b' }, { name: 'c' }] },
      stash2: { items: [] },
    };
    expect(
      reducer(state, createNewCharacter('doug', 'dev'))
    ).toEqual(
      initialState
    );
  });

  it('should load a save', () => {
    expect(
      reducer(initialState, loadSave({
        possessions: { personal: { items: [{ name: 'smoulder fish', key: mockNow }] } },
        other: 'nah'
      }))
    ).toEqual(
      { personal: { items: [{ name: 'smoulder fish', key: mockNow }] }}
    );
  });
});
