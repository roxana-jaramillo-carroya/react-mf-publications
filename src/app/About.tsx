import React from 'react';
import { Link } from 'react-router-dom';

export default ({ navigate }: {navigate: (route: string) => void}): JSX.Element => {
  return (
    <div>
      <h1>About page</h1>
      <Link to="/">Home</Link>
      <br/>
      <button onClick={navigate.bind(this, '/app2')}>app 2</button>
    </div>
  );
};
