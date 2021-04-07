import React from 'react';
import App from './App';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import InputBox from './components/InputBox';
import ShoppingList from './components/ShoppingList';
import { shallow, mount } from 'enzyme';

describe('rendering components', () => {
  it('renders app component without crashing', () => {
    shallow(<App />);
  });
  it('renders app component header without crashing', () => {
    const wrapper = shallow(<Header />);
    const header = <h2>OpenStax Shopping List</h2>;
    expect(wrapper.contains(header)).toEqual(true);
  });
  it('renders shoplist component without crashing', () => {
    shallow(<ShoppingList />);
  });
});
