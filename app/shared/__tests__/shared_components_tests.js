import React from 'react';
import renderer from 'react-test-renderer';

import {
  RemovableRow,
  SingleItemRow,
  SubmitButtonRow,
  AddRemoveItem,
} from '../components';


describe('RemovableRow', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <RemovableRow name="test me" value="yeah" onRemove={() => null} />
    );
    expect(tree).toMatchSnapshot();
  });
});


describe('SingleItemRow', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SingleItemRow name="test me" value="yeah" onButtonPress={() => null} />
    );
    expect(tree).toMatchSnapshot();
  });
});


describe('SubmitButtonRow', () => {
  it('renders correctly when enabled', () => {
    const tree = renderer.create(
      <SubmitButtonRow title="test me" onPress={() => null} />
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly when disabled', () => {
    const tree = renderer.create(
      <SubmitButtonRow title="test me" onPress={() => null} disabled />
    );
    expect(tree).toMatchSnapshot();
  });
});


describe('AddRemoveItem', () => {
  it('renders correctly when active', () => {
    const tree = renderer.create(
      <AddRemoveItem text="test me" isActive={true} onAdd={() => null} onRemove={() => null} />
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly when inactive', () => {
    const tree = renderer.create(
      <AddRemoveItem text="test me" isActive={false} onAdd={() => null} onRemove={() => null} />
    );
    expect(tree).toMatchSnapshot();
  });
});
