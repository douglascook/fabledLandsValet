import codewords from '../reducer';
import {
  addCodeword,
  removeCodeword,
} from '../../actions';

const DEFAULT_STATE = ['a', 'b', 'c'];


describe('Codewords reducer', () => {
  it('should return the initial state', () => {
    expect(
      codewords(DEFAULT_STATE, {})
    ).toEqual(
      DEFAULT_STATE
    );
  });

  it('should add a codeword', () => {
    expect(
      codewords([], addCodeword('new codeword'))
    ).toEqual(
      ['new codeword']
    );
    expect(
      codewords(DEFAULT_STATE, addCodeword('new codeword'))
    ).toEqual(
      ['a', 'b', 'c', 'new codeword']
    );
  });

  it('should remove a codeword', () => {
    expect(
      codewords(DEFAULT_STATE, removeCodeword('a'))
    ).toEqual(
      ['b', 'c']
    );
    expect(
      codewords(DEFAULT_STATE, removeCodeword('b'))
    ).toEqual(
      ['a', 'c']
    );
    expect(
      codewords(DEFAULT_STATE, removeCodeword('c'))
    ).toEqual(
      ['a', 'b']
    );
    expect(
      codewords(DEFAULT_STATE, removeCodeword('d'))
    ).toEqual(
      ['a', 'b', 'c']
    );
  });
});
