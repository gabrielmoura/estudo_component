import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlButton } from '../.';

const App = () => {
  return (
    <div>
      <BlButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
