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
    const initial = {
      personal: { items: [{ name: 'a' }] },
      stash1: { items: [{ name: 'b' }, { name: 'c' }] },
      stash2: { items: [] },
    };

    expect(
      reducer(initial, swapItemCollection(0, 'personal', 'stash1'))
    ).toEqual({
      personal: { items: [] },
      stash1: { items: [{ name: 'b' }, { name: 'c' }, { name: 'a' }] },
      stash2: { items: [] },
    });
    expect(
      reducer(initial, swapItemCollection(1, 'stash1', 'stash2'))
    ).toEqual({
      personal: { items: [{ name: 'a' }] },
      stash1: { items: [{ name: 'b' }] },
      stash2: { items: [{ name: 'c' }] },
    });
  });

  it('should add a stash', () => {
    expect(
      reducer({}, addStash('cubbyhole'))
    ).toEqual(
      { cubbyhole: { shards: 0, items: [] } }
    );
    expect(
      reducer({ holeInTheWall: { shards: 0, items: [] }}, addStash('cubbyhole'))
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
});
