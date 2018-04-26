import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './loading';

describe('Loading', function () {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading/>, div);
});
})