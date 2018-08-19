import React from 'react';

const AlertWrapper = (component, data) =>
  class Alert extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      console.log(data);
    }
    render() {
      return <div className="alert">{component}</div>;
    }
  };

export default AlertWrapper;
