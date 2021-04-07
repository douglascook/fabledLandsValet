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

  it('should add a new tick', () => {
    expect(
      reducer({ 0: [], 1: [[100, 1]] }, addTick(0, 123))
    ).toEqual(
      { 0: [[123, 1]], 1: [[100, 1]] }
    );
    expect(
      reducer({ 0: [], 1: [[100, 1]] }, addTick(1, 123))
    ).toEqual(
      { 0: [], 1: [[100, 1], [123, 1]] }
    );
  });

  it('should increment an existing tick', () => {
    expect(
      reducer({ 0: [[123, 1]], 1: [[100, 1]] }, addTick(1, 100))
    ).toEqual(
      { 0: [[123, 1]], 1: [[100, 2]] }
    );
    expect(
      reducer({ 0: [], 1: [[100, 1], [123, 2]] }, addTick(1, 123))
    ).toEqual(
      { 0: [], 1: [[100, 1], [123, 3]] }
    );
  });

  it('should decrement an existing tick', () => {
    expect(
      reducer({ 0: [[100, 2]], 1: [] }, removeTick(0, 100))
    ).toEqual(
      { 0: [[100, 1]], 1: [] }
    );
    expect(
      reducer({ 0: [[100, 1]], 1: [[100, 1], [200, 2], [300, 3]] }, removeTick(1, 200))
    ).toEqual(
      { 0: [[100, 1]], 1: [[100, 1], [200, 1], [300, 3]] }
    );
  });

  it('should remove a tick', () => {
    expect(
      reducer({ 0: [[100, 1]], 1: [] }, removeTick(0, 100))
    ).toEqual(
      { 0: [], 1: [] }
    );
    expect(
      reducer({ 0: [[100, 1]], 1: [[100, 1], [200, 1], [300, 1]] }, removeTick(1, 200))
    ).toEqual(
      { 0: [[100, 1]], 1: [[100, 1], [300, 1]] }
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
