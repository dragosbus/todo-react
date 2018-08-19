import React from 'react';

const AlertWrapper = (component, data) => () => (
  <div className="alert">
    {component}
    <p>{data}</p>
  </div>
);
export default AlertWrapper;
