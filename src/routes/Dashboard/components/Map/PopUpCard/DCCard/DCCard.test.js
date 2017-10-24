import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import DCCard from './DCCard';

const setup = () => {
  const spies = {
  };
  const props = {
    dc: {
      contact: {
        name: 'Joseph Smith',
      },
      id: 1,
      address: {
        state: 'Utah',
        city: 'Salt Lake City',
        country: 'US',
        latitude: 40.71,
        longitude: -111.9,
      },
    },
  };
  const component = shallow(<DCCard {...props.dc} />);

  return { spies, props, component };
};

test.todo('write tests for DCCard once complete.');
test('(Component) Renders with expected elements', t => {
  const { component } = setup();
  t.true(component.is('div'),
    'is wrapped by a div');
});
