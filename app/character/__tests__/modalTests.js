import React from 'react';
import renderer from 'react-test-renderer';

import {
  GodSelectModal,
  ListItemsModal,
  ShardsChangeModal,
  SkillChangeModal,
  StaminaChangeModal,
} from '../modals';


const doNothing = () => null;

describe('GodSelectModal', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <GodSelectModal
        visible
        onRequestClose={doNothing}
        updateSelected={doNothing}
        selected="Tambu"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});


describe('ListItemsModal', () => {
  function buildModalWithItems(value) {
    const items = { displayName: 'testing skills', value };
    const tree = renderer.create(
      <ListItemsModal
        visible
        addNew={doNothing}
        onRequestClose={doNothing}
        remove={doNothing}
        items={items}
      />
    );
    return tree;
  }
  it('renders correctly with no items', () => {
    const tree = buildModalWithItems([]);
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with one item', () => {
    const tree = buildModalWithItems(['snapshots!']);
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with multiple items', () => {
    const tree = buildModalWithItems(['snapshots!', 'component', 'integration']);
    expect(tree).toMatchSnapshot();
  });
});


// TODO how to test components with internal state?
describe('ShardsChangeModal', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ShardsChangeModal
        visible
        onRequestClose={doNothing}
        updateAmount={doNothing}
        amount={999}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});


describe('SkillChangeModal', () => {
  function buildModalWithSkill(skill) {
    return renderer.create(
      <SkillChangeModal
        visible
        onRequestClose={doNothing}
        updateValue={doNothing}
        skill={skill}
      />
    );
  }
  it('renders correctly with no value', () => {
    const tree = buildModalWithSkill(undefined);
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with a value', () => {
    const tree = buildModalWithSkill({ displayName: 'testing power', value: 100 });
    expect(tree).toMatchSnapshot();
  });
});


describe('StaminaChangeModal', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <StaminaChangeModal
        visible
        onRequestClose={doNothing}
        updateCurrent={doNothing}
        updateMax={doNothing}
        stamina={{ displayName: 'stamina', value: 10, current: 5 }}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
