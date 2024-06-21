import React from 'react';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

const Date_month = ({ selectedDate }) => {
  const formattedDate = selectedDate ? format(new Date(selectedDate), 'MMMM yyyy', { locale: th }) : 'No date selected';

  return (
    <div>
      <span className='text-2xl font-bold'>{formattedDate}</span>
    </div>
  );
};

export default Date_month;
