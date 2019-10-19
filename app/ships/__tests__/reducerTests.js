import {
  default as reducer,
  initialState,
} from '../reducer';

import {
  addNewShip,
  deleteShip,
  updatePort,
  updateCrew,
  updateCargo,
} from '../../actions';


describe('Ships reducer', () => {
  // mock Date.now() since it is used to generate the ships' keys
  const mockNow = '1234567890';
  jest
    .spyOn(global.Date, 'now')
    .mockImplementation(() => mockNow);

  const mockShip = {
    name: 'Boaty McBoatFace',
    type: 'Galleon',
    crew: 'Poor',
    cargo: ['None', 'None', 'None'],
    port: 'No Port',
    key: mockNow,
  };
  const fakeShip = { fakeShip: { name: 'Not A Ship' } };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      initialState
    );
  });

  it('should add a new ship', () => {
    expect(
      reducer([], addNewShip('Boaty McBoatFace', 'Galleon', 'Poor'))
    ).toEqual(
      [mockShip]
    );
    expect(
      reducer([fakeShip], addNewShip('Boaty McBoatFace', 'Galleon', 'Poor'))
    ).toEqual(
      [fakeShip, mockShip]
    );
  });

  it('should delete a ship', () => {
    expect(
      reducer([fakeShip, mockShip, fakeShip], deleteShip(1))
    ).toEqual(
      [fakeShip, fakeShip]
    );
  });

  it('should update the crew', () => {
    expect(
      reducer([fakeShip, mockShip, fakeShip], updateCrew(1, 'Excellent'))
    ).toEqual(
      [fakeShip, { ...mockShip, crew: 'Excellent' }, fakeShip]
    );
  });

  it('should update the port', () => {
    expect(
      reducer([fakeShip, mockShip, fakeShip], updatePort(1, 'Easter Island'))
    ).toEqual(
      [fakeShip, { ...mockShip, port: 'Easter Island' }, fakeShip]
    );
  });

  it('should update the cargo', () => {
    expect(
      reducer([fakeShip, mockShip, fakeShip], updateCargo(1, 2, 'Laptops'))
    ).toEqual(
      [fakeShip, { ...mockShip, cargo: ['None', 'None', 'Laptops'] }, fakeShip]
    );
  });
});
