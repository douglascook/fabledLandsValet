import {
  default as codewords,
  initialState,
} from '../reducer';

import {
  addCodeword,
  removeCodeword,
} from '../../actions';


describe('Codewords reducer', () => {
  it('should return the initial state', () => {
    expect(
      codewords(undefined, {})
    ).toEqual(
      initialState
    );
  });

  it('should add a codeword', () => {
    expect(
      codewords([], addCodeword('new codeword'))
    ).toEqual(
      ['new codeword']
    );
    expect(
      codewords(['a', 'b', 'c'], addCodeword('new codeword'))
    ).toEqual(
      ['a', 'b', 'c', 'new codeword']
    );
  });

  it('should remove a codeword', () => {
    expect(
      codewords(['a', 'b', 'c'], removeCodeword('a'))
    ).toEqual(
      ['b', 'c']
    );
    expect(
      codewords(['a', 'b', 'c'], removeCodeword('b'))
    ).toEqual(
      ['a', 'c']
    );
    expect(
      codewords(['a', 'b', 'c'], removeCodeword('c'))
    ).toEqual(
      ['a', 'b']
    );
    expect(
      codewords(['a', 'b', 'c'], removeCodeword('d'))
    ).toEqual(
      ['a', 'b', 'c']
    );
  });
});
