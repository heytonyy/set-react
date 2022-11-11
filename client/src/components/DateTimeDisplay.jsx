import React from 'react';

const DateTimeDisplay = ({ value, isDanger }) => {
  return (
    <div className={isDanger ? 'danger' : null}>
      {value}
    </div>
  );
};

export default DateTimeDisplay;
