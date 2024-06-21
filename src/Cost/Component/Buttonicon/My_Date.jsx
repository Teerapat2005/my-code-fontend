import React from 'react';

const My_Date = ({ setSelectedDate }) => {
  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  }
  
  return (
    <input
      className='h-6 bg-transparent font-bold text-sm'
      style={{ width: "120px" }}
      type="month"
      onChange={handleChange}
    />
  );
}

export default My_Date;
