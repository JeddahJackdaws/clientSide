import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './reviews';

describe('Reviews', function () {
it('load without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews/>, div);
});
})