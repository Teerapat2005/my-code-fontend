import React, { useEffect } from 'react';

const My_Date = ({ setSelectedDate }) => {
  useEffect(() => {
    // Set initial date to 1 month before current month
    const today = new Date();
    today.setMonth(today.getMonth() - 1);
    const formattedDate = today.toISOString().slice(0, 7); // Format: YYYY-MM
    setSelectedDate(formattedDate);
  }, [setSelectedDate]);
  
  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  }
  
  return (
    <input
      className='h-6 bg-transparent font-bold text-sm'
      style={{ width: "120px" }}
      type="month"
      value={setSelectedDate}
      onChange={handleChange}
    />
  );
}

export default My_Date;
