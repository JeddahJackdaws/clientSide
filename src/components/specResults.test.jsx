import React from 'react';
import ReactDOM from 'react-dom';
import SpecResults from './specResults';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<specResults spec="عيون"/>, div);
});