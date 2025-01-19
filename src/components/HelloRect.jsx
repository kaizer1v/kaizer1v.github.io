import React from 'react';

const HelloReact = ({ name }) => {
  return (
    <div style={{ padding: '20px', border: '2px solid #333', borderRadius: '8px' }}>
      <h2>Hello from React!</h2>
      <p>Welcome, {name}!</p>
    </div>
  );
};

export default HelloReact;
