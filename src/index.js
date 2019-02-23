import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React-16 Webpack- 4  Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();