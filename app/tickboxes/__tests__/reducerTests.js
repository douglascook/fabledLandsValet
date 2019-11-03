import {
  default as reducer,
  initialState,
} from '../reducer';

import {
  addTick,
  removeTick,
  createNewCharacter,
  loadSave,
} from '../../actions';


describe('Tickboxes reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      initialState
    );
  });

  it('should add a tick', () => {
    expect(
      reducer({ 0: [], 1: [100] }, addTick(0, 123))
    ).toEqual(
      { 0: [123], 1: [100] }
    );
    expect(
      reducer({ 0: [], 1: [100] }, addTick(1, 123))
    ).toEqual(
      { 0: [], 1: [100, 123] }
    );
  });

  it('should remove a tick', () => {
    expect(
      reducer({ 0: [100], 1: [] }, removeTick(0, 100))
    ).toEqual(
      { 0: [], 1: [] }
    );
    expect(
      reducer({ 0: [100], 1: [100, 200, 300] }, removeTick(1, 200))
    ).toEqual(
      { 0: [100], 1: [100, 300] }
    );
  });

  it('should reset for new character', () => {
    expect(
      reducer({ 0: [100] }, createNewCharacter('doug', 'dev'))
    ).toEqual(
      initialState
    );
  });

  it('should load a save', () => {
    expect(
      reducer(initialState, loadSave({ tickboxes: { 0: [123] }, other: 'nah' }))
    ).toEqual(
      { 0: [123] }
    );
  });
});
