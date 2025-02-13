import {cleanup, fireEvent, getByTestId, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import ShieldCircleIllustration from './ShieldCircleIllustration';

test('ShieldCircleIllustration - renders', (t) => {
  try {
    const component = render(<ShieldCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ShieldCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('ShieldCircleIllustration - renders the draft illustration', (t) => {
  try {
    const component = render(<ShieldCircleIllustration draft />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ShieldCircleIllustration component.',
    );

    t.true(component.getByTestId('draft'), 'Draft illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('ShieldCircleIllustration - renders the colored illustration', (t) => {
  try {
    const component = render(<ShieldCircleIllustration color />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ShieldCircleIllustration component.',
    );

    t.true(component.getByTestId('color'), 'Color illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});

test('ShieldCircleIllustration - handleClick', (t) => {
  try {
    const component = render(<ShieldCircleIllustration />);

    t.equals(
      component.container.querySelectorAll('svg').length,
      1,
      'Should load the ShieldCircleIllustration component.',
    );

    t.true(component.getByTestId('default'), 'Default illustration');

    fireEvent.click(getByTestId(component.container, 'default'));

    t.true(component.getByTestId('illuminated'), 'Illuminated illustration');
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
