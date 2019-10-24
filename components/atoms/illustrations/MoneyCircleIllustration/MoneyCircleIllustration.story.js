import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import MoneyCircleIllustration from './MoneyCircleIllustration';
import MoneyCircleIllustrationReadMe from './MoneyCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/MoneyCircleIllustration',
  module
);

stories.addParameters({
  docs: {
    page: MoneyCircleIllustrationReadMe,
  },
});

const defaultProps = (illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
});

stories.add('default', () => (
  <MoneyCircleIllustration {...defaultProps(false)} />
));

stories.add('illuminated', () => (
  <MoneyCircleIllustration {...defaultProps(true)} />
));
