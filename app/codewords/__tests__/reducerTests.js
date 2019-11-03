import {
  default as reducer,
  initialState,
} from '../reducer';

import {
  addCodeword,
  removeCodeword,
  createNewCharacter,
  loadSave,
} from '../../actions';


describe('Codewords reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      initialState
    );
  });

  it('should add a codeword', () => {
    expect(
      reducer([], addCodeword('new codeword'))
    ).toEqual(
      ['new codeword']
    );
    expect(
      reducer(['a', 'b', 'c'], addCodeword('new codeword'))
    ).toEqual(
      ['a', 'b', 'c', 'new codeword']
    );
  });

  it('should remove a codeword', () => {
    expect(
      reducer(['a', 'b', 'c'], removeCodeword('a'))
    ).toEqual(
      ['b', 'c']
    );
    expect(
      reducer(['a', 'b', 'c'], removeCodeword('b'))
    ).toEqual(
      ['a', 'c']
    );
    expect(
      reducer(['a', 'b', 'c'], removeCodeword('c'))
    ).toEqual(
      ['a', 'b']
    );
    expect(
      reducer(['a', 'b', 'c'], removeCodeword('d'))
    ).toEqual(
      ['a', 'b', 'c']
    );
  });

  it('should reset for new character', () => {
    expect(
      reducer(['a', 'b', 'c'], createNewCharacter('doug', 'dev'))
    ).toEqual(
      initialState
    );
  });

  it('should load a save', () => {
    expect(
      reducer(initialState, loadSave({ codewords: ['blah', 'eh'], other: 'nah' }))
    ).toEqual(
      ['blah', 'eh']
    );
  });
});
