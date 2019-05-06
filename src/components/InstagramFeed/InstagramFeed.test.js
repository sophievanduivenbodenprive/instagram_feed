import React from 'react';
import ReactDOM from 'react-dom';
import InstagramFeed from './InstagramFeed';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InstagramFeed />, div);
  ReactDOM.unmountComponentAtNode(div);
});
