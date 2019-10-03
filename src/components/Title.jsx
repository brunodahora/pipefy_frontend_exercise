import * as React from 'react';

const Title = ({ publicFormSettings: { organizationName, title } }) => {
  return (
    <div className="box">
      <h1>{organizationName}</h1>
      <h2>{title}</h2>
    </div>
  );
};
export default Title;
