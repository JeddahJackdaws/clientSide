import React from 'react';
import ReactDOM from 'react-dom';
import SpecResults from './specResults';

describe('spec results', function () {
it('load without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<specResults/>, div);
});
})