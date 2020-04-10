import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../stores/store';

import IndexPage from './index';

describe('default test', () => {
  test('pages/index', () => {
    const wrapper = mount(
      <Provider store={store}>
        <IndexPage />
      </Provider>
    );
    expect(wrapper.find('h1').text()).toEqual('hello world!');
  });
});
