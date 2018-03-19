
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/components/App.js';

describe('App', () => {
  const app = shallow(<App />);

  it('renders title', () => {

    expect(app.find('h2').text()).toEqual('Jeopardy');
  });

  it('renders the Categories component', () => {
    expect(app.find('Connect(Categories)').exists()).toBe(true);
  });
});
