import React from 'react';
import ReactDOM from 'react-dom';
import Doctors from './Doctors';

describe('Doctor', function () {
it('load without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Doctors/>, div);
});
})