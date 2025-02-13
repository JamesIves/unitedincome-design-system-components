import {mount} from 'enzyme';
import React from 'react';
import test from 'tape';
import PureChanceOfSuccess, {
  percentDescriptor,
  percentIsValid,
} from './ChanceOfSuccess';

test('ChanceOfSuccess - renders correctly ', (t) => {
  const props = {
    percent: 30,
    currentPlanChanceOfSuccess: 30,
    refreshedPlanChanceOfSuccess: 30,
    isRunningPlan: false,
    isDark: true,
  };

  const component = mount(<PureChanceOfSuccess {...props} />);

  t.equals(component.find('svg').length, 1, 'Should locate the SVG');

  t.equals(
    component.find('style').length,
    1,
    'Should include the component inline styles',
  );

  t.end();
});

test('ChanceOfSuccess - running plan', (t) => {
  const props = {
    percent: 5,
    isRunningPlan: true,
    isDraftPlan: false,
  };

  const component = mount(<PureChanceOfSuccess {...props} />);

  t.equals(
    component.find('svg').find('text').at(0).prop('fontSize'),
    '3.8rem',
    'Should have the correct font size',
  );

  t.equals(
    component.find('svg').find('text').text(),
    'TBD',
    'Should have the correct text indicating it is TBD',
  );

  t.end();
});

test('ChanceOfSuccess - missing percent', (t) => {
  const props = {
    percent: null,
    isRunningPlan: false,
    isDraftPlan: false,
    isDark: true,
  };

  const component = mount(<PureChanceOfSuccess {...props} />);

  t.equals(
    component.find('svg').find('text').at(0).prop('fontSize'),
    '3.8rem',
    'Use font size for word values',
  );

  t.equals(
    component.find('svg').find('text').text(),
    'N/A',
    'Use text for missing percent value',
  );

  t.end();
});

test('ChanceOfSuccess - Correctly describes the value', (t) => {
  t.plan(5);

  t.equals(percentDescriptor(0), 'Very Low');

  t.equals(percentDescriptor(30), 'Low');

  t.equals(percentDescriptor(50), 'Moderate');

  t.equals(percentDescriptor(79), 'High');

  t.equals(percentDescriptor(99), 'Very High');
});

test('ChanceOfSuccess - Correctly informs if the value is valid', (t) => {
  t.plan(5);

  t.true(percentIsValid(50));

  t.true(percentIsValid(0));

  t.true(percentIsValid(100));

  t.false(percentIsValid(-5));

  t.false(percentIsValid(150));
});
