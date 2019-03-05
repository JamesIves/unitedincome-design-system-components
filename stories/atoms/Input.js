import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../../components/Input';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/Input', module);

stories.addDecorator(withKnobs).add('default', () => (
  <div className="row">
    <div className="col-xs-12">
      <Input
        label={(text('label'), 'Address')}
        append={boolean('append')}
        prepend={boolean('prepend')}
      />
    </div>
  </div>
));
